import { useEffect, useRef } from 'react';
import TermsAndConditions from '../../pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from '../../pages/RefundPolicy/RefundPolicy';
import './LegalModal.css';

const LEGAL_PAGES = {
  'terms-and-conditions': TermsAndConditions,
  'privacy-policy': PrivacyPolicy,
  'refund-policy': RefundPolicy,
};

function LegalModal({ activePage, onClose }) {
  const closeBtnRef = useRef(null);
  const contentRef = useRef(null);
  const Page = activePage ? LEGAL_PAGES[activePage] : null;

  useEffect(() => {
    if (!activePage) return undefined;
    closeBtnRef.current?.focus();
    contentRef.current?.scrollTo(0, 0);
  }, [activePage]);

  if (!activePage || !Page) return null;

  return (
    <div className="legal-modal__backdrop" onClick={onClose} role="presentation">
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Legal information"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="legal-modal__toolbar">
          <button
            ref={closeBtnRef}
            type="button"
            className="legal-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Close</span>
          </button>
        </div>

        <div ref={contentRef} className="legal-modal__content">
          <Page onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
