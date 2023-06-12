import type { IFeature } from '@Types';

export default function Feature({ data, order }: { data: IFeature; order: number }) {
  return (
    <section className={`features__block block-order${order}`}>
      <svg className="features__icon">
        <use xlinkHref={`./images/sprite-icons.svg#${data.iconid}`}></use>
      </svg>
      <h3 className="features__title">{data.title}</h3>
      <p className="features__desc">{data.description}</p>
    </section>
  );
}
