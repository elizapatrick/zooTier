import { Link } from "react-router-dom";
import "./elephantDetail.css";

import tigerImg from "../../picture/tiger.jpg";

const animalData = {
  tiger: {
    id: "tiger",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    category: "Mammal",
    image: tigerImg,
    description:
      "Tigers are the largest cat species and are known for their striking orange coat with black stripes. Each tiger's stripe pattern is unique, serving as identification like a human fingerprint.",
    habitat: "Indian subcontinent forests and grasslands",
    diet: "Carnivore - deer, wild pigs, and other large mammals",
    lifespan: "8-10 years in the wild",
    status: "Endangered",
    funFacts: [
      "Tigers can recognize themselves in a mirror",
      "Each tiger's stripe pattern is completely unique",
      "Tigers can jump up to 16 feet high",
      "A tiger's roar can be heard from 2 miles away",
    ],
  },
};

export function TigerDetail() {
  const animal = animalData.tiger;

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
