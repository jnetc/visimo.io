import { useStore } from '@Hooks/useStore';

export default function HeroActionButton() {
  const { data } = useStore();

  return (
    <div className="hero__action">
      <button className="button button-primary">{data!.heroSection.button}</button>
    </div>
  );
}
