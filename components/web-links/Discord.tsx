export default function Discord({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="Discord"
      title="Discord"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#discord"></use>
      </svg>
    </a>
  );
}
