export default function Twitter({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="Twitter" title="Twitter">
      <svg>
        <use xlinkHref="/images/icons.svg#twitter"></use>
      </svg>
    </a>
  );
}
