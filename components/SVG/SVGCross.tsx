export const SVGCross = ({ posclass }: { posclass: string }) => (
  <div className={`svg-objects ${posclass}`}>
    <svg className="fill-svg" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.2688 11.25H24.2564V0H11.0414V11.25H0.0289612V24.75H11.0414V36H24.2564V24.75H35.2688V11.25Z"
        fill="#3457FD"
      />
      <path
        d="M44.529 19.25V18.75H44.029H33.5165V8V7.5H33.0165H19.8015H19.3015V8V18.75H8.78909H8.28909V19.25V32.75V33.25H8.78909H19.3015V44V44.5H19.8015H33.0165H33.5165V44V33.25H44.029H44.529V32.75V19.25Z"
        stroke="black"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
);
