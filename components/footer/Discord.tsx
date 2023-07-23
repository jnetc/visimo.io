export default function Discord({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="Discord" title="Discord">
      <svg>
        <use xlinkHref="/images/icons.svg#discord"></use>
      </svg>
    </a>
  );
}
