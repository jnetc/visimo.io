import type { ISVGGeometricObjects } from '@Types';

export const SVGRectangle = ({ position, size, stroke, fill }: ISVGGeometricObjects) => (
  <svg className={`${position} ${size} svg-objects`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" aria-hidden>
    <rect className={fill} width="35" height="35" />
    <rect className={`${stroke}`} x="14" y="12" width="35" height="35" />
  </svg>
);
