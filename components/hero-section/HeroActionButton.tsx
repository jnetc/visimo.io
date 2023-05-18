import { useStore } from '@Hooks/useStore';
// Components
import { ActionButtonArrow } from './SVG/ActionButtonArrow';
import { SVGRectangle } from '@Components/background-objects/SVGRectangle';

export default function HeroActionButton() {
  const { data } = useStore();

  return (
    <div className="hero-section__action">
      <button className="button">{data!.heroSection.button}</button>
      <ActionButtonArrow />
      <SVGRectangle
        position="hero-section__action-rect"
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-32"
        stroke="bg-geometric-stroke-32"
      />
    </div>
  );
}
