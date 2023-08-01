import { useRef, PointerEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
  extraClass: string;
}

export default function Modal({ children, isOpen, setOpen, extraClass }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (isOpen) {
    dialogRef.current?.setAttribute('open', '');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal() {
    dialogRef.current?.setAttribute('closing', '');
    dialogRef.current?.addEventListener('animationend', fadeOut, { once: true });
    dialogRef.current?.removeEventListener('animationend', () => {});
    setOpen(false);
    document.documentElement.removeAttribute('style');
  }

  function outsideClick(event: PointerEvent<HTMLDivElement>) {
    const el = (event.target as HTMLDivElement).hasAttribute('open');
    if (!el) return;
    closeModal();
  }

  function fadeOut() {
    dialogRef.current?.removeAttribute('closing');
    dialogRef.current?.removeAttribute('open');
  }
  return (
    <div role="dialog" ref={dialogRef} onPointerDown={outsideClick}>
      <div className={`${extraClass} retro-box`}>
        <button className="small-button btn-only-icon button-red dialog-close-btn" onPointerUp={closeModal}>
          <svg className="btn-only-icon__icon">
            <use xlinkHref="/images/icons.svg#close"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
