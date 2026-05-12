import { Link } from "react-router-dom";
import "./elephantDetail.css";

import penguinImg from "../../picture/penguin.jpg";

const animalData = {
  penguin: {
    id: "penguin",
    name: "King Penguin",
    scientificName: "Aptenodytes patagonicus",
    category: "Bird",
    image: penguinImg,
    description:
      "King penguins are the second-largest penguin species, known for their striking orange and yellow markings. They are excellent swimmers and can dive to great depths.",
    habitat: "Sub-Antarctic islands and cool ocean waters",
    diet: "Carnivore - lanternfish and other small fish",
    lifespan: "15-20 years",
    status: "Least Concern",
    funFacts: [
      "King penguins can dive over 1,000 meters deep",
      "They can hold their breath for up to 6 minutes",
      "King penguins have a distinctive orange marking on their head and neck",
      "Chicks huddle together in large groups called crèches",
    ],
  },
};

export function PenguinDetail() {
  const animal = animalData.penguin;

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
