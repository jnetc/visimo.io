import type { LanguagesType } from '@Types';
import type { ChangeEvent } from 'react';

interface Props {
  lang: LanguagesType;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: LanguagesType;
}

export default function RadioLangButton({ handler, lang, checked }: Props) {
  return (
    <>
      <label role="radio" htmlFor={lang} className="nav-bar__settings-item" tabIndex={0}>
        <input type="radio" name="theme" id={lang} onChange={handler} checked={lang === checked} />
        <span className="nav-bar__settings-radio-button" aria-hidden>
          <span className="dot"></span>
        </span>
        <p className="nav-bar__settings-name">{locale[lang]}</p>
      </label>
    </>
  );
}

const locale = {
  en: 'English',
  ru: 'Русский',
  fi: 'Suomi',
};