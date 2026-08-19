import { useCallback, useEffect, useState } from 'react';
import { LEGAL_PATHS, CORPORATE_PATH, HOME_SECTION_IDS } from '../constants/routes';
import { navigate } from '../utils/navigate';

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
    if (HOME_SECTION_IDS.has(id)) return false;
  }

  if (href.startsWith('/#')) {
    const id = href.split('#')[1];
    if (HOME_SECTION_IDS.has(id)) return false;
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
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const hashId = href.startsWith('#')
        ? href.slice(1)
        : href.startsWith('/#')
          ? href.slice(2)
          : null;

      if (hashId && HOME_SECTION_IDS.has(hashId) && !document.getElementById(hashId)) {
        event.preventDefault();
        navigate(`/#${hashId}`);
        return;
      }

      if (!shouldShowComingSoon(anchor)) return;

      event.preventDefault();
      openModal(formatPageName(href, anchor.textContent?.trim()));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [openModal]);

  return { ...modalState, closeModal };
}
