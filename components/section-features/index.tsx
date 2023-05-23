import { useStore } from '@Hooks/useStore';
// Components
import Feature from './Feature';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function FeaturesSection() {
  const { data } = useStore();

  const features = data?.featureSection.features.map((feature, idx) => {
    const order = (idx % 4) + 1;
    return <Feature key={feature.iconid} data={feature} order={order} />;
  });

  return (
    <section id="features" className="features-section main-grid">
      <span className="section-label">
        {data?.featureSection.label}
        <SVGGrid7Col position="features-section__grid-features" />
      </span>
      <h2 className="section-title">{splitTitle(data!.featureSection.title)}</h2>
      <p className="section-description">{data?.featureSection.description}</p>
      {features}
    </section>
  );
}
