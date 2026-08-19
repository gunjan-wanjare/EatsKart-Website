import { CORPORATE_PATH, LEGAL_PATHS } from '../constants/routes';

const APP_PATHS = new Set(['/', CORPORATE_PATH, ...Object.values(LEGAL_PATHS)]);

export function getPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function navigate(to) {
  const url = new URL(to, window.location.origin);
  const next = url.pathname.replace(/\/+$/, '') || '/';
  const sameLocation = getPath() === next && url.hash === window.location.hash;

  if (sameLocation) {
    if (url.hash) {
      scrollToHash(url.hash);
    }
    return;
  }

  window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function scrollToHash(hash, options = {}) {
  const id = (hash || '').replace(/^#/, '');
  if (!id) return;

  const { behavior = 'smooth', block = 'start' } = options;
  let attempts = 0;
  const maxAttempts = 40;

  const tryScroll = () => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior, block });
      return;
    }

    attempts += 1;
    if (attempts < maxAttempts) {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}

export function isAppPath(pathname) {
  const path = (pathname || '').replace(/\/+$/, '') || '/';
  return APP_PATHS.has(path);
}
