import { useRef } from 'react';
//Components
import StepBackLayer from './SVG/StepBackLayer';
import Star from '@Components/SVG/Star';
import SmallCloudOne from '@Components/SVG/SmallCloudOne';
// Hook
import { useIntersectionObserver } from '@Hooks/useIntersectionObserver';
// Types
import type { IStep } from '@Types';

interface Props extends Omit<IStep, 'image' | 'discuss'> {
  id: number;
}

export default function StepIllustration({ id, description }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, {
    rootMargin: '-150px',
    threshold: 0,
  });

  return (
    <div className="step__illustration">
      <p className={`step__description ${isIntersecting ? 'animated show' : ' animated'}`} ref={ref}>
        {description}
      </p>
      <img className="step__front-layer" src={`/images/svg/step-${id}-visic.svg`} alt="visics" />
      <StepBackLayer />
      <SmallCloudOne extraClass="step__cloud-left" />
      <span className="sun step__sun illustration" aria-hidden />
      <Star extraClass="step-star1" />
      <Star extraClass="step-star2" />
      <Star extraClass="step-star3" />
      <Star extraClass="step-star4" />
      <Star extraClass="step-star5" />
    </div>
  );
}
