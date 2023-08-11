import Image from 'next/image';
// Components
import Smartphone from '@Components/smartphone';
import SmallCloudOne from '@Components/SVG/SmallCloudOne';
import SmallCloudTwo from '@Components/SVG/SmallCloudTwo';
import Star from '@Components/SVG/Star';
import AppBackLayer from './SVG/AppBackLayer';
import Bonfire from './Bonfire';
// Hook
import { useStore } from '@Hooks/useStore';

export default function AppSection() {
  const { image } = useStore().data!.appSection;
  return (
    <section className="section main-grid app">
      <div className="app__container">
        <SmallCloudOne extraClass="app__cloud-left" aria-hidden />
        <SmallCloudTwo extraClass="app__cloud-right" aria-hidden />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="visics" />
        <Bonfire />
        <Smartphone isApp customClass="phone-app">
          <Image
            src="/images/screen_cropped.webp"
            sizes="(max-width: 360px) 100vw, 360px"
            // src={image.url}
            // sizes={image.responsiveImage.sizes}
            alt={image.alt}
            title={image.title}
            fill
            priority
          />
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
