import { useStore } from '@Hooks/useStore';
// import { useRouter } from 'next/router';
// Components
import SurveyForm from './SurveyForm';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function Survey() {
  const { title, primary, secondary, description } = useStore().data!.surveySection;
  // const { push } = useRouter();

  const splittingTitle = splitTitle(title, primary, secondary);

  return (
    <section id="survey" className="section survey main-grid">
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <SurveyForm />
      {/* <button className="button" onClick={() => push('#survey')}>
        BUTTON
      </button> */}
    </section>
  );
}
