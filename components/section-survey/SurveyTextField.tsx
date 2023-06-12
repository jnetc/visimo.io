// Hook
import { useStore } from '@Hooks/useStore';

interface Props {
  id: string;
  handler: (value: string) => void;
}

export default function SurveyTextField({ id, handler }: Props) {
  const { language } = useStore();
  return (
    <>
      <label className="survey-form__answer-label" htmlFor={`answer-${id}`}>
        {locale.textFieldAbove[language]}
      </label>
      <textarea
        className="survey-form__answer"
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
  },
  buttonYes: {
    en: 'yes',
    ru: 'да',
    fi: 'kyllä',
  },
  // buttonUnder: {
  //   en: 'If you want to change answer just press another button.',
  //   ru: 'Если вы хотите изменить ответ, просто нажмите другую кнопку.',
  //   fi: 'Jos haluat muuttaa vastausta, paina toista painiketta.',
  // },
  textFieldAbove: {
    en: 'In a nutshell, why not?',
    ru: 'В двух словах, почему нет?',
    fi: 'Lyhyesti sanottuna, miksi ei?',
  },
  placeholder: {
    en: 'Type your vision',
    ru: 'Свое видение',
    fi: 'Kirjoita visiosi',
  },
};
