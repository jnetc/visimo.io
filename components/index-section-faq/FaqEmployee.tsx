import { useStore } from '@Hooks/useStore';

export default function FaqEmployee() {
  const { avatars } = useStore().data!.faqSection;

  const avatarsArr = avatars.map((ava, idx) => {
    return <img key={idx} src={ava.url} alt={ava.alt} />;
  });

  return <div className="faqs__employee">{avatarsArr}</div>;
}
