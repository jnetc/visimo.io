import { useRouter } from 'next/router';

// Hooks
import { useStore } from '@Hooks/useStore';

import { FluidSVGFilter } from '@Components/header/FluidSVGFilter';

export default function Theme() {
  // const { asPath } = useRouter();
  // const { languages, language } = useStore();

  return (
    <div className="header__settings-group theme" role="radiogroup" aria-label="Выбирите цветовую схему">
      <h4 className="header__settings-group-title">Select theme</h4>
      <label role="radio" htmlFor="light" className="header__settings-item" tabIndex={0}>
        <input type="radio" name="theme" value="light" id="light" aria-hidden defaultChecked />
        <span className="header__settings-radio-button">
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">light</p>
        <span className="header__settings-icon light">
          <span />
        </span>
      </label>
      <label role="radio" htmlFor="dark" className="header__settings-item" tabIndex={0}>
        <input type="radio" name="theme" value="dark" id="dark" />
        <span className="header__settings-radio-button">
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">dark</p>
        <span className="header__settings-icon dark">
          <span />
        </span>
      </label>

      <label role="radio" htmlFor="auto" className="header__settings-item" tabIndex={0}>
        <input type="radio" name="theme" value="auto" id="auto" />
        <span className="header__settings-radio-button">
          <span className="dot"></span>
        </span>
        <p className="header__settings-name">auto</p>
        <span className="header__settings-icon auto">
          <span />
        </span>
      </label>

      <div className="element"></div>
      <FluidSVGFilter />
    </div>
  );
}
