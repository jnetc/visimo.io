import type { ISVGLetterObjects } from '@Types';

export const SVGLetter = ({ position, size }: ISVGLetterObjects) => (
  <svg
    className={`${position} ${size} svg-objects `}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    aria-hidden
  >
    <rect className="bg-letter-stroke" x="0.5" y="0.5" width="15" height="15" />
    <rect className="bg-letter-stroke" x="80.5" y="0.5" width="15" height="15" />
    <rect className="bg-letter-stroke" x="0.5" y="80.5" width="15" height="15" />
    <rect className="bg-letter-stroke" x="80.5" y="80.5" width="15" height="15" />
    <path
      d="M15.5399 7.71002H80.5619M7.62634 15.5343V80.3858M87.6263 15.4774V80.4426M80.5051 87.71H15.5968"
      className="bg-letter-stroke"
      strokeDasharray="10 10"
    />
    <path
      d="M26.8632 70.1653L40.9432 24.0853H53.9352L68.0152 70.1653H59.0552L46.5112 29.5253H48.1752L35.8232 70.1653H26.8632ZM35.3112 60.5653V52.4373H59.6312V60.5653H35.3112Z"
      className="bg-letter-fill"
    />
  </svg>
);
