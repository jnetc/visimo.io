export default function LinkedIn({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#linkedin"></use>
      </svg>
    </a>
  );
}
