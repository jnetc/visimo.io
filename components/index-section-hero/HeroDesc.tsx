import { useStore } from '@Hooks/useStore';

export default function HeroDesc() {
  const { description } = useStore().data!.heroSection;
  return <p className="hero__desc">{description}</p>;
}
