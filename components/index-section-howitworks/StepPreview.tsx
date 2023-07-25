import Image from 'next/image';
// Components
import Smartphone from '@Components/smartphone';
import StepBlob from './SVG/StepBlob';
// Type
import type { IImage } from '@Types';

export default function StepPreview({ image }: { image: IImage }) {
  return (
    <div className="step__app-preview">
      <Smartphone customClass="phone-step">
        <Image
          src="/images/screen_cropped.webp"
          sizes="(max-width: 360px) 100vw, 360px"
          // src={image.url}
          // sizes={image.responsiveImage.sizes}
          alt={image.alt}
          title={image.title}
          fill
          priority
        />
      </Smartphone>
      <StepBlob />
    </div>
  );
}
