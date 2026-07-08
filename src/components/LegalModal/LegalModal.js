import { useEffect, useRef } from 'react';
import TermsAndConditions from '../../pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from '../../pages/RefundPolicy/RefundPolicy';
import './LegalModal.css';

const LEGAL_PAGES = {
  'terms-and-conditions': { Component: TermsAndConditions, title: 'Terms & Conditions' },
  'privacy-policy': { Component: PrivacyPolicy, title: 'Privacy Policy' },
  'refund-policy': { Component: RefundPolicy, title: 'Refund Policy' },
};

function LegalModal({ activePage, onClose }) {
  const closeBtnRef = useRef(null);
  const contentRef = useRef(null);
  const entry = activePage ? LEGAL_PAGES[activePage] : null;

  useEffect(() => {
    if (!activePage) return undefined;
    closeBtnRef.current?.focus();
    contentRef.current?.scrollTo(0, 0);
  }, [activePage]);

  if (!entry) return null;

  const { Component: Page, title } = entry;

  return (
    <div className="legal-modal__backdrop" onClick={onClose} role="presentation">
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="legal-modal__header">
          <div className="legal-modal__heading">
            <span className="legal-modal__eyebrow">Legal</span>
            <h2 className="legal-modal__title">{title}</h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="legal-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div ref={contentRef} className="legal-modal__content">
          <Page onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
