import { useEffect, useMemo, useRef, useState } from 'react';
import categories from '../../data/categories';
import restaurants from '../../data/restaurants';
import './Hero.css';

const FOODS = [
  {
    src: '/images/hero/burger.png',
    alt: 'Cheeseburger',
    className: 'hero__food--burger',
  },
  {
    src: '/images/hero/fries.png',
    alt: 'French fries',
    className: 'hero__food--fries',
  },
  {
    src: '/images/hero/cake.png',
    alt: 'Chocolate cake',
    className: 'hero__food--cake',
  },
  {
    src: '/images/hero/noodles.png',
    alt: 'Noodles',
    className: 'hero__food--noodles',
  },
];

const FEATURES = [
  {
    title: 'Fast Delivery',
    subtitle: 'On time, every time',
    icon: '/vector/delivery.svg',
  },
  {
    title: '10,000+ Dishes',
    subtitle: 'For every mood',
    icon: '/vector/dishes.svg',
  },
  {
    title: 'Top Rated',
    subtitle: 'Loved by thousands',
    icon: '/vector/Star 1.svg',
  },
];

const uniqueRestaurants = restaurants.filter(
  (restaurant, index, list) =>
    list.findIndex((item) => item.name.toLowerCase() === restaurant.name.toLowerCase()) === index
);

function matchesQuery(value, query) {
  return value.toLowerCase().includes(query);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Hero() {
  const heroMask = `url(${process.env.PUBLIC_URL}/images/hero/Exclude.png)`;
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const trimmedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmedQuery) {
      return { categories: [], restaurants: [] };
    }

    return {
      categories: categories.filter((category) => matchesQuery(category.name, trimmedQuery)),
      restaurants: uniqueRestaurants.filter(
        (restaurant) =>
          matchesQuery(restaurant.name, trimmedQuery) ||
          matchesQuery(restaurant.location, trimmedQuery)
      ),
    };
  }, [trimmedQuery]);

  const hasQuery = trimmedQuery.length > 0;
  const hasResults = results.categories.length > 0 || results.restaurants.length > 0;
  const showResults = isOpen && hasQuery;

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!searchRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  const navigateTo = (id) => {
    clearSearch();
    scrollToId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasQuery) return;

    setIsOpen(true);

    if (results.restaurants.length === 1 && results.categories.length === 0) {
      navigateTo('restaurants');
      return;
    }

    if (results.categories.length === 1 && results.restaurants.length === 0) {
      navigateTo('popular-cuisines');
    }
  };

  const selectCategory = () => {
    navigateTo('popular-cuisines');
  };

  const selectRestaurant = () => {
    navigateTo('restaurants');
  };

  return (
    <section
      className="hero"
      style={{
        WebkitMaskImage: heroMask,
        maskImage: heroMask,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center bottom',
        maskPosition: 'center bottom',
      }}
    >
      <div className="hero__foods" aria-hidden="true">
        {FOODS.map((food) => (
          <img
            key={food.className}
            src={food.src}
            alt=""
            className={`hero__food ${food.className}`}
          />
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--bold">
              Cravings Don&apos;t Wait.
            </span>
            <span className="hero__title-line hero__title-line--medium">
              Neither Do We.
            </span>
          </h1>

          <div className="hero__search-wrap" ref={searchRef}>
            <form className="hero__search" onSubmit={handleSubmit} role="search">
              <input
                type="text"
                className="hero__search-input"
                placeholder="Search for restaurant, item or more"
                aria-label="Search for restaurant, item or more"
                aria-expanded={showResults}
                aria-controls="hero-search-results"
                autoComplete="off"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => {
                  if (trimmedQuery) setIsOpen(true);
                }}
              />
              <button type="submit" className="hero__search-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {showResults && (
              <div
                id="hero-search-results"
                className="hero__search-results"
                role="listbox"
                aria-label="Search results"
              >
                {hasResults ? (
                  <>
                    {results.categories.length > 0 && (
                      <div className="hero__search-group">
                        <p className="hero__search-group-label">Categories</p>
                        {results.categories.map((category) => (
                          <button
                            key={category.id}
                            type="button"
                            className="hero__search-item"
                            onClick={selectCategory}
                          >
                            <img src={category.image} alt="" className="hero__search-thumb" />
                            <span className="hero__search-item-copy">
                              <span className="hero__search-item-title">{category.name}</span>
                              <span className="hero__search-item-meta">Category</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                    {results.restaurants.length > 0 && (
                      <div className="hero__search-group">
                        <p className="hero__search-group-label">Restaurants</p>
                        {results.restaurants.map((restaurant) => (
                          <button
                            key={restaurant.id}
                            type="button"
                            className="hero__search-item"
                            onClick={selectRestaurant}
                          >
                            <img src={restaurant.image} alt="" className="hero__search-thumb" />
                            <span className="hero__search-item-copy">
                              <span className="hero__search-item-title">{restaurant.name}</span>
                              <span className="hero__search-item-meta">{restaurant.location}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <p className="hero__search-empty">No matching restaurants or categories.</p>
                )}
              </div>
            )}
          </div>

          <ul className="hero__features">
            {FEATURES.map(({ title, subtitle, icon }) => (
              <li key={title} className="hero__feature">
                <span className="hero__feature-icon">
                  <img src={icon} alt="" width={20} height={20} aria-hidden="true" />
                </span>
                <span className="hero__feature-copy">
                  <span className="hero__feature-title">{title}</span>
                  <span className="hero__feature-subtitle">{subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
