export default function Email({ url, hrefClass }: { url: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label="Email"
      title="Email"
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#email"></use>
      </svg>
    </a>
  );
}
