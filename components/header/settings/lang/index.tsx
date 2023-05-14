import { useRouter } from 'next/router';

// Hooks
import { useStore } from '@Hooks/useStore';
import { LangButton } from './link';

export default function Langs() {
  const { asPath } = useRouter();
  const { languages } = useStore();

  const langButtons = languages.map(order => {
    return <LangButton key={order} path={asPath} lang={order} />;
  });

  return (
    <fieldset className="themes">
      <legend>Select theme</legend>
      {langButtons}
      <label htmlFor="light" className="theme__select">
        <input type="radio" name="theme" id="light" />
        {/* <label htmlFor="light">light</label> */}
        <p>Suomi</p>
      </label>
      <label htmlFor="dark" className="theme__select">
        <input type="radio" name="theme" id="dark" />
        <p>Русский</p>
        {/* <label htmlFor="dark">dark</label> */}
      </label>
      <label htmlFor="auto" className="theme__select">
        <input type="radio" name="theme" id="auto" />
        {/* <label htmlFor="auto">auto</label> */}
        <p>English</p>
      </label>
    </fieldset>
  );
}
