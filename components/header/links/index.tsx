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

  return <nav className="header__links">{links}</nav>;
}
