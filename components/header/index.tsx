import { useState } from 'react';
// Components
import Logo from './logo';
import Links from './links';
import MobNavButton from './mob-menu/MobNavButton';
import MobMenu from './mob-menu';
import Langs from './langs';
import Themes from './themes';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu(value: boolean) {
    setIsOpen(value);
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }

  return (
    <>
      <MobMenu handler={openMenu} isOpen={isOpen} />
      <header aria-label="header-navigation" className="nav-bar">
        <Logo />
        <Links />
        <Langs />
        <Themes />
        <MobNavButton handler={openMenu} />
      </header>
    </>
  );
}
