export default function Facebook({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="Facebook" title="Facebook">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#facebook"></use>
      </svg>
    </a>
  );
}
