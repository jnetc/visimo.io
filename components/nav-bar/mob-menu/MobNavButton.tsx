import { useStore } from '@Hooks/useStore';

export default function MobNavButton({ handler }: { handler: (isOpen: boolean) => void }) {
  const { language } = useStore();

  return (
    <button
      className="nav-button nav-button-48 nav-bar__menu-button"
      onClick={() => handler(true)}
      aria-label={locale[language]}
      title={locale[language]}
    >
      <svg className="nav-bar__icon">
        <use xlinkHref="/images/icons.svg#menu"></use>
      </svg>
    </button>
  );
}

const locale = {
  en: 'Navigation button',
  ru: 'Кнопка навигации',
  fi: 'Navigointipainike',
};
