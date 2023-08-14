import { useStore } from '@Hooks/useStore';
// Components
import WebLinks from '@Components/web-links';
// Hook

// Types
import type { ResponseMessageType } from '@Types';

export default function ResponseMessage({ status }: ResponseMessageType) {
  const { successMessage, errorMessage } = useStore().data!.surveySection;
  const { copyright, ...urls } = useStore().data!.footer;

  switch (status) {
    case 'success':
      return (
        <>
          <p
            className={`survey-form__center survey__response-message ${
              status === 'success' ? 'survey__show-message' : ''
            }`}
          >
            {status === 'success' ? successMessage : null}
          </p>
          <WebLinks urls={urls} containerClass="survey__social-btns" hrefClass="button default" />
        </>
      );

    case 'error':
      return (
        <p
          className={`survey-form__center survey__response-message ${
            status === 'error' ? 'survey__show-message txt-error' : ''
          }`}
        >
          {status === 'error' ? errorMessage : null}
        </p>
      );

    default:
      return null;
  }
}
