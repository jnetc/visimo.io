import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import HeroIllustration from './HeroIllustration';
import { SVGCircleLines } from '@Components/background-objects/SVGCircleLines';

export default function HeroSection() {
  return (
    <section className="hero-section main-grid">
      <header className="hero-section__header">
        <HeroTitle />
        <HeroDesc />
        <HeroActionButton />
      </header>
      <HeroIllustration />
      <span className="hero-section__span-circle" aria-hidden />
      <SVGCircleLines
        stroke="bg-lines-stroke-alt"
        size="bg-geometric-size-192"
        position="hero-section__span-circle-lines"
      />
    </section>
  );
}
