import { useCallback, useEffect, useState } from 'react';
import { LEGAL_MODAL_IDS } from '../constants/routes';

export default function useLegalModal() {
  const [activePage, setActivePage] = useState(null);

  const openLegal = useCallback((modalId) => {
    if (LEGAL_MODAL_IDS.has(modalId)) {
      setActivePage(modalId);
    }
  }, []);

  const closeLegal = useCallback(() => {
    setActivePage(null);
  }, []);

  useEffect(() => {
    if (!activePage) return undefined;

    document.body.classList.add('modal-open');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLegal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePage, closeLegal]);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href?.startsWith('#legal-')) return;

      event.preventDefault();
      openLegal(href.replace('#legal-', ''));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [openLegal]);

  return { activePage, openLegal, closeLegal };
}
