import { useCallback, useEffect, useState } from 'react';
import { LEGAL_PATHS, CORPORATE_PATH } from '../constants/routes';

const LEGAL_ROUTE_PATHS = new Set([...Object.values(LEGAL_PATHS), CORPORATE_PATH]);

function formatPageName(href, linkText) {
  if (linkText) return linkText;

  const slug = href.replace(/^#\/?/, '').replace(/^\//, '');
  if (!slug) return 'This Page';

  return slug
    .split(/[-_/]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function shouldShowComingSoon(anchor) {
  const href = anchor.getAttribute('href');
  if (!href) return false;

  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  if (href === '/' || href === '#') return false;
  if (/^https?:\/\//i.test(href)) return false;
  if (LEGAL_ROUTE_PATHS.has(href)) return false;

  if (href.startsWith('#')) {
    const id = href.slice(1);
    if (id.startsWith('legal-')) return false;
    if (id && document.getElementById(id)) return false;
  }

  return href.startsWith('#') || href.startsWith('/');
}

export default function useComingSoonLinks() {
  const [modalState, setModalState] = useState({ isOpen: false, pageName: '' });

  const openModal = useCallback((pageName) => {
    setModalState({ isOpen: true, pageName });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((current) => ({ ...current, isOpen: false }));
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor || !shouldShowComingSoon(anchor)) return;

      event.preventDefault();
      openModal(formatPageName(anchor.getAttribute('href'), anchor.textContent?.trim()));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [openModal]);

  return { ...modalState, closeModal };
}
