import { useStore } from '@Hooks/useStore';
// Components
import { ActionButtonArrow } from './SVG/ActionButtonArrow';

export default function HeroActionButton() {
  const { data } = useStore();

  return (
    <div className="hero-section__action">
      <button className="button button-primary">{data!.heroSection.button}</button>
      <ActionButtonArrow />
    </div>
  );
}
