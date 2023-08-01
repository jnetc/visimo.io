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

  function openModal() {
    // setOpen(true);
  }

  return (
    <>
      <article className="team-member">
        <button className="team-member__backdrop" onPointerDown={openModal}></button>
        <div className="team-member__photo">
          <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
        </div>
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__position">{teamPosition}</p>
        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-triangle">
          <path d="M 10,10 140,60 Q145,62 150,60 Q150,60 290,10 Z" />
        </svg> */}
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
    </>
  );
}
