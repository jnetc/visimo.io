import { useStore } from '@Hooks/useStore';
// Components
import Steps from './Steps';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function HowItWorksSection() {
  const { title, primary, secondary, description } = useStore().data!.howitworksSection;

  const splittingTitle = splitTitle(title, primary, secondary);
  return (
    <section id="howitworks" className="section main-grid steps">
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <Steps />
    </section>
  );
}
