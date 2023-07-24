export default function Email({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="Email" title="Email">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#email"></use>
      </svg>
    </a>
  );
}
