import Smartphone from '@Components/smartphone';

export default function AppSection() {
  return (
    <section className="section main-grid app">
      <div className="app__container">
        <img className="app__cloud-left" src="/images/svg/small-cloud1.svg" alt="cloud" aria-hidden />
        <img className="app__cloud-right" src="/images/svg/small-cloud2.svg" alt="cloud" aria-hidden />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="illustration visiki" />
        <div className="bonfire" aria-hidden></div>
        <Smartphone customClass="phone-app">
          <img src="/images/screenshot.png" alt="app image" />
        </Smartphone>
        <img className="app__back-layer" src="/images/svg/app-back-layer.svg" alt="illustration wood" aria-hidden />
      </div>
    </section>
  );
}
