export default function Website({ url, label, hrefClass }: { url: string; label: string; hrefClass?: string }) {
  return (
    <a
      href={url}
      className={`${hrefClass ? `social-button__icon ${hrefClass}` : 'social-button__icon'}`}
      aria-label={label}
      title={label}
    >
      <svg aria-hidden>
        <use xlinkHref="/images/icons.svg#website"></use>
      </svg>
    </a>
  );
}
