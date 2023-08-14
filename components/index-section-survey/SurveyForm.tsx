import { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
// Hooks
import { useStore } from '@Hooks/useStore';
import { ServeyContext } from '@Hooks/useServeyForm';
// Components
import Question from './Question';
import SendButton from './SendButton';
import ResponseMessage from './ResponseMessage';
// Helpers
import findMatchingElements from '@Helpers/compare-arrays';
// Types
import type { FormEvent, Dispatch, SetStateAction } from 'react';
import type { ISurveyContext, ResponseMessageType } from '@Types';

import sendSurvey from './SendingSurvey';

interface Props {
  setSurveyDone: Dispatch<SetStateAction<boolean>>;
  surveyDone: boolean;
}

export default function SurveyForm({ setSurveyDone, surveyDone }: Props) {
  const { data } = useStore();
  const { push } = useRouter();

  const [allQuestions, setAllQuestions] = useState<ISurveyContext[]>([]);
  const [formComplete, setFormComplete] = useState(false);
  const [responceStatus, setResponceMessage] = useState<ResponseMessageType | undefined>();
  const { questions } = data!.surveySection;

  let matchingArrays: ISurveyContext[];
  let isAllQuestionsSelected = false;

  useLayoutEffect(() => {
    const isSurveyDone = localStorage.getItem('survey');
    if (isSurveyDone) {
      setResponceMessage({ status: 'success' });
      setSurveyDone(true);
    }
  }, []);

  const questionsArr = data!.surveySection.questions.map((q, idx) => {
    return <Question key={q.id} question={q} order={idx + 1} />;
  });

  // If language changed remove old language from array
  if (allQuestions.length > questions.length) {
    matchingArrays = findMatchingElements(allQuestions, questions);
  } else {
    matchingArrays = allQuestions;
  }

  isAllQuestionsSelected = allQuestions.length === questions.length;

  const response = async (event: FormEvent<HTMLFormElement>) => {
    const response = await sendSurvey(event, matchingArrays);
    if (!response.status) return;
    setResponceMessage(response);

    // Move to top os survey section? after "success"
    if (response.status === 'success') {
      push('#survey');
    }
  };

  return (
    <ServeyContext.Provider value={{ allQuestions, formComplete, setAllQuestions, setFormComplete }}>
      {surveyDone ? null : (
        <form
          className={`main-grid survey-form ${responceStatus?.status === 'success' ? 'main-grid-hide' : ''}`}
          onSubmit={response}
        >
          {questionsArr}
          <SendButton isSelectedAll={isAllQuestionsSelected} />
        </form>
      )}

      {!responceStatus?.status ? null : <ResponseMessage status={responceStatus.status} />}
    </ServeyContext.Provider>
  );
}
