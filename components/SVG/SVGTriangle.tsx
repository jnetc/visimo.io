export const SVGTriangle = ({ posclass }: { posclass: string }) => (
  <div className={`svg-objects ${posclass}`}>
    <svg className="fill-svg" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5333 35.1926L0 0L41.0667 3.55259e-06L20.5333 35.1926Z" fill="#FFB133" />
      <path
        d="M33.7893 44.25L34.2223 44.9998L34.6553 44.25L55.1887 8.69273L55.6218 7.94269L54.7557 7.94269L13.689 7.94269L12.8229 7.94269L13.256 8.69273L33.7893 44.25Z"
        stroke="black"
      />
    </svg>
  </div>
);
