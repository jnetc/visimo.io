import { useRef, useState } from 'react';
// Components
import SettingsMenu from './SettingsMenu';
import OutsideClickHandler from './OutsideClickHandler';

export default function navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <button
        className={isOpen ? 'navigation__settings-button active' : 'navigation__settings-button'}
        onPointerUp={toggleMenu}
        ref={refButton}
      >
        <svg className="button__icon-gear">
          <use xlinkHref="/images/sprite-icons.svg#gear"></use>
        </svg>
      </button>
      <SettingsMenu show={isOpen} isOpenHandler={closeMenu} />
    </OutsideClickHandler>
  );
}