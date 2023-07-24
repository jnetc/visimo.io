export default function Website({ url, label }: { url: string; label: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label={label} title={label}>
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#website"></use>
      </svg>
    </a>
  );
}
