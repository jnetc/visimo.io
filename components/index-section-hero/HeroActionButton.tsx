import { useStore } from '@Hooks/useStore';

export default function HeroActionButton() {
  const { data } = useStore();

  return (
    <a href="#survey" className="button button-yellow hero__action">
      {data!.heroSection.buttonName}
    </a>
  );
}
