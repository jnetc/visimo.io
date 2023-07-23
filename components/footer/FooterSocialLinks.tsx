import { useStore } from '@Hooks/useStore';
// Components
import Instagram from './Instagram';
import Discord from './Discord';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import TikTok from './TikTok';
import Email from './Email';

export default function FooterSocialLinks() {
  const { instagramUrl, discordUrl, twitterUrl, linkedinUrl, tiktokUrl, emailUrl } = useStore().data!.footer;

  return (
    <div className="footer__social-links">
      {instagramUrl.length > 0 ? <Instagram url={instagramUrl} /> : null}
      {discordUrl.length > 0 ? <Discord url={discordUrl} /> : null}
      {twitterUrl.length > 0 ? <Twitter url={twitterUrl} /> : null}
      {linkedinUrl.length > 0 ? <LinkedIn url={linkedinUrl} /> : null}
      {tiktokUrl.length > 0 ? <TikTok url={tiktokUrl} /> : null}
      {emailUrl.length > 0 ? <Email url={emailUrl} /> : null}
    </div>
  );
}
