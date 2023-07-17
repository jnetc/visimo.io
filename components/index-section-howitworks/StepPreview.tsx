import Smartphone from '@Components/smartphone';
import StepBlob from './SVG/StepBlob';

export default function StepPreview() {
  return (
    <div className="step__app-preview">
      <Smartphone customClass="phone-step">
        <img src="/images/screenshot.png" alt="app image" />
      </Smartphone>
      <StepBlob />
    </div>
  );
}
