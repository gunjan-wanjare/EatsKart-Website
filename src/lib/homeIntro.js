/**
 * In-memory intro flag — resets on full page reload, persists across in-app navigations.
 */
let homeIntroCompleted = false;

export function isHomeIntroCompleted() {
  return homeIntroCompleted;
}

export function markHomeIntroCompleted() {
  homeIntroCompleted = true;
}

/** @typedef {'loading' | 'flying' | 'ready'} HomeIntroPhase */

export function getInitialIntroPhase() {
  if (homeIntroCompleted) return 'ready';
  return 'loading';
}
