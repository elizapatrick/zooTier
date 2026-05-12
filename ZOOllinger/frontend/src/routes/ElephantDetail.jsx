import { Link, useParams } from "react-router-dom";
import "./elephantDetail.css";

import lionImg from "../../picture/lion.jpg";
import elephantImg from "../../picture/elephant.jpg";
import parrotImg from "../../picture/parrot.jpg";
import HeaderHome from "../components/HeaderHome";

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
  elephant: {
    id: "elephant",
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    category: "Mammal",
    image: elephantImg,
    description:
      "African elephants are the largest land animals on Earth. They are highly intelligent, social creatures with complex family structures led by matriarchs.",
    habitat: "African savannas, forests, and deserts",
    diet: "Herbivore - grasses, leaves, bark, and fruits",
    lifespan: "60-70 years",
    status: "Endangered",
    funFacts: [
      "Elephants can recognize themselves in a mirror",
      "They can communicate using infrasound below human hearing range",
      "An elephant's trunk contains over 40,000 muscles",
      "Elephants show empathy and mourn their dead",
    ],
  },
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

export function ElephantDetail() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return <main className="home-page" aria-label="animal-empty" />;
  }

  return (
    <>
    <HeaderHome active="animals"></HeaderHome>
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
    </>
  );
}
