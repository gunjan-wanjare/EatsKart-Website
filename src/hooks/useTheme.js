import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'theme';
const LEGACY_STORAGE_KEY = 'eatskart-theme';
const DARK = 'dark';
const LIGHT = 'light';

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === DARK || stored === LIGHT) return stored;

    const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy === DARK || legacy === LIGHT) return legacy;
  } catch {
    // storage unavailable (private browsing, etc.) — theme still works for this session
  }
  return DARK;
}

/**
 * Cross-brand domains (eatskart.com, lawvix.com, loankonnekt.com, crediple.com, ...)
 * can't share localStorage/cookies — attach the current theme as a query param on
 * outbound links to another brand's site so it lands in dark/light mode already
 * matched. The receiving site's anti-flash script (see public/index.html) reads it
 * back off on load.
 */
export function withThemeParam(href, theme) {
  try {
    const url = new URL(href);
    url.searchParams.set('theme', theme);
    return url.toString();
  } catch {
    return href;
  }
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage unavailable (private browsing, etc.) — theme still works for this session
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === DARK ? LIGHT : DARK));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
