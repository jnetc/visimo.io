export default function Discord({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="Discord" title="Discord">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#discord"></use>
      </svg>
    </a>
  );
}
