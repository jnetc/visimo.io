import Image from 'next/image';
// Components
import Smartphone from '@Components/smartphone';
import SmallCloudLeft from '@Components/SVG/SmallCloudLeft';
import SmallCloudRight from '@Components/SVG/SmallCloudRight';
import Star from '@Components/SVG/Star';
import AppBackLayer from './SVG/AppBackLayer';
import Bonfire from './Bonfire';

export default function AppSection() {
  return (
    <section className="section main-grid app">
      <div className="app__container">
        <SmallCloudLeft extraClass="app__cloud-left" aria-hidden />
        <SmallCloudRight extraClass="app__cloud-right" aria-hidden />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="visics" />
        <Bonfire />
        <Smartphone isApp customClass="phone-app">
          <Image src="/images/screenshot.webp" alt="template" fill sizes="(max-width: 438px) 100vw, 438px" priority />
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
