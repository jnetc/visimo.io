import { useContext, createContext } from 'react';
import type { LanguagesType, IData, ThemeColorType } from '@Types';

type State = {
  readonly language: LanguagesType;
  readonly languages: Array<LanguagesType>;
  data: IData | null;
  isDarkTheme: ThemeColorType;
  switchTheme: (theme: ThemeColorType) => void;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
  isDarkTheme: 'light',
  switchTheme: theme => theme,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
