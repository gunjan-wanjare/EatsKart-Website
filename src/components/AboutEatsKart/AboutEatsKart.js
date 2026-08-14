import './AboutEatsKart.css';

const CARDS = [
  {
    title: 'For Customers',
    desc: 'Discover restaurants, explore cuisines and enjoy seamless delivery.',
    image: '/images/about/customers.png',
    alt: 'Burgers, fries and drinks on a table',
  },
  {
    title: 'For Restaurants',
    desc: 'Reach more customers, manage orders and grow your business with smart digital tools.',
    image: '/images/about/restaurants.png',
    alt: 'Chefs plating food in a professional kitchen',
  },
  {
    title: 'For Delivery Partners',
    desc: 'Create flexible earning opportunities with technology that keeps every delivery moving safely.',
    image: '/images/about/delivery.png',
    alt: 'EatsKart delivery partner with red bag and helmet',
  },
];

function AboutEatsKart() {
  return (
    <section className="about-eatskart" id="about">
      <div className="container">
        <div className="about-eatskart__header">
          <p className="about-eatskart__label">About EatsKart</p>
          <h2 className="about-eatskart__title">
            More than food delivery. We&apos;re building a food ecosystem.
          </h2>
          <p className="about-eatskart__desc">
            EatsKart brings customers, restaurants and delivery partners together on one connected
            platform. From discovering your next favourite meal to getting it delivered to your
            doorstep, we use technology to make every step easier.
          </p>
        </div>

        <ul className="about-eatskart__grid">
          {CARDS.map((card) => (
            <li key={card.title} className="about-eatskart__item">
              <article className="about-eatskart__card">
                <div className="about-eatskart__image-wrap">
                  <img src={card.image} alt={card.alt} className="about-eatskart__image" />
                </div>
                <div className="about-eatskart__body">
                  <h3 className="about-eatskart__card-title">{card.title}</h3>
                  <p className="about-eatskart__card-desc">{card.desc}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutEatsKart;
