import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  isOpen: boolean;
  handler: (value: string) => void;
}

export default function QuestionTextField({ id, handler, isOpen }: Props) {
  const { language } = useStore();
  return (
    <>
      <label
        className={`question__left-side question__textfield-label ${isOpen ? 'open' : ''}`}
        htmlFor={`answer-${id}`}
      >
        {locale.textFieldAbove[language]}
      </label>
      <textarea
        className={`question__left-side question__textfield ${isOpen ? 'open' : ''}`}
        id={`answer-${id}`}
        name="customer-answer"
        cols={30}
        rows={7}
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
