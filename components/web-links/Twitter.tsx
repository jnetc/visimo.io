export default function Twitter({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="Twitter"
      title="Twitter"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#twitter"></use>
      </svg>
    </a>
  );
}
