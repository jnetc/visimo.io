import { useRef } from 'react';
//Components
import StepBackLayer from './SVG/StepBackLayer';
import Star from '@Components/SVG/Star';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
// Hook
import { useIntersectionObserver } from '@Hooks/useIntersectionObserver';
// Types
import type { IStep } from '@Types';

interface Props {
  data: IStep;
  id: number;
}

export default function StepIllustration({ id, data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, {
    rootMargin: '-150px',
    threshold: 0,
  });

  return (
    <div className="step__illustration">
      <p
        className={`step__description ${isIntersecting ? data.discuss + ' animated show' : data.discuss + ' animated'}`}
        ref={ref}
      >
        {data.description}
      </p>
      <img className="step__front-layer" src={`/images/svg/step-${id}-visic.svg`} alt="visics" />
      <StepBackLayer />
      <SmallCloudLeft extraClass="step__cloud-left" />
      <span className="sun step__sun illustration" aria-hidden />
      <Star extraClass="step-star1" />
      <Star extraClass="step-star2" />
      <Star extraClass="step-star3" />
      <Star extraClass="step-star4" />
      <Star extraClass="step-star5" />
    </div>
  );
}
