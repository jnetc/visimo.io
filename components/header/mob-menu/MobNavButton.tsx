export default function MobNavButton({ handler }: { handler: (isOpen: boolean) => void }) {
  return (
    <button
      className="small-button btn-only-icon button-blue nav-bar__menu-button"
      onClick={() => handler(true)}
      aria-label="Navigation button"
      title="Navigation button"
    >
      <svg className="btn-only-icon__icon">
        <use xlinkHref="/images/icons.svg#menu"></use>
      </svg>
    </button>
  );
}
