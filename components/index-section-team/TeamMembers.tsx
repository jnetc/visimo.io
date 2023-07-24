import { useStore } from '@Hooks/useStore';
// Components
import TeamMember from './TeamMember';

export default function TeamMembers() {
  const { team } = useStore().data!.teamSection;

  const teamArr = team.map(t => {
    return <TeamMember key={t.id} data={t} />;
  });

  return <div className="team-members">{teamArr}</div>;
}
