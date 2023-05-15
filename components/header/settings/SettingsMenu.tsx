import { useRef } from 'react';
// Components
import Langs from './lang';
import Theme from './theme';
// Hook
import { useStore } from '@Hooks/useStore';

import type { ThemeType } from '@Types';

interface Props {
  show: boolean;
  isOpenHandler: (boolean: boolean) => void;
}

export default function SettingsMenu({ show, isOpenHandler }: Props) {
  const { data } = useStore();
  const localStorageValue = useRef<ThemeType>();

  const lS = JSON.parse(localStorage.getItem('theme')!);
  localStorageValue.current = lS;

  return (
    <>
      {show ? (
        <div className={show ? 'header__settings-menu show' : 'header__settings-menu'}>
          <h3 className="header__settings-title">{data?.navigation.title}</h3>
          {localStorageValue.current ? <Theme initTheme={localStorageValue.current} /> : null}
          <Langs />
          <button onPointerUp={() => isOpenHandler(false)}>close</button>
        </div>
      ) : null}
    </>
  );
}
