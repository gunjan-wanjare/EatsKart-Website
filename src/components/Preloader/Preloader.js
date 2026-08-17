import { useEffect, useState } from 'react';
import './Preloader.css';

let hasShownPreloader = false;

function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(hasShownPreloader);

  useEffect(() => {
    if (hasShownPreloader) return undefined;

    document.body.classList.add('preloader-active');

    const leaveTimer = setTimeout(() => setLeaving(true), 2000);
    const doneTimer = setTimeout(() => {
      hasShownPreloader = true;
      setDone(true);
      document.body.classList.remove('preloader-active');
    }, 2700);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  if (done) return null;

  return (
    <div className={`preloader ${leaving ? 'preloader--leaving' : ''}`} aria-hidden="true">
      <div className="preloader__inner">
        <img
          src="/images/yaka-brand-logo.png"
          alt="A YAKA Brand"
          className="preloader__logo"
          width={150}
          height={112}
        />
        <div className="preloader__bar">
          <span className="preloader__bar-fill" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
