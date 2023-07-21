import { useState, useEffect, useRef } from 'react';
// Components
import Logo from './logo';
import Links from './links';
import MobNavButton from './mob-menu/MobNavButton';
import MobMenu from './mob-menu';
import Langs from './langs';
import Themes from './themes';
// Helper
import debounce from '@Helpers/debounce';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  function openMenu(value: boolean) {
    setIsOpen(value);
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }

  useEffect(() => {
    function scrollBehaver() {
      if (Math.round(window.scrollY) > 5) {
        ref.current?.classList.add('is-sticky');
      } else {
        ref.current?.classList.remove('is-sticky');
      }
    }
    // Присваиваем 'debounce' scroll поведению
    const callFun = debounce(scrollBehaver, 100);

    // Добавляем обработчик события 'scroll'
    window.addEventListener('scroll', callFun);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', callFun);
    };
  }, []);

  return (
    <>
      <MobMenu handler={openMenu} isOpen={isOpen} />
      <header aria-label="header-navigation" className="header" ref={ref}>
        <nav className="nav-bar">
          <Logo />
          <Links />
          <Langs />
          <Themes />
          <MobNavButton handler={openMenu} />
        </nav>
      </header>
    </>
  );
}
