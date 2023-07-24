import { useEffect } from 'react';

/**
 * Hook для отслеживания кликов вне заданного элемента.
 * @param {React.RefObject<HTMLElement>} ref - Ссылка на элемент, за пределами которого нужно отслеживать клики.
 * @param {Function} onClickOutside - Обработчик для вызова при клике вне элемента.
 * @param {boolean} active - Флаг, указывающий, активен ли хук.
 */
const useOutsideClick = (ref: React.RefObject<HTMLElement>, onClickOutside: () => void, active: boolean = true) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    if (active) {
      document.addEventListener('mousedown', handleClickOutside, true);
    } else {
      document.removeEventListener('mousedown', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref, onClickOutside, active]);
};

export default useOutsideClick;
