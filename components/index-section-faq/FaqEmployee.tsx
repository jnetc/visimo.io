import { useStore } from '@Hooks/useStore';
// Components
import { SVGHeart } from '@Components/background-objects/SVGHeart';

export default function FaqEmployee() {
  const { data } = useStore();

  const avatars = data?.faqSection.avatars.map((ava, idx) => {
    return <img key={idx} src={ava.url} alt={ava.alt} />;
  });

  return (
    <div className="faqs__employee">
      {avatars}
      <SVGHeart position="faqs__svg-heart" />
    </div>
  );
}
