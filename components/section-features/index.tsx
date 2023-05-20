import { useStore } from '@Hooks/useStore';
// Components
import Feature from './Feature';

export default function FeaturesSection() {
  const { data } = useStore();

  const splittingTitle = data!.featureSection.title.split(',').map((title, idx, arr) => {
    if (arr.at(0) === title)
      return (
        <strong key={idx} className="title-yellow-color">
          {title}
        </strong>
      );

    if (arr.at(-1) === title)
      return (
        <strong key={idx} className="title-blue-color">
          {title}
        </strong>
      );

    return title;
  });

  const features = data?.featureSection.features.map((feature, idx) => {
    const order = (idx % 4) + 1;
    return <Feature key={feature.iconid} data={feature} order={order} />;
  });

  return (
    <section id="features" className="features-section main-grid">
      <span className="section-label">{data?.featureSection.label}</span>
      <h2 className="section-title">{splittingTitle}</h2>
      <p className="section-description">{data?.featureSection.description}</p>
      {features}
    </section>
  );
}
