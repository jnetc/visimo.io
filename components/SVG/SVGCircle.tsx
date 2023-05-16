export const SVGCircle = ({ posclass }: { posclass: string }) => (
  <div className={`svg-objects ${posclass}`}>
    <svg className="fill-svg" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="18.9843" cy="17.964" rx="17.9949" ry="17.964" fill="#3457FD" />
      <path
        d="M26.9946 44.5C37.2082 44.5 45.4894 36.2342 45.4894 26.036C45.4894 15.8378 37.2082 7.57196 26.9946 7.57196C16.7809 7.57196 8.49969 15.8378 8.49969 26.036C8.49969 36.2342 16.7809 44.5 26.9946 44.5Z"
        stroke="black"
      />
    </svg>
  </div>
);
