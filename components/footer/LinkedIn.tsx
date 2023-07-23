export default function LinkedIn({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="LinkedIn" title="LinkedIn">
      <svg>
        <use xlinkHref="/images/icons.svg#linkedin"></use>
      </svg>
    </a>
  );
}
