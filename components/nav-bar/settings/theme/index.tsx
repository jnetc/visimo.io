import { useState } from 'react';
// Components
import { FluidSVGFilter } from '@Components/fluid-filter/FluidSVGFilter';
import RadioThemeButton from './RadioThemeButton';
// Helper function
import setTheme from '@Helpers/setTheme';
// Hooks
import { useStore } from '@Hooks/useStore';
// Types
import type { ThemeType, ThemeColorType } from '@Types';
import type { ChangeEvent } from 'react';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const AUTO_THEME = 'auto';

interface Props {
  initTheme: ThemeType;
}

const themeArray = [
  { name: 'light', auto: false },
  { name: 'dark', auto: false },
  { name: 'auto', auto: true },
] as const;

export type ThemeArrayType = (typeof themeArray)[number];

export default function Theme({ initTheme }: Props) {
  const [themeState, setThemeState] = useState(initTheme);
  const { language } = useStore();

  const selectTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.id as ThemeColorType | typeof AUTO_THEME;

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

  const radioButtons = themeArray.map((theme: ThemeArrayType) => {
    return <RadioThemeButton key={theme.name} theme={theme} state={themeState} handler={selectTheme} />;
  });

  return (
    <form aria-label="Выбирите цветовую схему">
      <fieldset className="nav-bar__settings-group theme">
        <legend className="nav-bar__settings-group-title">{locale[language]}</legend>
        {radioButtons}
      </fieldset>
      <FluidSVGFilter />
    </form>
  );
}

const locale = {
  en: 'Select theme',
  ru: 'Выберите тему',
  fi: 'Valitse teema',
};
