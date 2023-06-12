import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Smartphone({ children }: Props) {
  return (
    <div className="phone phone-hero">
      <span className="phone__mono-eyebrow" aria-hidden>
        <span className="mono-eyebrow__camera" />
        <span className="mono-eyebrow__speaker" />
      </span>
      <span className="phone__control-btns" aria-hidden />
      <span className="phone__usb-port" aria-hidden />
      {children}
      {/* <span className="shadow"></span> */}

      {/* <svg viewBox="0 0 255 522" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M215.661 3.92754C235.159 3.92754 251.023 19.785 251.023 39.2754V482.134C251.023 501.654 235.189 517.482 215.661 517.482H42.5656C23.0381 517.482 7.2039 501.654 7.2039 482.134V39.2754C7.2039 19.7555 23.0381 3.92754 42.5656 3.92754H215.661ZM215.661 0H42.5656C20.8673 0 3.27482 17.5855 3.27482 39.2754V482.134C3.27482 503.824 20.8673 521.41 42.5656 521.41H215.661C237.359 521.41 254.952 503.824 254.952 482.134V39.2754C254.952 17.5855 237.359 0 215.661 0ZM3.27482 94.6831H0.514648V110.815H3.27482V94.6831ZM3.27482 129.923H0.514648V161.765H3.27482V129.923ZM3.27482 174.716H0.514648V206.559H3.27482V174.716ZM171.43 13.0787V9.45555C171.43 6.63754 173.541 4.26138 176.341 3.92754H82.4261C85.1863 4.31047 87.249 6.667 87.249 9.45555V13.0787C87.249 17.1044 90.52 20.3741 94.5473 20.3741H164.131C168.159 20.3741 171.43 17.1044 171.43 13.0787Z"
          fill="#000"
        />
        <path d="M117.66 10.1429H155.36" stroke="#515151" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
        <path
          d="M97.6223 14.3846C99.9659 14.3846 101.866 12.4855 101.866 10.1429C101.866 7.80022 99.9659 5.90112 97.6223 5.90112C95.2788 5.90112 93.3789 7.80022 93.3789 10.1429C93.3789 12.4855 95.2788 14.3846 97.6223 14.3846Z"
          fill="#515151"
        />
      </svg> */}
    </div>
  );
}
