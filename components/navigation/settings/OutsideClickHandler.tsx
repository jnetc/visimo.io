import { useEffect, useRef, ReactNode } from 'react';

interface OutsideClickHandlerProps {
  children: ReactNode;
  onOutsideClick: () => void;
}

export default function OutsideClickHandler({ children, onOutsideClick }: OutsideClickHandlerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [ref, onOutsideClick]);

  return (
    <div className="navigation__settings" ref={ref}>
      {children}
    </div>
  );
}
