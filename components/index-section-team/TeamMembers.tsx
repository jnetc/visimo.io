import { useStore } from '@Hooks/useStore';
// Components
import TeamMember from './TeamMember';
import BigCloudFive from '@Components/SVG/BigCloudFive';
import BigCloudFour from '@Components/SVG/BigCloudFour';
import SmallCloudTwo from '@Components/SVG/SmallCloudTwo';
import SmallCloudThree from '@Components/SVG/SmallCloudThree';

export default function TeamMembers() {
  const { team } = useStore().data!.teamSection;

  const teamArr = team.map(t => {
    return <TeamMember key={t.id} data={t} />;
  });

  return (
    <div className="team-members">
      {teamArr}
      <BigCloudFive extraClass="team__big-cloud-5" />
      <BigCloudFour extraClass="team__big-cloud-4" />
      <SmallCloudTwo extraClass="team__small-cloud-2" />
      <SmallCloudThree extraClass="team__small-cloud-3" />
    </div>
  );
}
