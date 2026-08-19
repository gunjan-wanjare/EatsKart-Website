import './CorporateBanner.css';

const FOODS = [
  {
    src: '/images/corporate/burger.png',
    alt: 'Cheeseburger',
    className: 'corp-hero__food--burger',
  },
  {
    src: '/images/corporate/hotdog.png',
    alt: 'Sandwich',
    className: 'corp-hero__food--sandwich',
  },
  {
    src: '/images/corporate/39.png',
    alt: 'Dessert tart',
    className: 'corp-hero__food--tart',
  },
];

function CorporateBanner() {
  const heroMask = `url(${process.env.PUBLIC_URL}/images/hero/Exclude.png)`;
  const bannerImage = `${process.env.PUBLIC_URL}/images/hero/corporateBanner.png`;

  return (
    <section
      className="corp-hero"
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
      <img
        src={bannerImage}
        alt=""
        className="corp-hero__bg"
        aria-hidden="true"
      />
      <div className="corp-hero__foods" aria-hidden="true">
        <div className="container corp-hero__foods-inner">
          {FOODS.map((food) => (
            <img
              key={food.className}
              src={food.src}
              alt=""
              className={`corp-hero__food ${food.className}`}
            />
          ))}
        </div>
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
          eatskart is a technology-driven food delivery platform connecting people, restaurants
          and delivery partners through a simpler, faster and more rewarding food experience.
        </p>

        <div className="corp-hero__actions">
          <a href="#about" className="corp-hero__btn corp-hero__btn--solid">
            Explore eatskart
          </a>
        </div>
      </div>
    </section>
  );
}

export default CorporateBanner;
