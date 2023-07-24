import { useTheme } from '@Hooks/useTheme';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export default function Themes() {
  const { isDarkTheme, switchTheme } = useTheme();

  const toggleMenu = () => {
    switchTheme(isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    localStorage.setItem('theme', isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    document.documentElement.setAttribute('data-theme', isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <button
      className={
        isDarkTheme === DARK_THEME
          ? 'small-button btn-only-icon nav-bar__theme-button active'
          : 'small-button btn-only-icon nav-bar__theme-button'
      }
      onPointerUp={toggleMenu}
      aria-label="Switch theme"
      title="Switch theme"
    >
      {isDarkTheme === DARK_THEME ? (
        <svg className="btn-only-icon__icon theme-icon">
          <use xlinkHref="/images/icons.svg#dark"></use>
        </svg>
      ) : (
        <svg className="btn-only-icon__icon theme-icon">
          <use xlinkHref="/images/icons.svg#light"></use>
        </svg>
      )}
    </button>
  );
}
