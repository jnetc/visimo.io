import ReactMarkdown from 'react-markdown';
// Type
import type { ITestimonial } from '@Types';
export default function Testiomonial({ data }: { data: ITestimonial }) {
  return (
    <article className="testimonial retro-box">
      <span className="testimonial-icon" aria-hidden>
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0861 3.36386C23.8049 5.82477 22.0696 8.69584 21.8803 11.9771C25.203 12.1986 27.7486 14.5208 27.7486 17.94C27.7486 21.1723 25.1034 23.8084 21.8803 23.8084C17.4814 23.8084 15.8227 19.407 15.8227 15.6684C15.8227 10.0064 19.8946 3.74128 24.7198 0.902938C26.6921 -0.329757 29.0097 1.98979 27.0861 3.36386ZM11.7527 3.36386C8.47146 5.82477 6.7362 8.69584 6.5469 11.9771C9.86964 12.1986 12.4152 14.5208 12.4152 17.94C12.4152 21.1723 9.76996 23.8084 6.5469 23.8084C2.148 23.8084 0.489258 19.407 0.489258 15.6684C0.489258 10.0064 4.56123 3.74128 9.38642 0.902938C11.1573 -0.203877 13.8289 1.88082 11.7527 3.36386Z" />
        </svg>
      </span>
      <ReactMarkdown className="testimonial-text markdown" children={data.description} />
      <h3 className="testimonial-name">{data.name}</h3>
      <p className="testimonial-post">{data.post}</p>
      <img className="testimonial-avatar" src={data.avatar.url} alt={data.avatar.alt} />
    </article>
  );
}
