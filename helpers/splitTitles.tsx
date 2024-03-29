export default function splitTitle(title: string, primary: string, secondary?: string) {
  if (secondary === '' && primary === '') return null;

  // Making array without primary value
  const checkPrimary = title.toLowerCase().split(primary.toLowerCase());

  // Making array without secondary value or return last index of the checkPrimary array
  const checkSecondary = secondary ? checkPrimary[1].toString().replace(', ', '').split(secondary) : checkPrimary[1];

  // 1) Words without styles
  // 2) Words with style inside the <span> tag
  // 3) Words without styles
  // 4) If we have secondary value, styling words inside the <span> tag
  // 5) If we have words after econdary value, without styles

  return [
    checkPrimary[0],
    <span key={primary} className={`title-primary-color`}>
      {primary}
    </span>,
    secondary ? checkSecondary[0] : checkSecondary,
    secondary && (
      <span key={secondary} className={`title-secondary-color`}>
        {secondary}
      </span>
    ),
    secondary && checkSecondary[1],
  ];
}
