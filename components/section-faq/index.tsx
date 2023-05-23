import { useStore } from '@Hooks/useStore';
// Components
import FaqList from './FaqList';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function FAQSection() {
  const { data } = useStore();
  return (
    <section id="#faqs" className="faqs-section main-grid">
      <span className="section-label">
        {data?.faqSection.label}
        <SVGGrid7Col position="faqs-section__grid-faqs" />
      </span>
      <h2 className="section-title">{splitTitle(data!.faqSection.title)}</h2>
      <p className="section-description">{data?.faqSection.description}</p>
      <FaqList />
    </section>
  );
}
