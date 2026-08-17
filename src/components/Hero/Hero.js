import "./Hero.css";

const FOODS = [
  {
    src: "/images/hero/burger.png",
    alt: "Cheeseburger",
    className: "hero__food--burger",
  },
  {
    src: "/images/hero/fries.png",
    alt: "French fries",
    className: "hero__food--fries",
  },
  {
    src: "/images/hero/cake.png",
    alt: "Chocolate cake",
    className: "hero__food--cake",
  },
  {
    src: "/images/hero/noodles.png",
    alt: "Noodles",
    className: "hero__food--noodles",
  },
];

const FEATURES = [
  {
    title: "Fast Delivery",
    subtitle: "On time, every time",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 16V8h7.5l1.2 3H19v5h-1.1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle
          cx="7.2"
          cy="16.8"
          r="1.7"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="16.5"
          cy="16.8"
          r="1.7"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12.5 8v3H19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "10,000+ Dishes",
    subtitle: "For every mood",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4.5 13.5c.8-2.2 2.6-3.5 5-3.5 1.8 0 2.7.8 3.4 2.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M7 16.8c.4.7 1.2 1.2 2.2 1.2 1.5 0 2.4-1 2.4-2.3 0-2.3-2.4-2.4-3.6-3.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M14.2 8.2h2.4l.7 8.4h-3.8l.7-8.4z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M13.8 10.4h3.2M15.4 6.8v1.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Top Rated",
    subtitle: "Loved by thousands",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3.6l2.3 4.7 5.2.8-3.8 3.6.9 5.2L12 15.5 7.4 17.9l.9-5.2L4.5 9.1l5.2-.8L12 3.6z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Hero() {
  const heroMask = `url(${process.env.PUBLIC_URL}/images/hero/Exclude.png)`;

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

          <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="hero__search-input"
              placeholder="Search for restaurant, item or more"
              aria-label="Search for restaurant, item or more"
            />
            <button
              type="submit"
              className="hero__search-btn"
              aria-label="Search"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
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

          <ul className="hero__features">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="hero__feature">
                <span className="hero__feature-icon">{feature.icon}</span>
                <span className="hero__feature-copy">
                  <span className="hero__feature-title">{feature.title}</span>
                  <span className="hero__feature-subtitle">
                    {feature.subtitle}
                  </span>
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
