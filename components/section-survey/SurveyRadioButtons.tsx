import type { KeyboardEvent } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  pointerHandler: (value: string, isCustomerAnswer: boolean, event?: KeyboardEvent<HTMLButtonElement>) => void;
}

export default function SurveyRadioButtons({ pointerHandler }: Props) {
  const { language } = useStore();

  return (
    <div className="survey-form__radio-buttons" role="radiogroup" aria-labelledby="question">
      <button
        type="button"
        className="button button-red survey-form__btn-no"
        value={locale.buttonNo[language]}
        onPointerUp={event => pointerHandler(event.currentTarget.value, true)}
        onKeyUp={event => pointerHandler(event.currentTarget.value, true, event)}
        tabIndex={0}
      >
        {locale.buttonNo[language]}
      </button>

      <button
        type="button"
        className="button button-green survey-form__btn-yes"
        value={locale.buttonYes[language]}
        onPointerUp={event => pointerHandler(event.currentTarget.value, false)}
        onKeyUp={event => pointerHandler(event.currentTarget.value, false, event)}
        tabIndex={0}
      >
        {locale.buttonYes[language]}
      </button>
      {/* <input
        type="radio"
        name={`answer-selected ${id}`}
        value={locale.buttonNo[language]}
        id={`no-${id}`}
        onChange={event => handler(event.target.value, true)}
      />
      <label htmlFor={`no-${id}`} className="button button-red survey-form__btn-no">
        {locale.buttonNo[language]}
      </label>
      <input
        type="radio"
        name={`answer-selected ${id}`}
        value={locale.buttonYes[language]}
        id={`yes-${id}`}
        onChange={event => handler(event.target.value, false)}
      />
      <label htmlFor={`yes-${id}`} className="button button-green survey-form__btn-yes">
        {locale.buttonYes[language]}
      </label> */}
    </div>
  );
}

const locale = {
  buttonNo: {
    en: 'no',
    ru: 'нет',
    fi: 'ei',
  },
  buttonYes: {
    en: 'yes',
    ru: 'да',
    fi: 'kyllä',
  },
};
