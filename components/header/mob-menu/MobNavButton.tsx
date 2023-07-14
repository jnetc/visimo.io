export default function MobNavButton({ handler }: { handler: (isOpen: boolean) => void }) {
  return (
    <button
      className="nav-button nav-button-48 nav-bar__menu-button"
      onClick={() => handler(true)}
      aria-label="Navigation button"
      title="Navigation button"
    >
      <svg className="nav-bar__icon">
        <use xlinkHref="/images/icons.svg#menu"></use>
      </svg>
    </button>
  );
}
