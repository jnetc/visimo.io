import { useStore } from '@Hooks/useStore';
// Helper
import splitTitle from '@Helpers/splitTitles';

export default function HeroTitle() {
  const { data } = useStore();

  const { title, primary, secondary } = data!.heroSection;

  const splittingTitle = splitTitle(title, primary, secondary);

  return (
    <h1 className="hero__title" data-title={title}>
      <strong className="title__strong" data-name="visimo">
        visimo
      </strong>
      <span className="title__span">{splittingTitle}</span>
    </h1>
  );
}
