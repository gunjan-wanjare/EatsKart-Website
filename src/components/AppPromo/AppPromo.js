import './AppPromo.css';

function AppPromo() {
  return (
    <section className="app-promo" aria-labelledby="app-promo-heading">
      <div className="container app-promo__layout">
        <div className="app-promo__left">
          <h2 id="app-promo-heading" className="app-promo__headline">
            <span className="app-promo__headline-hungry">HUNGRY?</span>
            <span className="app-promo__headline-white">WE&apos;VE GOT</span>
            <span className="app-promo__headline-white app-promo__headline-you">YOU</span>
          </h2>
          <img
            src="/hungry.png"
            alt="HUNGRY? WE'VE GOT YOU — hand holding EatsKart app"
            className="app-promo__hand"
          />
        </div>

        <div className="app-promo__text">
          <p className="app-promo__title">Discover EatsKart, your food your way</p>
          <p className="app-promo__desc">
            Explore top-rated restaurants, discover new cuisines, track your order in real time,
            and enjoy fast, reliable delivery right to your doorstep. EatsKart makes every meal
            convenient, delicious, and just a few taps away.
          </p>

          <div className="app-promo__stores">
            <a href="#app-store" className="app-promo__store-btn">
              <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25-2.4 43-16.9 75.8-16.9 31.8 0 48.3 16.9 76.4 16.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72-23.1 1.4-50 15.6-66.2 33.2-18.2 19.7-28.9 44.3-26.6 70.4 28.1 2.2 56.8-11.4 68.8-31.6z" />
              </svg>
              <span>
                <small>Download on the</small>
                App Store
              </span>
            </a>
            <a href="#google-play" className="app-promo__store-btn">
              <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span>
                <small>GET IT ON</small>
                Google Play
              </span>
            </a>
          </div>

          <a href="#learn-more" className="app-promo__learn">
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}

export default AppPromo;
