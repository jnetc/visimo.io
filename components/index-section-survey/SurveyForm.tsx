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
import setData from '@Helpers/setData';
// Types
import type { FormEvent } from 'react';
import type { ISurveyContext, ResponseMessageType } from '@Types';

export default function SurveyForm() {
  const { data } = useStore();
  const { push } = useRouter();

  const [allQuestions, setAllQuestions] = useState<ISurveyContext[]>([]);
  const [formComplete, setFormComplete] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [responceStatus, setResponceMessage] = useState<ResponseMessageType | undefined>();
  const { questions } = data!.surveySection;

  let matchingArrays: ISurveyContext[];
  let isAllQuestionsSelected = false;

  useLayoutEffect(() => {
    const isSurveyDone = localStorage.getItem('survey');
    if (isSurveyDone) {
      setResponceMessage({ status: 'success' });
      setComplete(true);
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

  async function sendSurvey(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const sorted = matchingArrays
      .sort((a, b) => {
        if (a.order > b.order) return 1;
        return -1;
      })
      .map(q => {
        return `
        <li style="border-bottom: 1px solid black;">
          <h2 style="font-size: 1.5em;">${q.title}</h2>
          <p style="font-size: 1.1em;">Ответ: ${q.answer}</p>
          <p style="font-size: 1.1em;">${q.customerAnswer && `Дополнение: ${q.customerAnswer}`}</p>
        </li>`;
      })
      .toString()
      .replaceAll(',', '');

    try {
      const response = await fetch(`/api/survey`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ data: setData(), survey: `<ol style="padding: 0">${sorted}</ol>` }),
      });

      const data: ResponseMessageType = await response.json();

      if (data.status === 'success') {
        push('#survey');
        localStorage.setItem('survey', 'true');
      }
      setResponceMessage({ ...data });
    } catch (error) {
      setResponceMessage({ status: 'error' });
    }
  }

  return (
    <ServeyContext.Provider value={{ allQuestions, formComplete, setAllQuestions, setFormComplete }}>
      {isComplete ? null : (
        <form
          className={`main-grid survey-form ${responceStatus?.status === 'success' ? 'main-grid-hide' : ''}`}
          onSubmit={sendSurvey}
        >
          {questionsArr}
          <SendButton isSelectedAll={isAllQuestionsSelected} />
        </form>
      )}

      {!responceStatus?.status ? null : <ResponseMessage status={responceStatus.status} />}
    </ServeyContext.Provider>
  );
}
