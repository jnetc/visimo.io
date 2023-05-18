import { useStore } from '@Hooks/useStore';
// Components
import { SVGGrid5Col } from '@Components/background-objects/SVGGrid5Col';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
import { SVGCross } from '@Components/background-objects/SVGCross';
import { SVGTriangle } from '@Components/background-objects/SVGTriangle';
import { TitleArrow } from './SVG/TitleArrow';

export default function HeroTitle() {
  const { data } = useStore();

  const splittingTitle = data!.heroSection.title.split(',').map((titl, idx, arr) => {
    if (arr.at(-1) === titl) {
      return (
        <strong key={idx} className="title-color">
          {titl.trim()}
        </strong>
      );
    }
    return <strong key={idx}>{titl.trim()}</strong>;
  });
  return (
    <h1 className="hero-section__title">
      {splittingTitle}
      <TitleArrow />
      <SVGGrid7Col position="hero-section__grid-above-title" />
      <SVGGrid5Col position="hero-section__grid-under-title" />
      <SVGCross
        fill="bg-geometric-fill-primary"
        size="bg-geometric-size-48"
        stroke="bg-geometric-stroke-48"
        position="hero-section__title-top-cross"
      />
      <SVGTriangle
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-56"
        stroke="bg-geometric-stroke-48"
        position="hero-section__title-left-triangle"
      />
    </h1>
  );
}
