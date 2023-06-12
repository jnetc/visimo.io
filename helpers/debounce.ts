export default function debounce<T extends string[]>(func: (...args: T) => void, delay: number) {
  let timer: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
