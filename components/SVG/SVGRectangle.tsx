export const SVGRectangle = ({ posclass }: { posclass: string }) => (
  <div className={`svg-objects ${posclass}`}>
    <svg className="fill-svg" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.1816 0H0.100555V35.9757H36.1816V0Z" fill="#FFB133" />
      <path
        d="M8.01947 7.52423H7.51947V8.02423V44V44.5H8.01947H44.1005H44.6005V44V8.02423V7.52423H44.1005H8.01947Z"
        stroke="black"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
);
