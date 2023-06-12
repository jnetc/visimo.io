import { useContext, createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { ISurveyContext } from '@Types';

type State = {
  allQuestions: Array<ISurveyContext>;
  formComplete: boolean;
  setAllQuestions: Dispatch<SetStateAction<Array<ISurveyContext>>>;
  setFormComplete: Dispatch<SetStateAction<boolean>>;
};

const state: State = {
  allQuestions: [],
  formComplete: false,
  setAllQuestions: () => null,
  setFormComplete: () => null,
};

export const ServeyContext = createContext(state);

export const useSurveyForm = () => {
  return useContext(ServeyContext);
};
