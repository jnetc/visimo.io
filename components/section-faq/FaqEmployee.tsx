import { useStore } from '@Hooks/useStore';
// Components
import { SVGHeart } from '@Components/background-objects/SVGHeart';

export default function FaqEmployee() {
  const { data } = useStore();

  const avatars = data?.faqSection.avatars.map((ava, idx) => {
    return <img key={idx} src={ava.url} alt={ava.alt} />;
  });

  return (
    <div className="faqs-section__employee">
      {avatars}
      <SVGHeart position="faqs-section__svg-heart" />
    </div>
  );
}
