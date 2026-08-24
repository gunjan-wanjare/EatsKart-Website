import { useCallback, useEffect, useRef, useState } from 'react';
import YakaBrandMark from '../YakaBrandMark/YakaBrandMark';
import './Preloader.css';

const BRAND_MS = 1400;
const YAKA_MS = 1600;
const EXIT_MS = 600;

/** Two-part dark intro: eatskart wordmark, then YAKA logo. */
function Preloader({ onComplete }) {
  const [stage, setStage] = useState('brand');
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    document.body.classList.remove('preloader-active');
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add('preloader-active');
    const toYaka = setTimeout(() => setStage('yaka'), BRAND_MS);
    const toExit = setTimeout(() => setStage('exiting'), BRAND_MS + YAKA_MS);
    const done = setTimeout(finish, BRAND_MS + YAKA_MS + EXIT_MS + 200);
    return () => {
      clearTimeout(toYaka);
      clearTimeout(toExit);
      clearTimeout(done);
      document.body.classList.remove('preloader-active');
    };
  }, [finish]);

  const leaving = stage === 'exiting';

  return (
    <div
      className={`preloader${leaving ? ' preloader--leaving' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader__glow" />
      <div className="preloader__stage">
        {stage === 'brand' ? (
          <div key="brand" className="preloader__panel preloader__panel--enter">
            <img
              src="/images/eatskart-logo.png"
              alt="eatskart"
              className="preloader__eatskart"
              width={220}
              height={60}
            />
            <div className="preloader__bar">
              <span className="preloader__bar-fill" />
            </div>
          </div>
        ) : (
          <div
            key="yaka"
            className={`preloader__panel${stage === 'yaka' ? ' preloader__panel--enter' : ''}`}
          >
            <YakaBrandMark
              logoClassName="preloader__yaka-icon"
              taglineClassName="preloader__yaka-tagline"
              className="preloader__yaka"
              showTagline
            />
            <div className="preloader__bar">
              <span className="preloader__bar-fill" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Preloader;
