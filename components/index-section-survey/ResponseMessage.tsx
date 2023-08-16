import { useStore } from '@Hooks/useStore';
// Components
import WebLinks from '@Components/web-links';
import BigCloudOne from '@Components/SVG/BigCloudOne';
import BigCloudTwo from '@Components/SVG/BigCloudTwo';
import SmallCloudOne from '@Components/SVG/SmallCloudOne';
import SmallCloudTwo from '@Components/SVG/SmallCloudTwo';
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
          <BigCloudOne extraClass="survey__big-cloud-one" />
          <BigCloudTwo extraClass="survey__big-cloud-two" />
          <SmallCloudOne extraClass="survey__small-cloud-one" />
          <SmallCloudTwo extraClass="survey__small-cloud-two" />
        </>
      );

    case 'error':
      return <p className="survey-form__center survey__response-message txt-error">{errorMessage}</p>;

    default:
      return null;
  }
}
