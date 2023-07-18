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
        <SmallCloudLeft extraClass="app__cloud-left" aria-hidden />
        <SmallCloudRight extraClass="app__cloud-right" aria-hidden />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="visics" />
        <div className="app__bonfire-container" aria-hidden>
          <div className="app__bonfire">
            <img src="/images/svg/bonfire-1.svg" alt="bonfire" className="animated-bonfire" />
            <img src="/images/svg/bonfire-2.svg" alt="bonfire" className="animated-bonfire" />
            <img src="/images/svg/bonfire-3.svg" alt="bonfire" className="animated-bonfire" />
            <img src="/images/svg/bonfire-4.svg" alt="bonfire" className="animated-bonfire" />
            <img src="/images/svg/bonfire-5.svg" alt="bonfire" className="animated-bonfire" />
          </div>
        </div>
        <Smartphone isApp customClass="phone-app">
          <img src="/images/screenshot.png" alt="app image" />
        </Smartphone>
        <AppBackLayer extraClass="app__back-layer" aria-hidden />
        <Star extraClass="app-star1" aria-hidden />
        <Star extraClass="app-star2" aria-hidden />
        <Star extraClass="app-star3" aria-hidden />
        <Star extraClass="app-star4" aria-hidden />
        <Star extraClass="app-star5" aria-hidden />
        <Star extraClass="app-star6" aria-hidden />
      </div>
    </section>
  );
}
