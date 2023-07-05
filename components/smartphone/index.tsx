import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isHero: boolean;
}

export default function Smartphone({ children, isHero }: Props) {
  const date = new Date();
  return (
    <div className={`phone phone-hero ${isHero && 'phone-backdrop'}`}>
      {isHero ? <img className="phone__visik-on-cloud" src="./images/svg/visik_na_oblake.svg" alt="template" /> : null}
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
