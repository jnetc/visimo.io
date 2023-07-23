import ReactMarkdown from 'react-markdown';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import FaqList from './FaqList';
import FaqFeedback from './FaqEmployee';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function FAQSection() {
  const { title, primary, secondary, description, extraInfo } = useStore().data!.faqSection;

  const splittingTitle = splitTitle(title, primary, secondary);

  return (
    <section id="faqs" className="section faqs main-grid">
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <FaqList />
      <FaqFeedback />
      <ReactMarkdown className="faqs__extra-info markdown" children={extraInfo} />
    </section>
  );
}
