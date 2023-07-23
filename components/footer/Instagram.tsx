export default function Instagram({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="Instagram" title="Instagram">
      <svg>
        <use xlinkHref="/images/icons.svg#instagram"></use>
      </svg>
    </a>
  );
}
