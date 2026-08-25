function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <span
      className="header__theme-icon"
      aria-hidden="true"
      style={{
        WebkitMaskImage: 'url(/images/Vector.png)',
        maskImage: 'url(/images/Vector.png)',
      }}
    />
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="header__theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
