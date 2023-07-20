import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  pointerHandler: (value: string, isCustomerAnswer: boolean) => void;
}

export default function QuestionRadioButtons({ id, pointerHandler }: Props) {
  const { language } = useStore();

  return (
    <div className="question__left-side question__radio-buttons">
      <input
        type="radio"
        id={`no-${id}`}
        name={`answer-selected ${id}`}
        value={locale.buttonNo[language]}
        aria-label={locale.buttonNo[language]}
        onChange={event => pointerHandler(event.target.value, true)}
      />
      <label htmlFor={`no-${id}`} className="button button-red question__btn-no">
        {locale.buttonNo[language]}
      </label>
      <input
        type="radio"
        id={`yes-${id}`}
        name={`answer-selected ${id}`}
        value={locale.buttonYes[language]}
        aria-label={locale.buttonYes[language]}
        onChange={event => pointerHandler(event.target.value, false)}
      />
      <label htmlFor={`yes-${id}`} className="button button-green question__btn-yes">
        {locale.buttonYes[language]}
      </label>
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
