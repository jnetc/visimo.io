export default function Facebook({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="Facebook"
      title="Facebook"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#facebook"></use>
      </svg>
    </a>
  );
}
