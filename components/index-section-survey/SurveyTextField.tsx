import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  handler: (value: string) => void;
}

export default function SurveyTextField({ id, handler }: Props) {
  const { language } = useStore();
  return (
    <>
      <label className="servey__left-side survey-form__answer-label" htmlFor={`answer-${id}`}>
        {locale.textFieldAbove[language]}
      </label>
      <textarea
        className="servey__left-side survey-form__answer"
        id={`answer-${id}`}
        name="customer-answer"
        cols={30}
        rows={9}
        placeholder={locale.placeholder[language]}
        onChange={event => handler(event.target.value)}
      />
    </>
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
  textFieldAbove: {
    en: 'In a nutshell, why not? *not necessarily',
    ru: 'В двух словах, почему нет? *не обязательно',
    fi: 'Lyhyesti sanottuna, miksi ei? *ei pakko',
    sv: 'Kort sagt, varför inte? *inte nödvändigtvis',
  },
  placeholder: {
    en: 'Type your vision',
    ru: 'Свое видение',
    fi: 'Kirjoita visiosi',
    sv: 'Skriv din vision',
  },
};
