import { useStore } from '@Hooks/useStore';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export default function Themes() {
  const { language, isDarkTheme, switchTheme } = useStore();

  const toggleMenu = () => {
    switchTheme(isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    localStorage.setItem('theme', isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    document.documentElement.setAttribute('data-theme', isDarkTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <button
      className={
        isDarkTheme === DARK_THEME
          ? 'nav-button nav-button-48 nav-bar__theme-button active'
          : 'nav-button nav-button-48 nav-bar__theme-button'
      }
      onPointerUp={toggleMenu}
      aria-label={locale[language]}
      title={locale[language]}
    >
      {isDarkTheme === DARK_THEME ? (
        <svg className="nav-bar__icon theme-icon">
          <use xlinkHref="/images/icons.svg#dark"></use>
        </svg>
      ) : (
        <svg className="nav-bar__icon theme-icon">
          <use xlinkHref="/images/icons.svg#light"></use>
        </svg>
      )}
    </button>
  );
}

const locale = {
  en: 'Switch theme',
  ru: 'Изменить тему страницы',
  fi: 'Vaihda teemaa',
  sv: 'Byt tema',
};
