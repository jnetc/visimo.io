import { useContext, createContext } from 'react';
import type { ThemeColorType } from '@Types';

type Theme = {
  isDarkTheme: ThemeColorType;
  switchTheme: (theme: ThemeColorType) => void;
};
const state: Theme = {
  isDarkTheme: 'light',
  switchTheme: theme => theme,
};

export const Theme = createContext(state);

export const useTheme = () => {
  return useContext(Theme);
};
