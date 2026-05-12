import { Link } from "react-router-dom";
import "./elephantDetail.css";

import parrotImg from "../../picture/parrot.jpg";

const animalData = {
  parrot: {
    id: "parrot",
    name: "Scarlet Macaw",
    scientificName: "Ara macao",
    category: "Bird",
    image: parrotImg,
    description:
      "The Scarlet Macaw is one of the most spectacular parrots in the world, known for brilliant colors.",
    habitat: "Tropical rainforests of Central and South America",
    diet: "Herbivore - fruits, nuts, seeds, and flowers",
    lifespan: "40-50 years",
    status: "Least Concern",
    funFacts: [
      "Scarlet Macaws can fly at speeds up to 35 mph",
      "They can live for decades and form strong pair bonds",
      "Their beaks can crack very hard nuts",
      "They can mimic human speech and sounds",
    ],
  },
};

export function ParrotDetail() {
  const animal = animalData.parrot;

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
            <div className="elephant-meta-icon" aria-hidden="true">
              📍
            </div>
            <h3>Habitat</h3>
            <p>{animal.habitat}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--brown">
            <div className="elephant-meta-icon" aria-hidden="true">
              🍴
            </div>
            <h3>Diet</h3>
            <p>{animal.diet}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--green">
            <div className="elephant-meta-icon" aria-hidden="true">
              📅
            </div>
            <h3>Lifespan</h3>
            <p>{animal.lifespan}</p>
          </article>

          <article className="elephant-meta-card elephant-meta-card--red">
            <div className="elephant-meta-icon" aria-hidden="true">
              ❗
            </div>
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
