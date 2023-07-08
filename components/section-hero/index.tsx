import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import Smartphone from '@Components/smartphone';
// Hooks
import { useStore } from '@Hooks/useStore';

export default function HeroSection() {
  const { data } = useStore();
  return (
    <header className="section main-grid hero">
      <HeroTitle />
      <HeroDesc />
      {data?.heroSection.surveyNotice !== '' ? <p className="hero__survey">{data!.heroSection.surveyNotice}</p> : null}
      <HeroActionButton />
      <Smartphone customClass="phone-hero" isHero>
        <img src="./images/screenshot.png" alt="template" />
      </Smartphone>
      <img className="hero__cloud-left" src="/images/svg/hero-cloud-left.svg" alt="cloud" aria-hidden />
      <img className="hero__cloud-right" src="/images/svg/hero-cloud-right.svg" alt="cloud" aria-hidden />
    </header>
  );
}
