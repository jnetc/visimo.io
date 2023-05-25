import { useStore } from '@Hooks/useStore';
// Components
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
import Testiomonial from './Testimonial';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function TestimonialsSection() {
  const { data } = useStore();

  const testimonials = data?.testimonialSection.testimonials.map(data => {
    return <Testiomonial key={data.id} data={data} />;
  });

  return (
    <section id="testimonials" className="testimonials-section main-grid">
      <span className="section-label">
        {data?.testimonialSection.label}
        <SVGGrid7Col position="testimonials-section__grid-testimonials" />
      </span>
      <h2 className="section-title">{splitTitle(data!.testimonialSection.title)}</h2>
      <p className="section-description testimonials-descriptions">{data?.testimonialSection.description}</p>
      {testimonials}
    </section>
  );
}
