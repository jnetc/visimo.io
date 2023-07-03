import { useRef, useState } from 'react';
// Components
import SettingsMenu from './SettingsMenu';
import OutsideClickHandler from './OutsideClickHandler';
// Hook
import { useStore } from '@Hooks/useStore';

export default function Langs() {
  const { language } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <button
        className={isOpen ? 'button button-langs active' : 'button button-langs'}
        onPointerUp={toggleMenu}
        ref={refButton}
        aria-label={locale[language]}
        title={locale[language]}
      >
        {languageValues[language]}
        <svg
          className="button-langs-arrow"
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M2 1.5L9 9.5L16 1.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <SettingsMenu show={isOpen} closeMenuHandler={closeMenu} />
    </OutsideClickHandler>
  );
}

const locale = {
  en: 'Select language',
  ru: 'Выберите язык',
  fi: 'Valitse kieli',
};

export const languageValues = {
  en: 'English',
  ru: 'Русский',
  fi: 'Suomi',
};
