import { useStore } from '@Hooks/useStore';
// Component
import TeamMembers from './TeamMembers';
// Helpers
import splitTitle from '@Helpers/splitTitles';

export default function SectionTeam() {
  const { title, primary, secondary, description } = useStore().data!.teamSection;
  const splittingTitle = splitTitle(title, primary, secondary);
  return (
    <section id="team" className="section team main-grid">
      <h2 className="section-title" data-title={title}>
        {splittingTitle}
      </h2>
      <p className="section-description">{description}</p>
      <TeamMembers />
    </section>
  );
}
