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
      <label role="radio" htmlFor={lang} className="navigation__settings-item" tabIndex={0}>
        <input type="radio" name="theme" id={lang} onChange={handler} checked={lang === checked} />
        <span className="navigation__settings-radio-button" aria-hidden>
          <span className="dot"></span>
        </span>
        <p className="navigation__settings-name">{locale[lang]}</p>
        <img
          src={`./images/settings-icons/flag_${lang}.svg`}
          alt="show finnish flag icon"
          className={`navigation__settings-icon lang`}
          aria-hidden
        />
      </label>
    </>
  );
}

const locale = {
  en: 'English',
  ru: 'Русский',
  fi: 'Suomi',
};
