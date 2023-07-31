import Link from 'next/link';
import { useRouter } from 'next/router';
// Component
import WorldLink from './SVG/WorldLink';
// Types
import { LanguagesType } from '@Types';
// Langs
import linksHome from '@Langs/navigation-home';
import linksWorld from '@Langs/navigation-world';

export default function Links() {
  const router = useRouter();

  const links = selectLinks(router.asPath);

  const linksArr = links.map(link => {
    return (
      <Link key={link.id} href={link.anchor} aria-label={link.label[router.locale as LanguagesType]}>
        {link.anchor.match('/') ? <WorldLink /> : link.name[router.locale as LanguagesType]}
      </Link>
    );
  });

  return (
    <nav aria-label="desktop-navigation" className="nav-bar__links">
      {linksArr}
    </nav>
  );
}

export function selectLinks(route: string) {
  switch (route) {
    case '/world':
      return linksWorld;
    default:
      return linksHome;
  }
}
