import type { IFeature } from '@Types';

export default function Feature({ data, order }: { data: IFeature; order: number }) {
  return (
    <section className={`features-section__block block-order${order}`}>
      <svg className="features-section__icon">
        <use xlinkHref={`./images/sprite-icons.svg#${data.iconid}`}></use>
      </svg>
      <h3 className="features-section__title">{data.title}</h3>
      <p className="features-section__desc">{data.description}</p>
    </section>
  );
}
