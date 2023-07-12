import Smartphone from '@Components/smartphone';
// Hook
import { useStore } from '@Hooks/useStore';

export default function AppSection() {
  const { isDarkTheme } = useStore();
  return (
    <section className="section main-grid app">
      <div className="app__container">
        <img
          className="app__cloud-left"
          src={`/images/svg/${isDarkTheme}/small-cloud-left.svg`}
          alt="cloud"
          aria-hidden
        />
        <img
          className="app__cloud-right"
          src={`/images/svg/${isDarkTheme}/small-cloud-right.svg`}
          alt="cloud"
          aria-hidden
        />
        <img className="app__front-layer" src="/images/svg/app-front-layer.svg" alt="illustration visiki" />
        <div className="bonfire" aria-hidden></div>
        <Smartphone customClass="phone-app">
          <img src="/images/screenshot.png" alt="app image" />
        </Smartphone>
        <img
          className="app__back-layer"
          src={`/images/svg/${isDarkTheme}/app-back-layer.svg`}
          alt="illustration wood"
          aria-hidden
        />
      </div>
    </section>
  );
}
