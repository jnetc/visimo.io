import Logo from './logo';
import Links from './links/index';
import Settings from './settings';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Links />
      <Settings />
    </nav>
  );
}
