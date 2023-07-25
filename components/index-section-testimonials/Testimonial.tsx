import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
// Component
import QuoteMark from './SVG/QuoteMark';
// Type
import type { ITestimonial } from '@Types';
export default function Testiomonial({ data }: { data: ITestimonial }) {
  return (
    <article className="testimonial retro-box">
      <span className="testimonial-icon" aria-hidden>
        <QuoteMark />
      </span>
      <ReactMarkdown className="testimonial-text markdown" children={data.description} />
      <h3 className="testimonial-name">{data.name}</h3>
      <p className="testimonial-post">{data.post}</p>
      <div className="testimonial-avatar">
        <Image src={data.avatar.url} alt={data.avatar.alt} fill sizes={data.avatar.responsiveImage.sizes} />
      </div>
    </article>
  );
}
