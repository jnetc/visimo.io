import { useStore } from '@Hooks/useStore';
// Components
import WebLinks from '@Components/web-links';
// Types
import type { ResponseMessageType } from '@Types';
import ParcelAndVisic from './PacelAndVisic';

export default function ResponseMessage({ status }: ResponseMessageType) {
  const { successMessage, errorMessage } = useStore().data!.surveySection;
  const { instagramUrl, facebookUrl, linkedinUrl, twitterUrl, tiktokUrl, discordUrl, emailUrl } =
    useStore().data!.footer;

  switch (status) {
    case 'success':
      return (
        <>
          <p className="survey-form__center survey__response-message">{successMessage}</p>
          <WebLinks
            urls={{ instagramUrl, facebookUrl, linkedinUrl, twitterUrl, tiktokUrl, discordUrl, emailUrl }}
            containerClass="survey__social-btns"
            hrefClass="button default"
          />
          <ParcelAndVisic />
        </>
      );

    case 'error':
      return <p className="survey-form__center survey__response-message txt-error">{errorMessage}</p>;

    default:
      return null;
  }
}
