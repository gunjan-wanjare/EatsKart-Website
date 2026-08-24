import { createContext, useContext } from 'react';

/** @typedef {'loading' | 'flying' | 'ready'} IntroPhase */

export const IntroContext = createContext(
  /** @type {{ phase: IntroPhase }} */ ({ phase: 'ready' })
);

export function useIntroPhase() {
  return useContext(IntroContext);
}
