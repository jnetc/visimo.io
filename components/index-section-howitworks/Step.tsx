import StepBackLayer from './SVG/StepBackLayer';
import Star from '../SVG/Star';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
interface Props {
  description: string;
  id: number;
}

export default function Step(data: Props) {
  return (
    <div className={`step-${data.id}`}>
      <div className="step__illustration">
        <img className="step__front-layer" src={`/images/svg/step-${data.id}-visic.svg`} alt="visics" />
        <StepBackLayer />
        <SmallCloudLeft extraClass="step__cloud-left" />
        <span className="sun step__sun illustration" aria-hidden />
        <Star extraClass="step-star1" />
        <Star extraClass="step-star2" />
        <Star extraClass="step-star3" />
        <Star extraClass="step-star4" />
        <Star extraClass="step-star5" />
        <p className="step__dialog">{data.description}</p>
      </div>
      <div className="step__app-preview">preview</div>
    </div>
  );
}
