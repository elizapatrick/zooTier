import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./elephantDetail.css";
import { toDisplayAnimal } from "../data/animalPresentation";

export function ElephantDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let disposed = false;
    setError(null);

    fetch(`/api/animals/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Animal not found");
        }
        return res.json();
      })
      .then((data) => {
        if (!disposed) {
          setAnimal(toDisplayAnimal(data));
        }
      })
      .catch((err) => {
        if (!disposed) {
          setError(err.message);
          setAnimal(null);
        }
      });

    return () => {
      disposed = true;
    };
  }, [id]);

  if (error) {
    return <main className="home-page" aria-label="animal-empty" />;
  }

  if (!animal) {
    return <main className="home-page" aria-label="animal-loading" />;
  }

  return (
    <main className="elephant-page">
      <div className="elephant-container">
        <Link to="/animals" className="elephant-back-button">
          <span aria-hidden="true">←</span>
          <span>Back to Animals</span>
        </Link>

        <div className="elephant-hero-image-wrap">
          <img
            src={animal.image}
            alt={animal.name}
            className="elephant-hero-image"
          />
        </div>

        <section className="elephant-header-row">
          <div>
            <h1 className="elephant-title">{animal.name}</h1>
            <p className="elephant-scientific">{animal.scientificName}</p>
          </div>
          <span className="elephant-status">{animal.status}</span>
        </section>

        <p className="elephant-description">{animal.description}</p>

        <section className="elephant-meta-grid">
          <article className="elephant-meta-card elephant-meta-card--green">
            <div className="elephant-meta-icon" aria-hidden="true">📍</div>
            <h3>Habitat</h3>
            <p>{animal.habitat}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--brown">
            <div className="elephant-meta-icon" aria-hidden="true">🍴</div>
            <h3>Diet</h3>
            <p>{animal.diet}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--green">
            <div className="elephant-meta-icon" aria-hidden="true">📅</div>
            <h3>Lifespan</h3>
            <p>{animal.lifespan}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--red">
            <div className="elephant-meta-icon" aria-hidden="true">❗</div>
            <h3>Category</h3>
            <p>{animal.category}</p>
          </article>
        </section>

        <section className="elephant-funfacts-box">
          <h2>Fun Facts</h2>
          <ul>
            {animal.funFacts.map((fact, index) => (
              <li key={fact}>
                <span className="elephant-funfacts-number">{index + 1}</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
