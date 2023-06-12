import { useContext, createContext } from 'react';
import type { LanguagesType, IData } from '@Types';

type State = {
  readonly language: LanguagesType;
  readonly languages: Array<LanguagesType>;
  data: IData | null;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
