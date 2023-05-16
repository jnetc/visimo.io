import Logo from './logo';
import Links from './links/index';
import Settings from './settings';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Logo />
      <Links />
      <Settings />
    </nav>
  );
}
