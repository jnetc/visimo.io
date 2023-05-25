import ReactMarkdown from 'react-markdown';
// Type
import type { ITestimonial } from '@Types';
export default function Testiomonial({ data }: { data: ITestimonial }) {
  return (
    <article className="testimonial">
      <span className="testimonial-icon" />
      <ReactMarkdown className="testimonial-text markdown" children={data.description} />
      <h2 className="testimonial-name">{data.name}</h2>
      <p className="testimonial-post">{data.post}</p>
      <img className="testimonial-avatar" src={data.avatar.url} alt={data.avatar.alt} />
    </article>
  );
}
