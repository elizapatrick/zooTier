import { useEffect, useMemo, useState } from "react";
import "./home.css";

import heroImg from '../../picture/home-picture.jpg';
import lionImg from '../../picture/lion.jpg';
import elephantImg from '../../picture/elephant.jpg';
import parrotImg from '../../picture/parrot.jpg';
import { toDisplayAnimal } from "../data/animalPresentation";


const featuredAnimals = [
  {
    id: 'lion',
    name: "African Lion",
    scientificName: "Panthera leo",
    status: "Vulnerable",
    statusClass: "status-vulnerable",
    description:
      "The lion is known as the king of the jungle, though it actually lives in grasslands and savannas.",
    image: lionImg,
    fallback:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 'elephant',
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    status: "Endangered",
    statusClass: "status-endangered",
    description:
      "African elephants are the largest land animals on Earth. They are highly intelligent and social.",
    image: elephantImg,
    fallback:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 'parrot',
    name: "Scarlet Macaw",
    scientificName: "Ara macao",
    status: "Least Concern",
    statusClass: "status-least-concern",
    description:
      "The Scarlet Macaw is one of the most spectacular parrots in the world, known for brilliant colors.",
    image: parrotImg,
    fallback:
      "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?auto=format&fit=crop&w=900&q=80",
  },
];

function IconTicket() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 6h14a1 1 0 0 1 1 1v2.2a2.8 2.8 0 0 0 0 5.6V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.2a2.8 2.8 0 0 0 0-5.6V7a1 1 0 0 1 1-1Zm5.5 3.2v5.6m3-5.6v5.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-6 6-10a6 6 0 1 0-12 0c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeWidth="1.9"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-7-4.3-9-9a5.2 5.2 0 0 1 9-4.6A5.2 5.2 0 0 1 21 11c-2 4.7-9 9-9 9Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Home() {
  const [animals, setAnimals] = useState(featuredAnimals);

  useEffect(() => {
    let disposed = false;

    fetch("/api/animals")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animals");
        return res.json();
      })
      .then((data) => {
        if (!disposed && Array.isArray(data)) {
          setAnimals(data.map(toDisplayAnimal));
        }
      })
      .catch(() => {
        // Keep local fallback data when backend is unavailable.
      });

    return () => {
      disposed = true;
    };
  }, []);

  const featured = useMemo(() => {
    const byId = new Map(animals.map((animal) => [animal.id, animal]));
    const preferred = ["lion", "elephant", "parrot"]
      .map((id) => byId.get(id))
      .filter(Boolean);
    return preferred.length ? preferred : animals.slice(0, 3);
  }, [animals]);

  return (
    <main className="home-page">
      <section className="hero">
        <img
          src={heroImg}
          alt="Zoo entrance"
          className="hero__image"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            Welcome to{" "}
            <span className="brand-mark">
              <span>ZOO</span>
              <span className="brand-mark__tail">llinger</span>
            </span>
          </h1>
          <p className="hero__subtitle">
            Discover amazing animals from around the world. An unforgettable
            experience for the whole family.
          </p>
          <div className="hero__actions">
            <a href="/tickets">
              <button type="button" className="hero-btn hero-btn--primary">
                <span className="hero-btn__icon"><IconTicket /></span>
                Buy Tickets
              </button>
            </a>
            <a href="/experience">
              <button type="button" className="hero-btn hero-btn--ghost">
                <span className="hero-btn__icon"><IconMapPin /></span>
                Visitor Experience
              </button>
            </a>
            <a href="/app">
              <button type="button" className="hero-btn hero-btn--ghost">
                Mobile App
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div className="container quick-info__grid">
          <article className="info-card info-card--green">
            <div className="info-card__icon-wrap">
              <span className="info-card__icon"><IconClock /></span>
            </div>
            <div>
              <h3 className="info-card__title">Opening Hours</h3>
              <p className="info-card__text">Daily: 9:00 AM - 6:00 PM</p>
              <p className="info-card__text">Weekends: 9:00 AM - 7:00 PM</p>
            </div>
          </article>

          <article className="info-card info-card--brown">
            <div className="info-card__icon-wrap">
              <span className="info-card__icon"><IconMapPin /></span>
            </div>
            <div>
              <h3 className="info-card__title">Location</h3>
              <p className="info-card__text">Kreis 3</p>
              <p className="info-card__text">Zurich, Switzerland</p>
            </div>
          </article>

          <article className="info-card info-card--red">
            <div className="info-card__icon-wrap">
              <span className="info-card__icon"><IconHeart /></span>
            </div>
            <div>
              <h3 className="info-card__title">Conservation</h3>
              <p className="info-card__text">Supporting wildlife preservation</p>
              <p className="info-card__text">and species protection globally</p>
            </div>
          </article>
        </div>
      </section>

      <section className="animals-section">
        <div className="container">
          <header className="animals-section__header">
            <h2 className="animals-section__title">Meet Our Animals</h2>
            <p className="animals-section__subtitle">
            Discover incredible wildlife from around the globe
            </p>
          </header>

          <div className="animals-grid">
            {featured.map((animal) => (
              <a key={animal.id} href={`/animals/${animal.id}`} className="animal-card__link">
                <article className="animal-card">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="animal-card__image"
                    onError={(e) => {
                      if (animal.fallback) e.currentTarget.src = animal.fallback;
                    }}
                  />
                  <div className="animal-card__content">
                    <div className="animal-card__head">
                      <h3>{animal.name}</h3>
                      <span className={`animal-status ${animal.statusClass}`}>
                        {animal.status}
                      </span>
                    </div>
                    <p className="animal-card__scientific">{animal.scientificName}</p>
                    <p className="animal-card__description">{animal.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>

          <div className="animals-section__cta">
            <a href="/animals" className="view-all-btn">
              View All Animals
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}