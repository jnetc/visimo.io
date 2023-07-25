import { useStore } from '@Hooks/useStore';
import Image from 'next/image';

export default function FaqEmployee() {
  const { avatars } = useStore().data!.faqSection;

  const avatarsArr = avatars.map((ava, idx) => {
    return (
      <div className="faqs-avatar" key={idx}>
        <Image src={ava.url} alt={ava.alt} sizes={ava.responsiveImage.sizes} fill />
      </div>
      // <img
      //   key={idx}
      //   src={ava.url}
      //   alt={ava.alt}
      //   sizes={ava.responsiveImage.sizes}
      //   srcSet={ava.responsiveImage.srcSet}
      // />
    );
  });

  return <div className="faqs__employee">{avatarsArr}</div>;
}
