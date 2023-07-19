import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  pointerHandler: (value: string, isCustomerAnswer: boolean) => void;
}

export default function SurveyRadioButtons({ id, pointerHandler }: Props) {
  const { language } = useStore();

  return (
    <div className="servey__left-side survey-form__radio-buttons">
      <div className="q-button">
        <input
          type="radio"
          id={`no-${id}`}
          name={`answer-selected ${id}`}
          value={locale.buttonNo[language]}
          aria-label={locale.buttonNo[language]}
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
          aria-label={locale.buttonYes[language]}
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
    sv: 'nej',
  },
  buttonYes: {
    en: 'yes',
    ru: 'да',
    fi: 'kyllä',
    sv: 'ja',
  },
};
