import { YAKA_ASSETS } from '../../constants/yakaAssets';
import './YakaBrandMark.css';

/**
 * High-res YAKA icon + manual “A YAKA Brand” tagline (splash / hero).
 */
function YakaBrandMark({
  className = '',
  logoClassName = '',
  taglineClassName = '',
  showTagline = true,
}) {
  return (
    <div className={`yaka-mark ${className}`.trim()}>
      <div data-yaka-icon className={`yaka-mark__icon ${logoClassName}`.trim()}>
        <img
          src={YAKA_ASSETS.icon}
          alt="YAKA"
          className="yaka-mark__img"
          width={573}
          height={512}
          decoding="async"
          draggable={false}
        />
      </div>
      {showTagline ? (
        <p className={`yaka-mark__tagline ${taglineClassName}`.trim()}>
          A <span className="yaka-mark__tagline-strong">YAKA</span> Brand
        </p>
      ) : null}
    </div>
  );
}

export default YakaBrandMark;
