import Image from 'next/image';
// Type
import type { IMember } from '@Types';

interface Props {
  data: Omit<IMember, 'id' | 'about'>;
  callback: () => void;
}

export default function TeamArticle({ data, callback }: Props) {
  const { avatar, name, teamPosition } = data;
  return (
    <article className="team-member">
      <button className="team-member__backdrop" onPointerDown={callback}></button>
      <div className="team-member__photo">
        <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
      </div>
      <h3 className="team-member__name">{name}</h3>
      <p className="team-member__position">{teamPosition}</p>
    </article>
  );
}
