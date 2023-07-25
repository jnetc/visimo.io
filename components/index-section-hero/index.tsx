import Image from 'next/image';
// Components
import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import Smartphone from '@Components/smartphone';
import BigCloudLeft from '@Components/SVG/BigCloudLeft';
import BigCloudRight from '@Components/SVG/BigCloudRight';
// Hooks
import { useStore } from '@Hooks/useStore';

export default function HeroSection() {
  const { surveyNotice, image } = useStore().data!.heroSection;
  return (
    <section className="section main-grid hero">
      <HeroTitle />
      <HeroDesc />
      {surveyNotice !== '' ? <p className="hero__survey">{surveyNotice}</p> : null}
      <HeroActionButton />
      <Smartphone customClass="phone-hero" isHero>
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
      <BigCloudLeft extraClass="hero__cloud-left" />
      <BigCloudRight extraClass="hero__cloud-right" />
    </section>
  );
}
