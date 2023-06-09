import { useStore } from '@Hooks/useStore';
// Components
import Feature from './Feature';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function FeaturesSection() {
  const { data } = useStore();
  const { title, primary, secondary, description, features } = data!.featureSection;
  const splittingTitle = splitTitle(title, primary, secondary);

  const featuresArr = features.map((feature, idx) => {
    const order = (idx % 4) + 1;
    return <Feature key={feature.iconid} data={feature} order={order} />;
  });

  return (
    <section id="features" className="section features main-grid">
      <SVGGrid7Col position="features__grid-features" />
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      {featuresArr}
    </section>
  );
}
