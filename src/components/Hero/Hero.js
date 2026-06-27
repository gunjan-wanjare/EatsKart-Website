import './Hero.css';

const AVATARS = [
  '/images/avatar-1.jpg',
  '/images/avatar-2.jpg',
  '/images/avatar-3.jpg',
  '/images/avatar-4.jpg',
];

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-bold">Cravings Don&apos;t Wait.</span>
            <br />
            <span className="hero__title-medium">Neither Do We.</span>
          </h1>

          <div className="hero__trust">
            <div className="hero__trust-row">
              <span className="hero__trust-number">
                <span className="hero__trust-number-accent">45</span>
                <span className="hero__trust-number-suffix">K+</span>
              </span>
              <div className="hero__avatars">
                {AVATARS.map((src, i) => (
                  <img key={src} src={src} alt="" className="hero__avatar" style={{ zIndex: AVATARS.length - i }} />
                ))}
              </div>
            </div>
            <span className="hero__trust-label">People Trust EatsKart</span>
          </div>

          <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="hero__search-input"
              placeholder="Search for restaurant, item or more"
              aria-label="Search for restaurant, item or more"
            />
            <button type="submit" className="hero__search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        <div className="hero__image-wrap">
          <img
            src="/hero.png"
            alt="Delicious tacos with fresh toppings"
            className="hero__image"
          />
        </div>
      </div>

      <img
        src="/Vector%2022.png"
        alt=""
        className="hero__vector"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;
