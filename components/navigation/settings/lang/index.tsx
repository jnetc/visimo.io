import { useState } from 'react';
import { useRouter } from 'next/router';
// Hooks
import { useStore } from '@Hooks/useStore';
// Components
import RadioLangButton from './RadioLangButton';
import { FluidSVGFilter } from '@Components/fluid-filter/FluidSVGFilter';
// Types
import type { ChangeEvent } from 'react';
import type { LanguagesType } from '@Types';

export default function Langs() {
  const { asPath, push } = useRouter();
  const { languages, language } = useStore();
  const [selectedLang, setSelectedLang] = useState(language);

  function changeLanguage(event: ChangeEvent<HTMLInputElement>) {
    const lang = event.target.id as LanguagesType;
    // Changing route
    push(`${asPath}`, `${asPath}`, { locale: lang });
    // Using state variable as a boolean in RadioLangButton component
    setSelectedLang(lang);
  }

  const langButtons = languages.map(order => {
    return <RadioLangButton key={order} lang={order} checked={selectedLang} handler={changeLanguage} />;
  });

  return (
    <form aria-label="Выбирите цветовую схему">
      <fieldset className="navigation__settings-group theme">
        <legend className="navigation__settings-group-title">{locale[language]}</legend>
        {langButtons}
      </fieldset>
      <FluidSVGFilter />
    </form>
  );
}

const locale = {
  en: 'Select language',
  ru: 'Выберите язык',
  fi: 'Valitse kieli',
};
