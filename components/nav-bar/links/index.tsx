import Link from 'next/link';

// Hooks
import { useStore } from '@Hooks/useStore';

export default function Links() {
  const { data } = useStore();

  const links = data?.navigation.links.map(link => {
    return (
      <Link key={link.id} href={link.anchor}>
        {link.name}
      </Link>
    );
  });

  return (
    <nav aria-label="desktop-navigation" className="nav-bar__links">
      {links}
    </nav>
  );
}
