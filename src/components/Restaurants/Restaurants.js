import { useCallback, useEffect, useRef, useState } from 'react';
import restaurants from '../../data/restaurants';
import './Restaurants.css';

function Restaurants() {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNavState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const hasOverflow = maxScroll > 2;

    if (!hasOverflow) {
      setCanPrev(false);
      setCanNext(false);
      return;
    }

    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < maxScroll - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateNavState();
    el.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState);

    const resizeObserver = new ResizeObserver(updateNavState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
      resizeObserver.disconnect();
    };
  }, [updateNavState]);

  const scroll = (direction) => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const item = scroller.querySelector('.restaurants__item');
    const list = scroller.querySelector('.restaurants__grid');
    if (!item) return;

    const gap = list ? parseFloat(getComputedStyle(list).columnGap) || 0 : 0;
    const amount = item.getBoundingClientRect().width + gap;
    scroller.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <section className="restaurants" id="restaurants">
      <div className="container">
        <div className="restaurants__header">
          <div className="restaurants__headings">
            <p className="restaurants__subtitle">Something for every appetite.</p>
            <h2 className="restaurants__title">Restaurants near me</h2>
          </div>
          <div className="restaurants__nav">
            <button
              type="button"
              className={`restaurants__nav-btn${canPrev ? ' restaurants__nav-btn--active' : ''}`}
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous restaurants"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className={`restaurants__nav-btn${canNext ? ' restaurants__nav-btn--active' : ''}`}
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next restaurants"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="restaurants__image"
                      loading="lazy"
                    />
                  </div>
                  <div className="restaurants__info">
                    <div className="restaurants__info-top">
                      <h3
                        className="restaurants__name"
                        style={{
                          color: '#1F1F1F',
                          WebkitTextFillColor: '#1F1F1F',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {restaurant.name}
                      </h3>
                      <span className="restaurants__rating">
                        {restaurant.rating}
                        <span className="restaurants__rating-star" aria-hidden="true">
                          ★
                        </span>
                      </span>
                    </div>
                    <p
                      className="restaurants__price"
                      style={{
                        color: '#1F1F1F',
                        WebkitTextFillColor: '#1F1F1F',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {restaurant.priceForTwo}
                    </p>
                    <div className="restaurants__meta">
                      <span className="restaurants__location">{restaurant.location}</span>
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
