import { useRef } from 'react';
// Components
import Langs from './lang';
import Theme from './theme';
// Types
import type { ThemeType } from '@Types';

export default function SettingsMenu({ show }: { show: boolean }) {
  const localStorageValue = useRef<ThemeType>();

  const lS = JSON.parse(localStorage.getItem('theme')!);
  localStorageValue.current = lS;

  return (
    <>
      {show ? (
        <div className={show ? 'navigation__settings-menu retro-box show' : 'navigation__settings-menu retro-box'}>
          {localStorageValue.current ? <Theme initTheme={localStorageValue.current} /> : null}
          <Langs />
        </div>
      ) : null}
    </>
  );
}
