import Langs from './lang';
import Theme from './theme';

import { useStore } from '@Hooks/useStore';

interface Props {
  show: boolean;
  isOpenHandler: (boolean: boolean) => void;
}

export default function SettingsMenu({ show, isOpenHandler }: Props) {
  const { data } = useStore();
  return (
    <>
      {show ? (
        <div className={show ? 'header__settings-menu show' : 'header__settings-menu'}>
          <h3 className="header__settings-title">{data?.navigation.title}</h3>
          <Theme />
          <Langs />
          <button onPointerUp={() => isOpenHandler(false)}>close</button>
        </div>
      ) : null}
    </>
  );
}
