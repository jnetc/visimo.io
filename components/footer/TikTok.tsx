export default function TikTok({ url }: { url: string }) {
  return (
    <a href={url} className="footer__icon" aria-label="TikTok" title="TikTok">
      <svg>
        <use xlinkHref="/images/icons.svg#tiktok"></use>
      </svg>
    </a>
  );
}
