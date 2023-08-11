import Image from 'next/image';
// Components
import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import Smartphone from '@Components/smartphone';
import BigCloudTwo from '@Components/SVG/BigCloudTwo';
import BigCloudOne from '@Components/SVG/BigCloudOne';
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
      <BigCloudTwo extraClass="hero__cloud-left" />
      <BigCloudOne extraClass="hero__cloud-right" />
    </section>
  );
}
