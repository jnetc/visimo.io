import Logo from './logo';
import Links from './links/index';
import Settings from './settings';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Links />
      <Settings />
    </header>
  );
}
