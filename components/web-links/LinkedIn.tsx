export default function LinkedIn({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="LinkedIn" title="LinkedIn">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#linkedin"></use>
      </svg>
    </a>
  );
}
