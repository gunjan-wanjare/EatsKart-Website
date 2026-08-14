import './CorporateBanner.css';

const FOODS = [
  {
    src: '/images/corporate/burger.png',
    alt: 'Cheeseburger',
    className: 'corp-hero__food--burger',
  },
  {
    src: '/images/corporate/hotdog.png',
    alt: 'French fries',
    className: 'corp-hero__food--fries',
  },
  {
    src: '/images/corporate/cupcake.png',
    alt: 'Chocolate cake',
    className: 'corp-hero__food--cake',
  },
];

function CorporateBanner() {
  return (
    <section className="corp-hero">
      <div className="corp-hero__foods" aria-hidden="true">
        {FOODS.map((food) => (
          <img
            key={food.className}
            src={food.src}
            alt=""
            className={`corp-hero__food ${food.className}`}
          />
        ))}
      </div>

      <div className="container corp-hero__content">
        <h1 className="corp-hero__title">
          <span className="corp-hero__title-line">
            <span className="corp-hero__title-accent">Good Food.</span>{' '}
            Better Technology.
          </span>
          <span className="corp-hero__title-line">
            <span className="corp-hero__title-accent">Happier</span> Cities.
          </span>
        </h1>

        <p className="corp-hero__desc">
          EatsKart is a technology-driven food delivery platform connecting people, restaurants
          and delivery partners through a simpler, faster and more rewarding food experience.
        </p>

        <div className="corp-hero__actions">
          <a href="/" className="corp-hero__btn corp-hero__btn--solid">
            Explore EatsKart
          </a>
          <a href="#partner-with-us" className="corp-hero__btn corp-hero__btn--ghost">
            Partner with us
          </a>
        </div>
      </div>

      <div className="corp-hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 72C120 28 240 12 360 40C480 68 540 108 660 96C780 84 840 28 960 36C1080 44 1140 92 1260 88C1340 85 1400 62 1440 48V120H0V72Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default CorporateBanner;
