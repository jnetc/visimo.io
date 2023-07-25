import Image from 'next/image';
import { useRef, PointerEvent } from 'react';
import ReactMarkdown from 'react-markdown';
// Components
import WebLinks from '@Components/web-links';
// Type
import type { IMember } from '@Types';

export default function TeamMember({ data }: { data: IMember }) {
  const { avatar, name, teamPosition, about, ...urls } = data;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.setAttribute('closing', '');
    dialogRef.current?.addEventListener('animationend', fadeOut, { once: true });
    dialogRef.current?.removeEventListener('animationend', () => {});
  }

  function outsideClick(event: PointerEvent<HTMLDialogElement>) {
    const el = (event.target as HTMLDivElement).nodeName;

    if (el === 'DIALOG') {
      closeModal();
    }
  }

  function fadeOut() {
    dialogRef.current?.removeAttribute('closing');
    dialogRef.current?.close();
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

      <dialog className="team-member__dialog" ref={dialogRef} onPointerDown={outsideClick}>
        <div className="team-member__dialog-card retro-box" ref={divRef}>
          <div className="team-member__dialog-btns">
            <WebLinks extraClass="team-member__social-links" urls={urls} />
            <button className="small-button btn-only-icon button-red" onPointerUp={closeModal}>
              <svg className="btn-only-icon__icon">
                <use xlinkHref="/images/icons.svg#close"></use>
              </svg>
            </button>
          </div>
          <div className="team-member__dialog-photo">
            <Image src={avatar.url} alt={avatar.alt} fill sizes={avatar.responsiveImage.sizes} />
          </div>
          <h3 className="team-member__dialog-name">{name}</h3>
          <p className="team-member__dialog-position">{teamPosition}</p>
          <ReactMarkdown className="team-member__dialog-about markdown" children={about} />
        </div>
      </dialog>
    </>
  );
}
