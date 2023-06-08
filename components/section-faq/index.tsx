import ReactMarkdown from 'react-markdown';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import FaqList from './FaqList';
import FaqFeedback from './FaqEmployee';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function FAQSection() {
  const { data } = useStore();
  const { title, primary, secondary, description, label, extraInfo } = data!.faqSection;
  const splittingTitle = splitTitle(title, primary, secondary);

  return (
    <section id="faqs" className="faqs-section main-grid">
      <SVGGrid7Col position="faqs-section__grid-faqs" />
      <span className="section-label">{label}</span>
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <FaqList />
      <FaqFeedback />
      <ReactMarkdown className="faqs-section__extra-info markdown" children={extraInfo} />
    </section>
  );
}
