import type { ISVGGeometricObjects } from '@Types';

export const SVGTriangle = ({ position, size, stroke, fill }: ISVGGeometricObjects) => (
  <svg className={`${position} ${size} svg-objects`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 44" aria-hidden>
    <polygon points="34.06 43.49 54.56 7.98 13.56 7.98 34.06 43.49" className={fill} />
    <polygon points="21.86 37.08 42.36 1.58 1.36 1.58 21.86 37.08" className={`${stroke}`} />
  </svg>
);
