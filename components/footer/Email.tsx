export default function Email({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="Email" title="Email">
      <svg>
        <use xlinkHref="/images/icons.svg#email"></use>
      </svg>
    </a>
  );
}
