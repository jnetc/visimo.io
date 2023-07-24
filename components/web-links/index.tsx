import Discord from '@Components/web-links//Discord';
import Email from '@Components/web-links/Email';
import Facebook from '@Components/web-links/Facebook';
import Instagram from '@Components/web-links/Instagram';
import LinkedIn from '@Components/web-links/LinkedIn';
import TikTok from '@Components/web-links/TikTok';
import Twitter from '@Components/web-links/Twitter';
import Website from '@Components/web-links/Website';
// Types
import type { LinksType } from '@Types';

interface Props {
  urls: LinksType;
  extraClass: string;
}

export default function WebLinks({ urls, extraClass }: Props) {
  const { instagramUrl, discordUrl, twitterUrl, linkedinUrl, tiktokUrl, emailUrl, facebookUrl, websiteUrl } = urls;

  return (
    <div className={`social-buttons ${extraClass}`}>
      {instagramUrl && instagramUrl.length > 3 ? <Instagram url={instagramUrl!} /> : null}
      {discordUrl && discordUrl.length > 3 ? <Discord url={discordUrl!} /> : null}
      {twitterUrl && twitterUrl.length > 3 ? <Twitter url={twitterUrl!} /> : null}
      {linkedinUrl && linkedinUrl.length > 3 ? <LinkedIn url={linkedinUrl!} /> : null}
      {tiktokUrl && tiktokUrl.length > 3 ? <TikTok url={tiktokUrl!} /> : null}
      {facebookUrl && facebookUrl.length > 3 ? <Facebook url={facebookUrl!} /> : null}
      {websiteUrl && websiteUrl.length > 3 ? <Website url={websiteUrl!} label={websiteUrl!} /> : null}
      {emailUrl && emailUrl.length > 3 ? <Email url={emailUrl!} /> : null}
    </div>
  );
}
