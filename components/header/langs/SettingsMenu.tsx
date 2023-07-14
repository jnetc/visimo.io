import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
// Components
import LangButton from './LangButton';
// Types
import type { PointerEvent } from 'react';
import type { LanguagesType } from '@Types';

export default function SettingsMenu({ show, closeMenuHandler }: { show: boolean; closeMenuHandler: () => void }) {
  const { asPath, push, locale, locales } = useRouter();
  // const { languages, language } = useStore();
  const [selectedLang, setSelectedLang] = useState(locale! as LanguagesType);
  const languages = useRef(locales as Array<LanguagesType>);

  function changeLanguage(event: PointerEvent<HTMLButtonElement>) {
    const lang = (event.target as HTMLButtonElement).getAttribute('data-lang') as LanguagesType;
    // Changing route
    push(`${asPath}`, `${asPath}`, { locale: lang });
    // Using state variable as a boolean in LangButton component
    setSelectedLang(lang);
    // Close window after selecting language
    closeMenuHandler();
  }

  const langButtons = languages.current?.map(order => {
    return <LangButton key={order} lang={order} checked={selectedLang} handler={changeLanguage} />;
  });

  return (
    <>
      {show ? (
        <ul className={show ? 'nav-bar__settings-menu retro-box show' : 'nav-bar__settings-menu retro-box'}>
          {langButtons}
        </ul>
      ) : null}
    </>
  );
}
