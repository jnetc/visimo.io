import type { LanguagesType } from '@Types';
import type { PointerEvent } from 'react';

import { languageValues } from '.';

interface Props {
  lang: LanguagesType;
  handler: (event: PointerEvent<HTMLButtonElement>) => void;
  checked: LanguagesType;
}

export default function LangButton({ handler, lang, checked }: Props) {
  return (
    <button className="nav-bar__settings-item" data-lang={lang} aria-checked={lang === checked} onPointerDown={handler}>
      {languageValues[lang]}
    </button>
  );
}
