import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import HeroIllustration from './HeroIllustration';
import { SVGCircleLines } from '@Components/background-objects/SVGCircleLines';
import { SVGCircle } from '@Components/background-objects/SVGCircle';
import HeroIllustrationMob from './HeroIllustrationMob';

export default function HeroSection() {
  return (
    <section className="hero-section main-grid">
      <header className="hero-section__header">
        <HeroTitle />
        <HeroDesc />
        <HeroActionButton />
        <SVGCircle
          fill="bg-geometric-fill-primary"
          size="bg-geometric-size-48"
          stroke="bg-geometric-stroke-48"
          position="hero-section__title-top-circle"
        />
        <SVGCircleLines
          stroke="bg-lines-stroke-main"
          size="bg-geometric-size-96"
          position="hero-section__title-top-circle-lines"
        />
        <span className="hero-section__span-circle" aria-hidden />
        <SVGCircleLines
          stroke="bg-lines-stroke-alt"
          size="bg-geometric-size-192"
          position="hero-section__span-circle-lines"
        />
      </header>
      <HeroIllustration />
      <HeroIllustrationMob />
    </section>
  );
}
