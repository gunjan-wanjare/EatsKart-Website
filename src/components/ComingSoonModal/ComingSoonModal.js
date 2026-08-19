import { useEffect, useRef } from 'react';
import './ComingSoonModal.css';

const APP_NAMES = new Set(['App Store', 'Google Play', 'Download App', 'Download on the App Store', 'GET IT ONGoogle Play']);

function getModalContent(pageName) {
  const name = (pageName || '').trim();
  const isApp = APP_NAMES.has(name) || /app store|google play|download app/i.test(name);

  if (isApp) {
    return {
      label: 'App Coming Soon',
      title: 'eatskart App',
      desc: "Our app is currently in development. We\u2019re crafting a seamless experience for you \u2014 stay tuned!",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
    };
  }

  return {
    label: 'Page Coming Soon',
    title: name,
    desc: "We\u2019re working hard to bring you this page. Stay tuned \u2014 something delicious is on the way!",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };
}

function ComingSoonModal({ isOpen, pageName, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add('modal-open');
    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { label, title, desc, icon } = getModalContent(pageName);

  return (
    <div
      className="coming-soon-modal__backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="coming-soon-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="coming-soon-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="coming-soon-modal__icon" aria-hidden="true">
          {icon}
        </div>

        <p className="coming-soon-modal__label">{label}</p>
        <h2 id="coming-soon-title" className="coming-soon-modal__title">
          {title}
        </h2>
        <p className="coming-soon-modal__desc">{desc}</p>
        <button type="button" className="coming-soon-modal__btn" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}

export default ComingSoonModal;
