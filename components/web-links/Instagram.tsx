export default function Instagram({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="Instagram"
      title="Instagram"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#instagram"></use>
      </svg>
    </a>
  );
}
