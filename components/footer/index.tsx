// Conmponent
import Logo from '@Components/logo';
import FooterLinks from './FooterLinks';
// Hook
import { useStore } from '@Hooks/useStore';

export default function Footer() {
  const { copyright } = useStore().data!.footer;
  return (
    <footer className="footer">
      <Logo extraClass="footer__logo" />
      <FooterLinks />
      <p className="footer__center">{copyright}</p>
    </footer>
  );
}
