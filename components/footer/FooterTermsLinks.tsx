// import { useStore } from '@Hooks/useStore';
// Components

export default function FooterTermsLinks() {
  // const { instagramUrl, discordUrl, twitterUrl, linkedinUrl, tiktokUrl, emailUrl } = useStore().data!.footer;

  return (
    <div className="footer__terms-links">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>
  );
}
