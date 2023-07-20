import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Hook
import { useSurveyForm } from '@Hooks/useServeyForm';
// Components
import QuestionRadioButtons from './QuestionRadioButtons';
import QuestionTextField from './QuestionTextField';
import Smartphone from '@Components/smartphone';
// Helper
import debounce from '@Helpers/debounce';
// Types
import type { IQuestion } from '@Types';

export default function Question({ question, order }: { question: IQuestion; order: number }) {
  const { id, title, description } = question;
  const { allQuestions, setAllQuestions } = useSurveyForm();
  const [customAnswer, setCustomAnswer] = useState(false);

  function selectAnswer(value: string, hasCustomerAnswer: boolean) {
    // If question is an array
    const isInArray = allQuestions.find(q => q.id === id);
    // Adding new question in the array
    if (!isInArray) {
      const question = {
        order,
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
      <h3 className="question__left-side question__title">{title}</h3>
      <ReactMarkdown className="question__left-side question__desc markdown" children={description} />
      <QuestionRadioButtons id={id} pointerHandler={selectAnswer} />
      <QuestionTextField id={id} handler={customerAnswer} isOpen={customAnswer} />
      <Smartphone customClass="phone-survey">
        <img src="/images/screenshot.png" alt="app image" />
      </Smartphone>
    </div>
  );
}
