import { Link } from "react-router-dom";
import "./elephantDetail.css";

import lionImg from "../../picture/lion.jpg";

const animalData = {
  lion: {
    id: "lion",
    name: "African Lion",
    scientificName: "Panthera leo",
    category: "Mammal",
    image: lionImg,
    description:
      "The lion is known as the king of the jungle, though it actually lives in grasslands and savannas.",
    habitat: "African grasslands and savannas",
    diet: "Carnivore - mainly zebras, wildebeest, and buffalo",
    lifespan: "10-14 years",
    status: "Vulnerable",
    funFacts: [
      "A lion's roar can be heard from up to 5 miles away",
      "Female lions do most of the hunting",
      "Lions sleep for up to 20 hours a day",
      "A lion's mane gets darker as it ages",
    ],
  },
};

export function LionDetail() {
  const animal = animalData.lion;

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
