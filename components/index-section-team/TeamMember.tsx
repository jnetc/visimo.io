import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
// Type
import type { IMember } from '@Types';

export default function TeamMember({ data }: { data: IMember }) {
  return (
    <>
      <article className="team-member">
        <div className="team-member__photo">
          <Image src={data.avatar.url} alt={data.avatar.alt} fill={true} sizes="(max-width: 201px) 100vw, 201px" />
        </div>
        <h3 className="team-member__name">{data.name}</h3>
        <p className="team-member__position">{data.teamPosition}</p>
        <dialog className="team-member__dialog" open>
          <div className="team-member__dialog-card retro-box">
            <div className="team-member__dialog-btns">
              <button className="small-button btn-only-icon button-red">
                <svg className="btn-only-icon__icon">
                  <use xlinkHref="/images/icons.svg#close"></use>
                </svg>
              </button>
            </div>
            <div className="team-member__photo">
              <Image src={data.avatar.url} alt={data.avatar.alt} fill={true} sizes="(max-width: 201px) 100vw, 201px" />
            </div>

            <h3 className="team-member__dialog-name">{data.name}</h3>
            <p className="team-member__dialog-position">{data.teamPosition}</p>
            <ReactMarkdown className="team-member__dialog-about markdown" children={data.about} />
          </div>
        </dialog>
      </article>
    </>
  );
}
