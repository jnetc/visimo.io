import { useStore } from '@Hooks/useStore';
// Components
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
import { TitleArrow } from './SVG/TitleArrow';
import { SVGHeart } from '@Components/background-objects/SVGHeart';
// Helper
import splitTitle from '@Helpers/splitTitles';

export default function HeroTitle() {
  const { data } = useStore();

  const { title, primary, secondary } = data!.heroSection;

  const splittingTitle = splitTitle(title, primary, secondary);
  return (
    <h1 className="hero-section__title" data-title={title}>
      <SVGHeart position="hero-section__svg-heart" />
      {splittingTitle}
      <TitleArrow />
      <SVGGrid7Col position="hero-section__svg-grid" />
    </h1>
  );
}
