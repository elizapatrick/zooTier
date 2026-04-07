import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [tiers, setTiers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [health, setHealth] = useState('unbekannt')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [habitatFilter, setHabitatFilter] = useState('')
  const [recommendation, setRecommendation] = useState(null)

  const filteredTiers = useMemo(() => {
    if (!habitatFilter.trim()) {
      return tiers
    }

    return tiers.filter((tier) =>
      tier.habitat.toLowerCase().includes(habitatFilter.toLowerCase()),
    )
  }, [tiers, habitatFilter])

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError('')

        const healthResponse = await fetch('/api/health')
        const healthData = await healthResponse.json()
        setHealth(healthData.status)

        const tiersResponse = await fetch(
          `/api/tiers?favoritesOnly=${favoritesOnly}`,
        )

        if (!tiersResponse.ok) {
          throw new Error('Tierdaten konnten nicht geladen werden.')
        }

        const tiersData = await tiersResponse.json()
        setTiers(tiersData.items)
      } catch (err) {
        setError(err.message || 'Unbekannter Fehler beim Laden der Daten.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [favoritesOnly])

  const fetchRecommendation = async () => {
    try {
      const response = await fetch('/api/recommendation')
      const data = await response.json()
      setRecommendation(data)
    } catch {
      setRecommendation({
        title: 'Empfehlung',
        recommendation: { name: 'Keine Empfehlung verfuegbar' },
      })
    }
  }

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">ZooTier Prototype</p>
        <h1>Tierverwaltung mit Node.js API</h1>
        <p>
          Frontend (React + Vite) spricht mit deinem Backend auf
          <strong> localhost:4000</strong>.
        </p>
      </header>

      <section className="status-grid">
        <article className="card">
          <h2>Backend-Status</h2>
          <p>
            API ist aktuell: <span className="pill">{health}</span>
          </p>
        </article>

        <article className="card">
          <h2>Empfehlung</h2>
          <button type="button" onClick={fetchRecommendation}>
            Route vorschlagen
          </button>
          {recommendation && (
            <p className="recommendation">
              {recommendation.title}: {recommendation.recommendation.name}
            </p>
          )}
        </article>
      </section>

      <section className="card">
        <div className="toolbar">
          <label>
            Habitat filtern
            <input
              value={habitatFilter}
              onChange={(event) => setHabitatFilter(event.target.value)}
              placeholder="z.B. Savanne"
            />
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={favoritesOnly}
              onChange={(event) => setFavoritesOnly(event.target.checked)}
            />
            Nur Favoriten
          </label>
        </div>

        {loading && <p>Lade Tierdaten...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <div className="list">
            {filteredTiers.map((tier) => (
              <article className="tier-card" key={tier.id}>
                <h3>{tier.name}</h3>
                <p>
                  Habitat: <strong>{tier.habitat}</strong>
                </p>
                <p>Gefahrenstufe: {tier.dangerLevel}/5</p>
                <p>Futterzeiten: {tier.feedingTimes.join(', ')}</p>
                {tier.isFavorite && <span className="tag">Favorit</span>}
              </article>
            ))}

            {filteredTiers.length === 0 && (
              <p>Keine Tiere fuer den aktuellen Filter gefunden.</p>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
