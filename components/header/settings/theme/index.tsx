import { useEffect, useState, ChangeEvent } from 'react';
// Component for liquid effect
import { FluidSVGFilter } from '@Components/header/FluidSVGFilter';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const AUTO_THEME = 'auto';

interface Props {
  themeProps: { theme: string; auto: boolean };
}

export default function Theme({ themeProps }: Props) {
  // const { switchTheme } = useStore();
  const [themeState, setThemeState] = useState(themeProps);

  const selectTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.value;

    if (theme === AUTO_THEME) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery.matches) {
        // Код для использования темной темы цветов
        localStorage.setItem('theme', JSON.stringify({ theme: 'dark', auto: true }));
        document.documentElement.dataset.theme = 'dark';
        setThemeState({ theme: 'dark', auto: true });
      } else {
        // Код для использования светлой темы цветов
        localStorage.setItem('theme', JSON.stringify({ theme: 'light', auto: true }));
        document.documentElement.dataset.theme = 'light';
        setThemeState({ theme: 'light', auto: true });
      }
      return;
    }
    document.documentElement.dataset.theme = event.target.value;
    localStorage.setItem('theme', JSON.stringify({ theme, auto: false }));
    setThemeState({ theme, auto: false });
    // console.log(x);
  };

  useEffect(() => {
    const lS = JSON.parse(localStorage.getItem('theme')!) as { theme: string; auto: boolean };
    if (lS.auto) {
      setThemeState({ theme: lS.theme, auto: lS.auto });
      return;
    }

    setThemeState({ theme: lS.theme, auto: lS.auto });
    document.documentElement.dataset.theme = lS.theme;
  }, []);

  return (
    <form className="header__settings-group theme" role="radiogroup" aria-label="Выбирите цветовую схему">
      <strong className="header__settings-group-title">Select theme</strong>
      <label role="radio" htmlFor="light" className="header__settings-item" tabIndex={0}>
        <input
          type="radio"
          name="theme"
          value="light"
          id="light"
          onChange={selectTheme}
          checked={themeState?.theme === LIGHT_THEME && !themeState.auto}
        />
        <span className="header__settings-radio-button" aria-hidden>
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">light</p>
        <span className="header__settings-icon light" aria-hidden>
          <span />
        </span>
      </label>
      <label role="radio" htmlFor="dark" className="header__settings-item" tabIndex={0}>
        <input
          type="radio"
          name="theme"
          value="dark"
          id="dark"
          onChange={selectTheme}
          checked={themeState?.theme === DARK_THEME && !themeState.auto}
        />
        <span className="header__settings-radio-button" aria-hidden>
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">dark</p>
        <span className="header__settings-icon dark" aria-hidden>
          <span />
        </span>
      </label>

      <label role="radio" htmlFor="auto" className="header__settings-item" tabIndex={0}>
        <input type="radio" name="theme" value="auto" id="auto" onChange={selectTheme} checked={themeState.auto} />
        <span className="header__settings-radio-button" aria-hidden>
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">auto</p>
        <span className="header__settings-icon auto" aria-hidden>
          <span />
        </span>
      </label>
      <FluidSVGFilter />
    </form>
  );
}
