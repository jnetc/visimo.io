import Image from 'next/image';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// Components
import WebLinks from '@Components/web-links';
import Modal from '@Components/modal';
// Type
import type { IMember } from '@Types';

export default function TeamMember({ data }: { data: IMember }) {
  const { avatar, name, teamPosition, about, ...urls } = data;
  const [isOpen, setOpen] = useState(false);
  // const dialogRef = useRef<HTMLDivElement>(null);

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <article className="team-member" onPointerDown={openModal}>
        <div className="team-member__photo">
          <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
        </div>
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__position">{teamPosition}</p>
      </article>

      <Modal isOpen={isOpen} setOpen={setOpen} extraClass="teambox">
        <WebLinks extraClass="team-member__social-links" urls={urls} />
        <div className="team-member__dialog-photo">
          <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
        </div>
        <h3 className="team-member__dialog-name">{name}</h3>
        <p className="team-member__dialog-position">{teamPosition}</p>
        <ReactMarkdown className="team-member__dialog-about markdown" children={about} />
      </Modal>
      {/* <div role="dialog" className="team-member__dialog" ref={dialogRef} onPointerDown={outsideClick}>
        <div className="dialog-box retro-box">
          <button className="small-button btn-only-icon button-red dialog-close-btn" onPointerUp={closeModal}>
            <svg className="btn-only-icon__icon">
              <use xlinkHref="/images/icons.svg#close"></use>
            </svg>
          </button>
          <WebLinks extraClass="team-member__social-links" urls={urls} />
          <div className="team-member__dialog-photo">
            <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
          </div>
          <h3 className="team-member__dialog-name">{name}</h3>
          <p className="team-member__dialog-position">{teamPosition}</p>
          <ReactMarkdown className="team-member__dialog-about markdown" children={about} />
        </div>
      </div> */}
    </>
  );
}
