// Conmponent
import Logo from '@Components/logo';
import FooterSocialLinks from './FooterSocialLinks';
import FooterTermsLinks from './FooterTermsLinks';
// Hook
import { useStore } from '@Hooks/useStore';

export default function Footer() {
  const { copyright } = useStore().data!.footer;
  return (
    <footer className="footer">
      {/* <Logo extraClass="footer__logo" /> */}
      {/* <p className="footer__logo">Follow us</p> */}
      <FooterSocialLinks />
      <p className="footer__center">{copyright}</p>
      <FooterTermsLinks />
    </footer>
  );
}
