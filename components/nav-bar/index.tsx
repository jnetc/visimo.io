import Logo from './logo';
import Links from './links';
import Langs from './langs';
import Themes from './themes';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Links />
      <Langs />
      <Themes />
    </nav>
  );
}
