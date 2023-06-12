import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Hook
import { useSurveyForm } from '@Hooks/useServeyForm';
// import { useStore } from '@Hooks/useStore';
// Components
import SurveyRadioButtons from './SurveyRadioButtons';
import SurveyTextField from './SurveyTextField';
// Helper
import debounce from '@Helpers/debounce';
// Types
import type { KeyboardEvent } from 'react';
import type { IQuestion } from '@Types';

export default function Question({ question }: { question: IQuestion }) {
  const { id, title, description } = question;
  const { allQuestions, setAllQuestions } = useSurveyForm();
  const [customAnswer, setCustomAnswer] = useState(false);

  function selectAnswer(value: string, hasCustomerAnswer: boolean, keyEvent?: KeyboardEvent<HTMLButtonElement>) {
    console.log(keyEvent);

    if (!keyEvent || keyEvent.code !== 'Space') return;
    // If question is an array
    const isInArray = allQuestions.find(q => q.id === id);
    // Adding new question in the array
    if (!isInArray) {
      const question = {
        id,
        title,
        description,
        answer: value,
        hasCustomerAnswer,
        customerAnswer: '',
      };
      setAllQuestions([...allQuestions, question]);
      setCustomAnswer(hasCustomerAnswer);
      return;
    }

    setCustomAnswer(hasCustomerAnswer);
    // Change values
    isInArray.answer = value;
    isInArray.hasCustomerAnswer = hasCustomerAnswer;
    // Clean text if answer YES (no need)
    if (!hasCustomerAnswer) {
      isInArray.customerAnswer = '';
    }
    // update questions in array
    setAllQuestions([...allQuestions]);
  }

  const customerAnswer = debounce(value => {
    // If question is an array
    const isInArray = allQuestions.find(q => q.id === id);
    // Adding customer answer in array
    isInArray!.customerAnswer = value;
    // Bring in back to array
    setAllQuestions([...allQuestions]);
  }, 500);

  return (
    <div className="question main-grid">
      <h3 className="survey-form__title">{title}</h3>
      <ReactMarkdown className="survey-form__txt markdown" children={description} />
      <SurveyRadioButtons id={id} pointerHandler={selectAnswer} />
      {customAnswer ? <SurveyTextField id={id} handler={customerAnswer} /> : null}
    </div>
  );
}
