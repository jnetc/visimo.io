import { useStore } from '@Hooks/useStore';
// Component
import StepIllustration from './StepIllustration';
import StepPreview from './StepPreview';

export default function Steps() {
  const { steps } = useStore().data!.howitworksSection;

  const stepArr = steps.map((s, idx) => (
    <div key={idx} className={`step-${idx}`}>
      <StepIllustration data={s} id={idx + 1} />
      <StepPreview />
    </div>
  ));

  return <div className="steps__container">{stepArr}</div>;
}
