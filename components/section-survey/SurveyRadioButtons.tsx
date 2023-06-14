import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  pointerHandler: (value: string, isCustomerAnswer: boolean) => void;
}

export default function SurveyRadioButtons({ id, pointerHandler }: Props) {
  const { language } = useStore();

  return (
    <div className="survey-form__radio-buttons" aria-labelledby="question">
      <div className="q-button">
        <input
          type="radio"
          id={`no-${id}`}
          name={`answer-selected ${id}`}
          value={locale.buttonNo[language]}
          aria-labelledby={locale.buttonNo[language]}
          onChange={event => pointerHandler(event.target.value, true)}
        />
        <label htmlFor={`no-${id}`} className="button button-red survey-form__btn-no">
          {locale.buttonNo[language]}
        </label>
      </div>
      <div className="q-button">
        <input
          type="radio"
          id={`yes-${id}`}
          name={`answer-selected ${id}`}
          value={locale.buttonYes[language]}
          aria-labelledby={locale.buttonYes[language]}
          onChange={event => pointerHandler(event.target.value, false)}
        />
        <label htmlFor={`yes-${id}`} className="button button-green survey-form__btn-yes">
          {locale.buttonYes[language]}
        </label>
      </div>
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
