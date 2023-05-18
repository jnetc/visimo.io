import type { ISVGGeometricObjects } from '@Types';

export const SVGCross = ({ position, size, stroke, fill }: ISVGGeometricObjects) => (
  <svg className={`${position} ${size} svg-objects`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 44" aria-hidden>
    <path
      d="M35.2688 11.25H24.2564V0H11.0414V11.25H0.0289612V24.75H11.0414V36H24.2564V24.75H35.2688V11.25Z"
      className={fill}
    />
    <path
      d="M45.29,31.67h-11.39v11.39h-13.22v-11.39H9.29v-13.21h11.39V7.06h13.22v11.39h11.39v13.21Z"
      className={`${stroke}`}
    />
  </svg>
);
