import { useStore } from '@Hooks/useStore';
// Types
import type { ResponseMessageType } from '@Types';

export default function ResponseMessage({ status }: ResponseMessageType) {
  const { data } = useStore();

  switch (status) {
    case 'success':
      return (
        <p
          className={`survey-form__center survey__response-message ${
            status === 'success' ? 'survey__show-message txt-success' : ''
          }`}
        >
          {status === 'success' ? data?.surveySection.successMessage : null}
        </p>
      );

    case 'error':
      return (
        <p
          className={`survey-form__center survey__response-message ${
            status === 'error' ? 'survey__show-message txt-error' : ''
          }`}
        >
          {status === 'error' ? data?.surveySection.errorMessage : null}
        </p>
      );

    default:
      return null;
  }
}
