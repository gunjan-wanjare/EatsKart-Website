import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'eatskart-theme';
const DARK = 'dark';
const LIGHT = 'light';

function getStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === DARK ? DARK : LIGHT;
  } catch {
    return LIGHT;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme);

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

  return { theme, toggleTheme };
}
