import { useState, FormEvent } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
import { ServeyContext } from '@Hooks/useServeyForm';
// Components
import Question from './Question';
import SendPlane from './SVG/SendPlane';
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
        <div className="servey__left-side ">
          <p className={`send-button__notice ${isAllQuestionsSelected && 'hide'}`}>{locale.attension[language]}</p>
          <div className="survey__send-button">
            <button
              type="submit"
              className={`button ${isAllQuestionsSelected ? 'button-yellow' : 'disabled'}`}
              aria-disabled={!isAllQuestionsSelected}
            >
              {locale.sendButton[language]}
            </button>
            {isAllQuestionsSelected ? <SendPlane /> : null}
          </div>
        </div>
      </form>
    </ServeyContext.Provider>
  );
}

const locale = {
  attension: {
    en: 'The button will be activated when all questions have been answered',
    ru: 'Кнопка активируется, когда будут даны ответы на все вопросы',
    fi: 'Painike aktivoituu, kun kaikkiin kysymyksiin on vastattu',
    sv: 'Knappen aktiveras när alla frågor har besvarats',
  },
  sendButton: {
    en: 'send to us',
    ru: 'отправить нам',
    fi: 'lähetä meille',
    sv: 'skicka till oss',
  },
};
