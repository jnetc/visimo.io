import { ReactNode } from 'react';
// Component
import VisikOnCloud from './SVG/VisikOnCloud';

interface Props {
  children: ReactNode;
  isHero?: boolean;
  isApp?: boolean;
  customClass: 'phone-hero' | 'phone-app';
}

export default function Smartphone({ children, customClass, isHero = false, isApp = false }: Props) {
  const date = new Date();

  return (
    <div className={`phone ${customClass} ${isHero ? 'phone-backdrop' : ''}`}>
      {isHero ? <VisikOnCloud extraClass="phone__visik-on-cloud" /> : null}
      {isApp ? <span className="app__sun" /> : null}
      <span className="phone__control-btns" aria-hidden />
      <span className="phone__mono-eyebrow" aria-hidden />
      <div className="phone__top-screen" aria-hidden>
        <span className="phone__left-clock">
          {date.getHours()}:{date.getMinutes()}
        </span>
        <svg className="phone__right-icons">
          <use xlinkHref="/images/icons.svg#smartphone-right-side"></use>
        </svg>
      </div>
      <div className="phone__content">{children}</div>
    </div>
  );
}
