import { useEffect, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (
  targetRef: React.RefObject<Element>,
  options?: IntersectionObserverOptions
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverOptions = {
      root: options?.root || null,
      rootMargin: options?.rootMargin || '0px',
      threshold: options?.threshold || 0,
    };

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    }, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
};
