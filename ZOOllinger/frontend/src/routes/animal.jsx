import { Link } from "react-router-dom";
import { animals } from "../data/animals";
import "./animals.css";

export function Animals() {
    return (
        <main className="animals-page">
            <div className="animals-page__hero">
                <div className="animals-page__hero-inner">
                    <h1>Our Animals</h1>
                    <p>Discover all {animals.length} amazing species at ZOOllinger.</p>
                </div>
            </div>

            <section className="animals-page__section" aria-label="animals-list">
                <div className="animals-page__grid">
                    {animals.map((animal) => (
                        <Link key={animal.id} to={`/animals/${animal.id}`} className="animals-page__link">
                            <article className="animals-page__card">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="animals-page__image"
                                    onError={(e) => {
                                        if (animal.fallback) {
                                            e.currentTarget.src = animal.fallback;
                                        }
                                    }}
                                />

                                <div className="animals-page__content">
                                    <div className="animals-page__head">
                                        <h2>{animal.name}</h2>
                                        <span className={`animals-page__status ${animal.statusClass}`}>
                      {animal.status}
                    </span>
                                    </div>

                                    <p className="animals-page__scientific">{animal.scientificName}</p>
                                    <p className="animals-page__description">{animal.description}</p>

                                    <div className="animals-page__meta">
                                        <span>{animal.category}</span>
                                        <span>{animal.habitat}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
