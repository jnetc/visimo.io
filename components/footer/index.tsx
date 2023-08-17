// Conmponent
import WebLinks from '@Components/web-links';
import FooterTermsLinks from './FooterTermsLinks';
// Hook
import { useStore } from '@Hooks/useStore';

export default function Footer() {
  const { copyright, ...urls } = useStore().data!.footer;
  return (
    <footer className="footer">
      <WebLinks containerClass="footer__social-links" urls={urls} />
      <p className="footer__center">{copyright}</p>
      <FooterTermsLinks />
    </footer>
  );
}
