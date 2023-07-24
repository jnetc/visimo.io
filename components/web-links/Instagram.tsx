export default function Instagram({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="Instagram" title="Instagram">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#instagram"></use>
      </svg>
    </a>
  );
}
