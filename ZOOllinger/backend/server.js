import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const tiers = [
  {
    id: 1,
    name: 'Loewe',
    habitat: 'Savanne',
    dangerLevel: 4,
    feedingTimes: ['09:00', '15:30'],
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Pinguin',
    habitat: 'Kuestenbecken',
    dangerLevel: 1,
    feedingTimes: ['10:30', '16:00'],
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Giraffe',
    habitat: 'Afrika-Anlage',
    dangerLevel: 2,
    feedingTimes: ['11:00', '17:15'],
    isFavorite: true,
  },
  {
    id: 4,
    name: 'Orang-Utan',
    habitat: 'Regenwaldhaus',
    dangerLevel: 3,
    feedingTimes: ['12:00', '18:00'],
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Krokodil',
    habitat: 'Sumpfhalle',
    dangerLevel: 5,
    feedingTimes: ['13:00'],
    isFavorite: false,
  },
];

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'zoollinger-backend' });
});

app.get('/api/tiers', (req, res) => {
  const { habitat, favoritesOnly } = req.query;

  let results = [...tiers];

  if (habitat) {
    results = results.filter((tier) =>
      tier.habitat.toLowerCase().includes(String(habitat).toLowerCase()),
    );
  }

  if (favoritesOnly === 'true') {
    results = results.filter((tier) => tier.isFavorite);
  }

  res.json({
    count: results.length,
    items: results,
  });
});

app.get('/api/tiers/:id', (req, res) => {
  const id = Number(req.params.id);
  const tier = tiers.find((item) => item.id === id);

  if (!tier) {
    return res.status(404).json({ message: 'Tier nicht gefunden' });
  }

  return res.json(tier);
});

app.get('/api/recommendation', (_req, res) => {
  const calmAnimals = tiers.filter((tier) => tier.dangerLevel <= 2);
  const randomIndex = Math.floor(Math.random() * calmAnimals.length);
  const recommendation = calmAnimals[randomIndex];

  res.json({
    title: 'Tipp fuer Familienroute',
    recommendation,
  });
});

app.listen(PORT, () => {
  console.log(`ZooTier backend running on http://localhost:${PORT}`);
});
