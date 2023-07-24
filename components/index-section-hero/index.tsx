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
  const { data } = useStore();
  return (
    <section className="section main-grid hero">
      <HeroTitle />
      <HeroDesc />
      {data?.heroSection.surveyNotice !== '' ? <p className="hero__survey">{data!.heroSection.surveyNotice}</p> : null}
      <HeroActionButton />
      <Smartphone customClass="phone-hero" isHero>
        <Image src="/images/screenshot.webp" alt="template" fill sizes="(max-width: 438px) 100vw, 438px" priority />
        {/* <img src="./images/screenshot.webp" alt="template" width={'100%'} height={'100%'} /> */}
      </Smartphone>
      <BigCloudLeft extraClass="hero__cloud-left" />
      <BigCloudRight extraClass="hero__cloud-right" />
    </section>
  );
}
