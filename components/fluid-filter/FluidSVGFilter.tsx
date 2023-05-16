export const FluidSVGFilter = () => (
  <svg className="liquid-filter" aria-hidden>
    <filter
      id="goo"
      // x="-20%"
      // y="-20%"
      // width="140%"
      // height="140%"
      // filterUnits="objectBoundingBox"
      // primitiveUnits="userSpaceOnUse"
    >
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </svg>
);
