import { useStore } from '@Hooks/useStore';
// Components
import { SVGCross } from '@Components/background-objects/SVGCross';
import { SVGTriangle } from '@Components/background-objects/SVGTriangle';

export default function FaqEmployee() {
  const { data } = useStore();

  const avatars = data?.faqSection.avatars.map((ava, idx) => {
    return <img key={idx} src={ava.url} alt={ava.alt} />;
  });

  return (
    <div className="faqs-section__employee">
      {avatars}
      <SVGCross
        fill="bg-geometric-fill-secondary"
        size="bg-geometric-size-40"
        stroke="bg-geometric-stroke-48"
        position="faqs-section__left-cross"
      />
      <SVGTriangle
        fill="bg-geometric-fill-primary"
        size="bg-geometric-size-32"
        stroke="bg-geometric-stroke-32"
        position="faqs-section__right-triangle"
      />
    </div>
  );
}
