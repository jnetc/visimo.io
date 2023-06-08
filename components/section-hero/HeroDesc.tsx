import { useStore } from '@Hooks/useStore';

export default function HeroDesc() {
  const { data } = useStore();
  return <p className="hero-section__desc">{data!.heroSection.description}</p>;
}
