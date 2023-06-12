import { useState } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
import { ServeyContext } from '@Hooks/useServeyForm';
// Components
import Question from './Question';
// Types
import type { ISurveyContext } from '@Types';

export default function SurveyForm() {
  const { data } = useStore();

  const [allQuestions, setAllQuestions] = useState<ISurveyContext[]>([]);
  const [formComplete, setFormComplete] = useState(false);
  const { questions } = data!.surveySection;

  const questionsArr = questions.map(q => {
    return <Question key={q.id} question={q} />;
  });

  console.log(allQuestions);

  return (
    <ServeyContext.Provider value={{ allQuestions, formComplete, setAllQuestions, setFormComplete }}>
      <form className="survey__form">
        {questionsArr}
        <button type="submit" className="button button-primary survey__send-button">
          send to us
        </button>
      </form>
    </ServeyContext.Provider>
  );
}