import { useStore } from '@Hooks/useStore';
// Components
import SurveyForm from './SurveyForm';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function Survey() {
  const { title, primary, secondary, description, enableSection } = useStore().data!.surveySection;

  const splittingTitle = splitTitle(title, primary, secondary);

  if (!enableSection) {
    localStorage.removeItem('survey');
  }

  return enableSection ? (
    <section id="survey" className="section survey main-grid">
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <SurveyForm />
    </section>
  ) : null;
}
