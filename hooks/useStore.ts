import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import { LanguagesType, IData } from '@Types';

type State = {
  readonly language: LanguagesType;
  readonly languages: Array<LanguagesType>;
  data: IData | null;
  darkTheme: boolean;
  switchTheme: Dispatch<SetStateAction<boolean>>;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
  darkTheme: false,
  switchTheme: isDark => isDark,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
