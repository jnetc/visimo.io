export default function TikTok({ url }: { url: string }) {
  return (
    <a href={url} className="social-button__icon" aria-label="TikTok" title="TikTok">
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#tiktok"></use>
      </svg>
    </a>
  );
}
