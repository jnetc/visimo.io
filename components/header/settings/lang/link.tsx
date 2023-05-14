import { useRouter } from 'next/router';
// Types
import { LanguagesType } from '@Types';
// Component

interface Props {
  path: string;
  lang: LanguagesType;
}

export const LangButton = ({ path, lang }: Props) => {
  const { push } = useRouter();

  const switchLanguage = () => push(`${path}`, `${path}`, { locale: lang });

  return (
    <button onClick={switchLanguage}>
      {[lang]}
      <span />
    </button>
  );
};
