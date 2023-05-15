import { useState, ChangeEvent } from 'react';
// Component for liquid effect
import { FluidSVGFilter } from '@Components/header/FluidSVGFilter';
import RadioThemeButton from './RadioThemeButton';
// Helper function
import setTheme from '@Helpers/setTheme';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const AUTO_THEME = 'auto';

import type { ThemeType, ThemeColorType } from '@Types';

interface Props {
  initTheme: ThemeType;
}

const themeArray = [
  { name: 'light', auto: false },
  { name: 'dark', auto: false },
  { name: 'auto', auto: true },
] as const;

export type item = (typeof themeArray)[number];

export default function Theme({ initTheme }: Props) {
  const [themeState, setThemeState] = useState(initTheme);

  const selectTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.value as ThemeColorType | typeof AUTO_THEME;

    console.log('select theme', theme);

    if (theme === AUTO_THEME) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery.matches) {
        // Код для использования темной темы цветов
        setTheme('dark', true);
        setThemeState({ theme: 'dark', auto: true });
      } else {
        // Код для использования светлой темы цветов
        setTheme('light', true);
        setThemeState({ theme: 'light', auto: true });
      }
      return;
    }
    if (theme === DARK_THEME) {
      setTheme(theme);
      setThemeState({ theme, auto: false });
    }
    if (theme === LIGHT_THEME) {
      setTheme(theme);
      setThemeState({ theme, auto: false });
    }
  };

  const radioButtons = themeArray.map((theme: item) => {
    return <RadioThemeButton key={theme.name} theme={theme} state={themeState} handler={selectTheme} />;
  });

  return (
    <form className="header__settings-group theme" role="radiogroup" aria-label="Выбирите цветовую схему">
      <strong className="header__settings-group-title">Select theme</strong>
      {radioButtons}
      <FluidSVGFilter />
    </form>
  );
}
