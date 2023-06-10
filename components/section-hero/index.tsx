import HeroTitle from './HeroTitle';
import HeroDesc from './HeroDesc';
import HeroActionButton from './HeroActionButton';
import Smartphone from '@Components/smartphone';
// import HeroPuzzle from './HeroPuzzle';
import { useStore } from '@Hooks/useStore';
// import { SVGCircleLines } from '@Components/background-objects/SVGCircle';
// import { SVGCircle } from '@Components/background-objects/SVGHeart';
// import HeroPuzzleBlue from './HeroPuzzleBlue';
// import HeroPuzzleYellow from './HeroPuzzleYellow';
// import { SVGCross } from '@Components/background-objects/SVGCross';

export default function HeroSection() {
  const { data } = useStore();
  return (
    <header className="hero-section main-grid">
      <HeroTitle />
      <HeroDesc />
      {data?.heroSection.surveyNotice !== '' ? (
        <p className="hero-section__survey">{data!.heroSection.surveyNotice}</p>
      ) : null}
      <HeroActionButton />
      <Smartphone>
        <img src="./images/smartphone-template.png" alt="template" />
      </Smartphone>
      {/* <SVGCircle
        fill="bg-geometric-fill-primary"
        size="bg-geometric-size-48"
        stroke="bg-geometric-stroke-48"
        position="hero-section__title-top-circle"
      />
      <SVGCircleLines
        stroke="bg-lines-stroke-main"
        size="bg-geometric-size-96"
        position="hero-section__title-top-circle-lines"
      /> */}
      {/* <HeroPuzzle /> */}
      {/* <HeroPuzzleBlue /> */}
      {/* <SVGCross
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-32"
        stroke="bg-geometric-stroke-32"
        position="hero-section__puzzle-right-cross"
      /> */}
      {/* <HeroPuzzleYellow /> */}
      {/* <span className="hero-section__span-circle" aria-hidden>
        <SVGCircleLines
          stroke="bg-lines-stroke-alt"
          size="bg-geometric-size-192"
          position="hero-section__span-circle-lines"
        />
      </span> */}
    </header>
  );
}
