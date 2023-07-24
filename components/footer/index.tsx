// Conmponent
import FooterSocialLinks from './FooterSocialLinks';
import FooterTermsLinks from './FooterTermsLinks';
// Hook
import { useStore } from '@Hooks/useStore';

export default function Footer() {
  const { copyright } = useStore().data!.footer;
  return (
    <footer className="footer">
      <FooterSocialLinks />
      <p className="footer__center">{copyright}</p>
      <FooterTermsLinks />
    </footer>
  );
}
