import { useStore } from '@Hooks/useStore';
// Components
import SurveyForm from './SurveyForm';
import { SVGGrid7Col } from '@Components/background-objects/SVGGrid7Col';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function Survey() {
  const { data } = useStore();
  const { title, primary, secondary, description, label } = data!.surveySection;
  const splittingTitle = splitTitle(title, primary, secondary);

  return (
    <section id="survey" className="section survey main-grid">
      <SVGGrid7Col position="survey__grid-survey" />
      <span className="section-label">{label}</span>
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <SurveyForm />
    </section>
  );
}
