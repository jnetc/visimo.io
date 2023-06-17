import { useState, FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';
// Hooks
import { useStore } from '@Hooks/useStore';
import { ServeyContext } from '@Hooks/useServeyForm';
// Components
import Question from './Question';
// Helpers
import findMatchingElements from '@Helpers/compare-arrays';

// Types
import type { ISurveyContext, ResponseSurveyType } from '@Types';

export default function SurveyForm() {
  const { data, language } = useStore();

  const [allQuestions, setAllQuestions] = useState<ISurveyContext[]>([]);
  const [formComplete, setFormComplete] = useState(false);
  const { questions } = data!.surveySection;

  let matchingArrays: ISurveyContext[];
  let isAllQuestionsSelected = false;

  const questionsArr = questions.map((q, idx) => {
    return <Question key={q.id} question={q} order={idx + 1} />;
  });

  // If language changed remove old language from array
  if (allQuestions.length > questions.length) {
    matchingArrays = findMatchingElements(allQuestions, questions);
  } else {
    matchingArrays = allQuestions;
  }

  isAllQuestionsSelected = allQuestions.length === questions.length;

  const date = new Date();
  const intl = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
  console.log(intl);

  async function sendSurvey(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const sorted = matchingArrays
      .sort((a, b) => {
        if (a.order > b.order) return 1;
        return -1;
      })
      .map(q => {
        return `<li style="border-bottom: 1px solid black;"><h2 style="font-size: 1.5em;">${
          q.title
        }</h2><p style="font-size: 1.1em;">Ответ: ${q.answer}</p><p style="font-size: 1.1em;">${
          q.customerAnswer && `Дополнение: ${q.customerAnswer}`
        }</p></li>`;
      })
      .toString()
      .replaceAll(',', '');
    console.log(sorted);

    try {
      const response = await fetch(`/api/survey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          survey: `<ol style="padding: 0">${sorted}</ol>`,
        }),
      });

      const data: ResponseSurveyType = await response.json();

      console.log(data.status, data.message);
    } catch (error) {}
  }

  return (
    <ServeyContext.Provider value={{ allQuestions, formComplete, setAllQuestions, setFormComplete }}>
      <form className="main-grid survey__form" onSubmit={sendSurvey}>
        {questionsArr}
        <button
          type="submit"
          className={`button ${isAllQuestionsSelected ? 'button-primary' : 'disabled'} survey__send-button`}
          aria-disabled={!isAllQuestionsSelected}
        >
          {locale.sendButton[language]}
        </button>
      </form>
    </ServeyContext.Provider>
  );
}

const locale = {
  sendButton: {
    en: 'send to us',
    ru: 'отправить нам',
    fi: 'lähetä meille',
  },
};
