import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
// Components
import SettingsMenu from './SettingsMenu';
import OutsideClickHandler from './OutsideClickHandler';

export default function Langs() {
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <button
        className={isOpen ? 'small-button button-langs active' : 'small-button button-langs'}
        onPointerUp={toggleMenu}
        ref={refButton}
        aria-label="Select language"
        title="Select language"
      >
        {locale}
        <svg
          className="button-langs-arrow"
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M2 1.5L9 9.5L16 1.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <SettingsMenu show={isOpen} closeMenuHandler={closeMenu} />
    </OutsideClickHandler>
  );
}
