import { ChangeEvent } from 'react';

import type { ThemeArrayType } from '.';
import type { ThemeColorType } from '@Types';

import { useStore } from '@Hooks/useStore';

interface Props {
  theme: ThemeArrayType;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
  state: { theme: ThemeColorType; auto: boolean };
}
export default function RadioThemeButton({ theme, handler, state }: Props) {
  const { language } = useStore();
  return (
    <label role="radio" htmlFor={theme.name} className="nav-bar__settings-item" tabIndex={0}>
      <input
        type="radio"
        name="theme"
        id={theme.name}
        onChange={handler}
        checked={(state.theme === theme.name && !state.auto) || ('auto' === theme.name && state.auto)}
      />
      <span className="nav-bar__settings-radio-button" aria-hidden>
        <span className="dot"></span>
      </span>
      <p className="nav-bar__settings-name">{locale[theme.name][language]}</p>
    </label>
  );
}

const locale = {
  light: {
    en: 'light',
    ru: 'светлая',
    fi: 'valea',
  },
  dark: {
    en: 'dark',
    ru: 'темная',
    fi: 'tumma',
  },
  auto: {
    en: 'auto',
    ru: 'авто',
    fi: 'auto',
  },
};
