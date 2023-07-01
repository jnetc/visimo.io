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
      className={isDarkTheme === DARK_THEME ? 'nav-bar__theme-button active' : 'nav-bar__theme-button'}
      onPointerUp={toggleMenu}
      aria-label={locale[language]}
      title={locale[language]}
    >
      <svg className="button__icon-light">
        <use xlinkHref="/images/icons.svg#light"></use>
      </svg>
    </button>
  );
}

const locale = {
  en: 'Page settings',
  ru: 'Настройки страницы',
  fi: 'Sivun asetukset',
};
