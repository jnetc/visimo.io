import { useStore } from '@Hooks/useStore';

export default function FaqList() {
  const { data } = useStore();

  const list = data?.faqSection.faqs.map(list => {
    return (
      <li key={list.id} className="faq-section__item" tabIndex={0}>
        <h5 className="faq-section__item-title">{list.question}</h5>
        <span className="faq-section__item-icon" />
        <p className="faq-section__item-desc">{list.answer}</p>
      </li>
    );
  });

  return <ul className="faq-section__list">{list}</ul>;
}
