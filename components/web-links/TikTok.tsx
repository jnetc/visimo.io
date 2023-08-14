export default function TikTok({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="TikTok"
      title="TikTok"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#tiktok"></use>
      </svg>
    </a>
  );
}
