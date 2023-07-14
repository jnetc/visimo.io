import Smartphone from '@Components/smartphone';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
import SmallCloudRight from '@Components/SVG/SmallCloudRight';
// Components
import BackLayer from './SVG/BackLayer';
import Star from './SVG/Star';
// Hooks
import { useTheme } from '@Hooks/useTheme';

export default function AppSection() {
  const { isDarkTheme } = useTheme();
  return (
    <section className="section main-grid app illustration">
      <div className="app__container">
        <SmallCloudLeft extraClass="app__cloud-left" />
        <SmallCloudRight extraClass="app__cloud-right" />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="illustration visiki" />
        <div className="bonfire" aria-hidden></div>
        <Smartphone isApp customClass="phone-app">
          <img src="/images/screenshot.png" alt="app image" />
        </Smartphone>
        <BackLayer extraClass="app__back-layer" />
        {isDarkTheme === 'dark' ? <Star extraClass="app_star1" /> : null}
        {isDarkTheme === 'dark' ? <Star extraClass="app_star2" /> : null}
        {isDarkTheme === 'dark' ? <Star extraClass="app_star3" /> : null}
        {isDarkTheme === 'dark' ? <Star extraClass="app_star4" /> : null}
        {isDarkTheme === 'dark' ? <Star extraClass="app_star5" /> : null}
        {isDarkTheme === 'dark' ? <Star extraClass="app_star6" /> : null}
      </div>
    </section>
  );
}
