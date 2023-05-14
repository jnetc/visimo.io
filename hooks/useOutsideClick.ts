import { useEffect, RefObject } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = e.target as Element;
      console.log(el);

      if (ref.current && !ref.current.contains(el)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
};
