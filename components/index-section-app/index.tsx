import Smartphone from '@Components/smartphone';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
import SmallCloudRight from '@Components/SVG/SmallCloudRight';
// Components
import AppBackLayer from './SVG/AppBackLayer';
import Star from '../SVG/Star';

export default function AppSection() {
  return (
    <section className="section main-grid app ">
      <div className="app__container">
        <SmallCloudLeft extraClass="app__cloud-left" />
        <SmallCloudRight extraClass="app__cloud-right" />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="visics" />
        <div className="bonfire" aria-hidden></div>
        <Smartphone isApp customClass="phone-app">
          <img src="/images/screenshot.png" alt="app image" />
        </Smartphone>
        <AppBackLayer extraClass="app__back-layer" />
        <Star extraClass="app-star1" />
        <Star extraClass="app-star2" />
        <Star extraClass="app-star3" />
        <Star extraClass="app-star4" />
        <Star extraClass="app-star5" />
        <Star extraClass="app-star6" />
      </div>
    </section>
  );
}
