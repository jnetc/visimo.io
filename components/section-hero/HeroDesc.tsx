import { useStore } from '@Hooks/useStore';
// Components
import { SVGCross } from '@Components/background-objects/SVGCross';
import { SVGLetter } from '@Components/background-objects/SVGLetter';

export default function HeroDesc() {
  const { data } = useStore();
  return (
    <p className="hero-section__desc">
      {data!.heroSection.description}
      <SVGCross
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-32"
        stroke="bg-geometric-stroke-32"
        position="hero-section__desc-cross"
      />
      <SVGLetter position="hero-section__title-letter" size="size-96" />
    </p>
  );
}
