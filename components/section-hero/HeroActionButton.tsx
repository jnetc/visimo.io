import { useStore } from '@Hooks/useStore';

export default function HeroActionButton() {
  const { data } = useStore();

  return <button className="button button-primary hero__action">{data!.heroSection.button}</button>;
}
