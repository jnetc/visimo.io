export default function splitTitle(title: string) {
  const isColored = new RegExp('[a-яA-Я]*:[a-z]*', 'g');

  return title.split('|').map((title, idx) => {
    if (isColored.exec(title)) {
      const [txt, color] = title.split(':');

      return (
        <strong key={idx} className={`title-${color.trim()}-color`}>
          {txt}
        </strong>
      );
    }

    return title;
  });
}
