import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import HeroPuzzle from './HeroPuzzle';
import { SVGCircleLines } from '@Components/background-objects/SVGCircleLines';
import { SVGCircle } from '@Components/background-objects/SVGCircle';
import HeroPuzzleBlue from './HeroPuzzleBlue';
import HeroPuzzleYellow from './HeroPuzzleYellow';
import { SVGCross } from '@Components/background-objects/SVGCross';

export default function HeroSection() {
  return (
    <header className="hero-section main-grid">
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
      {/* <header className="hero-section__header"></header> */}
      <HeroPuzzle />
      <HeroPuzzleBlue />
      <SVGCross
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-32"
        stroke="bg-geometric-stroke-32"
        position="hero-section__puzzle-right-cross"
      />
      <HeroPuzzleYellow />
      <span className="hero-section__span-circle" aria-hidden>
        <SVGCircleLines
          stroke="bg-lines-stroke-alt"
          size="bg-geometric-size-192"
          position="hero-section__span-circle-lines"
        />
      </span>
    </header>
  );
}
