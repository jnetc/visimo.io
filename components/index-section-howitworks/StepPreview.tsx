import Image from 'next/image';
// Components
import Smartphone from '@Components/smartphone';
import StepBlob from './SVG/StepBlob';

export default function StepPreview() {
  return (
    <div className="step__app-preview">
      <Smartphone customClass="phone-step">
        <Image src="/images/screenshot.webp" alt="template" fill sizes="(max-width: 438px) 100vw, 438px" priority />
        {/* <img
          src="/images/screenshot.webp"
          alt="app image"
          width={'100%'}
          height={'100%'}
          sizes="(max-width: 438px) 100vw, 438px"
        /> */}
      </Smartphone>
      <StepBlob />
    </div>
  );
}
