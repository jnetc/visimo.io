import type { ISVGGeometricObjects } from '@Types';

export const SVGCircle = ({ position, size, stroke, fill }: ISVGGeometricObjects) => (
  <svg className={`${position} ${size} svg-objects`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" aria-hidden>
    <circle className={fill} cx="18" cy="18" r="17.5" />
    <circle className={`${stroke}`} cx="25" cy="25" r="17.5" />
  </svg>
);
