import { useStore } from '@Hooks/useStore';
// Components
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
import Testiomonial from './Testimonial';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function TestimonialsSection() {
  const { data } = useStore();
  const { title, primary, secondary, description, testimonials, label } = data!.testimonialSection;
  const splittingTitle = splitTitle(title, primary, secondary);

  const testimonialsArr = testimonials.map(data => {
    return <Testiomonial key={data.id} data={data} />;
  });

  return (
    <section id="testimonials" className="section testimonials main-grid">
      <SVGGrid7Col position="testimonials__grid-testimonials" />
      <span className="section-label">{label}</span>
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description testimonials-descriptions">{description}</p>
      {testimonialsArr}
    </section>
  );
}
