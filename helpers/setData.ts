export default function setData() {
  const date = new Date();
  return new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
}
