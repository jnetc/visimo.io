import { ReactNode } from 'react';
//Hook
import { useStore } from '@Hooks/useStore';

interface Props {
  children: ReactNode;
  isHero?: boolean;
  customClass: 'phone-hero' | 'phone-app';
}

export default function Smartphone({ children, customClass, isHero = false }: Props) {
  const date = new Date();
  const { isDarkTheme } = useStore();
  return (
    <div className={`phone ${customClass} ${isHero ? 'phone-backdrop' : ''}`}>
      {isHero ? (
        <img className="phone__visik-on-cloud" src={`./images/svg/${isDarkTheme}/visik_na_oblake.svg`} alt="template" />
      ) : null}
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
