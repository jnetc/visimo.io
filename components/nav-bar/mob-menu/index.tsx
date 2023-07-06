import Link from 'next/link';

// Hooks
import { useStore } from '@Hooks/useStore';

interface Props {
  handler: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function MobMenu({ handler, isOpen }: Props) {
  const { data } = useStore();

  const links = data?.navigation.links.map(link => {
    return (
      <li key={link.id}>
        <Link href={link.anchor} onClick={() => handler(false)}>
          {link.name}
        </Link>
      </li>
    );
  });

  return (
    <nav aria-label="mobile-navigation" className={`nav-bar__links-mob ${isOpen && 'show'}`}>
      <button className="nav-button nav-button-48 nav-bar__menu-button-close" onClick={() => handler(false)}>
        <svg className="nav-bar__icon">
          <use xlinkHref="/images/icons.svg#close"></use>
        </svg>
      </button>
      <ul className="links-mob__list">{links}</ul>
    </nav>
  );
}
