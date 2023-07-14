import { useStore } from '@Hooks/useStore';
// Component
import Step from './Step';

export default function Steps() {
  const { data } = useStore();
  const { steps } = data!.howitworksSection;

  const stepArr = steps.map((s, idx) => <Step key={idx} description={s.description} id={idx + 1} />);

  return <div className="steps__container">{stepArr}</div>;
}
