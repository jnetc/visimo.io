import { ChangeEvent } from 'react';

import type { item } from '.';
import type { ThemeColorType } from '@Types';

import { useStore } from '@Hooks/useStore';

interface Props {
  theme: item;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
  state: { theme: ThemeColorType; auto: boolean };
}
export default function RadioThemeButton({ theme, handler, state }: Props) {
  const { language } = useStore();
  return (
    <label role="radio" htmlFor={theme.name} className="header__settings-item" tabIndex={0}>
      <input
        type="radio"
        name="theme"
        value={theme.name}
        id={theme.name}
        onChange={handler}
        checked={(state.theme === theme.name && !state.auto) || ('auto' === theme.name && state.auto)}
      />
      <span className="header__settings-radio-button" aria-hidden>
        <span className="dot"></span>
      </span>
      <p className="header__settings-name">{locale[theme.name][language]}</p>
      <span className={`header__settings-icon ${theme.name}`} aria-hidden>
        <span />
      </span>
    </label>
  );
}

export const locale = {
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
