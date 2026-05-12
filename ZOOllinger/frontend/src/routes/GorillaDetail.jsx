import { Link } from "react-router-dom";
import "./elephantDetail.css";

import gorillaImg from "../../picture/Gorilla.jpg";

const animalData = {
  gorilla: {
    id: "gorilla",
    name: "Mountain Gorilla",
    scientificName: "Gorilla beringei beringei",
    category: "Mammal",
    image: gorillaImg,
    description:
      "Mountain gorillas are highly intelligent, social primates that live in family groups led by a dominant silverback male. They share about 98% of their DNA with humans.",
    habitat: "Rainforests of Central Africa, high mountain regions",
    diet: "Herbivore - leaves, stems, fruits, and occasional insects",
    lifespan: "35-40 years",
    status: "Endangered",
    funFacts: [
      "Gorillas share 98% of their DNA with humans",
      "A male gorilla can weigh up to 400 pounds",
      "Gorillas live in family groups led by a silverback male",
      "Each gorilla has unique fingerprints like humans",
    ],
  },
};

export function GorillaDetail() {
  const animal = animalData.gorilla;

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
