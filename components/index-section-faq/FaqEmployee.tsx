import { useStore } from '@Hooks/useStore';

export default function FaqEmployee() {
  const { data } = useStore();

  const avatars = data?.faqSection.avatars.map((ava, idx) => {
    return <img key={idx} src={ava.url} alt={ava.alt} />;
  });

  return <div className="faqs__employee">{avatars}</div>;
}
