import { CORPORATE_PATH, LEGAL_PATHS } from '../constants/routes';

const APP_PATHS = new Set(['/', CORPORATE_PATH, ...Object.values(LEGAL_PATHS)]);

export function getPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function navigate(to) {
  const url = new URL(to, window.location.origin);
  const next = url.pathname.replace(/\/+$/, '') || '/';
  if (getPath() === next && url.hash === window.location.hash) return;

  window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function isAppPath(pathname) {
  const path = (pathname || '').replace(/\/+$/, '') || '/';
  return APP_PATHS.has(path);
}
