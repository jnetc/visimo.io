export default function Twitter({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="Twitter" title="Twitter">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#twitter"></use>
      </svg>
    </a>
  );
}
