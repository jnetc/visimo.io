import { useStore } from '@Hooks/useStore';
// Components
import SendPlane from './SVG/SendPlane';

export default function SendButton({ isSelectedAll }: { isSelectedAll: boolean }) {
  const { data } = useStore();

  return (
    <div className="survey-form__center">
      <p className={`send-button__notice ${isSelectedAll && 'hide'}`}>{data?.surveySection.attension}</p>
      <div className="survey__send-button">
        <button
          type="submit"
          className={`button ${isSelectedAll ? 'button-yellow' : 'disabled'}`}
          aria-disabled={!isSelectedAll}
        >
          {data?.surveySection.buttonName}
        </button>
        {isSelectedAll ? <SendPlane /> : null}
      </div>
    </div>
  );
}
