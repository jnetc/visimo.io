import type { ISVGLinesObjects } from '@Types';

export const SVGTrinagleLines = ({ position, size, stroke }: ISVGLinesObjects) => (
  <svg
    className={`${position} ${size} svg-objects `}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 84"
    aria-hidden
  >
    <path
      d="M38.1243 83.0886L48.9633 73.6689M34.3551 75.4161L66.7952 47.2204M30.5862 67.7399L84.6304 20.7758M26.8169 60.0709L88.8426 6.16698M23.0516 52.395L77.1656 5.36682M19.2824 44.7224L65.4886 4.56666M15.5133 37.0498L53.8115 3.7665M11.7442 29.3773L42.1345 2.96634M7.97501 21.7047L30.4574 2.16618M4.20974 14.0287L18.7804 1.36602M0.44059 6.35617L7.10334 0.565859"
      className={stroke}
    />
  </svg>
);
