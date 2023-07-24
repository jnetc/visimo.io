import Link from 'next/link';
// Conmponent
import Logotip from '@Components/SVG/Logotip';

export default function Logo({ extraClass }: { extraClass: string }) {
  return (
    <Link href="/" className={extraClass} aria-label="Visimo free app">
      <Logotip />
    </Link>
  );
}
