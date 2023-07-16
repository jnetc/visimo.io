import StepBackLayer from './SVG/StepBackLayer';
import Star from '@Components/SVG/Star';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
import Monolog from './SVG/Monolog';

// Types
import type { IStep } from '@Types';

interface Props {
  data: IStep;
  id: number;
}

export default function Step({ id, data }: Props) {
  return (
    <div className={`step-${id}`}>
      <div className="step__illustration">
        <img className="step__front-layer" src={`/images/svg/step-${id}-visic.svg`} alt="visics" />
        <StepBackLayer />
        <SmallCloudLeft extraClass="step__cloud-left" />
        <span className="sun step__sun illustration" aria-hidden />
        <Star extraClass="step-star1" />
        <Star extraClass="step-star2" />
        <Star extraClass="step-star3" />
        <Star extraClass="step-star4" />
        <Star extraClass="step-star5" />
        <p className={`step__description ${data.discuss}-number${id}`}>
          {data.description}
          <Monolog />
        </p>
      </div>
      <div className="step__app-preview">preview</div>
    </div>
  );
}
