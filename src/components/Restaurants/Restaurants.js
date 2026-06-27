import { useRef } from 'react';
import restaurants from '../../data/restaurants';
import './Restaurants.css';

function Restaurants() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const grid = scrollRef.current;
    if (!grid) return;
    grid.scrollBy({ left: direction * grid.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className="restaurants">
      <div className="container">
        <div className="restaurants__header">
          <div className="restaurants__headings">
            <p className="section-subtitle section-subtitle--dark">Top rated for you in your location</p>
            <h2 className="restaurants__title">Restaurants near me</h2>
          </div>
          <div className="restaurants__nav">
            <button type="button" className="restaurants__nav-btn" onClick={() => scroll(-1)} aria-label="Previous restaurants">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="restaurants__nav-btn" onClick={() => scroll(1)} aria-label="Next restaurants">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="restaurants__grid-wrap" ref={scrollRef}>
          <ul className="restaurants__grid">
            {restaurants.map((restaurant) => (
              <li key={restaurant.id} className="restaurants__item">
                <article className="restaurants__card">
                  <div className="restaurants__image-wrap">
                    <img src={restaurant.image} alt={restaurant.name} className="restaurants__image" loading="lazy" />
                  </div>
                  <div className="restaurants__info">
                    <div className="restaurants__info-top">
                      <h3 className="restaurants__name">{restaurant.name}</h3>
                      <span className="restaurants__rating">{restaurant.rating} ★</span>
                    </div>
                    <p className="restaurants__reviews">{restaurant.reviews}</p>
                    <div className="restaurants__meta">
                      <span className="restaurants__cuisine">{restaurant.cuisine}</span>
                      <span className="restaurants__distance">{restaurant.distance}</span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Restaurants;
