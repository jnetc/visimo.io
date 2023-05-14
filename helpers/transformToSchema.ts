// Types
import type { DataType, Employees } from '@Types';

export function createSchema(data: DataType) {
  const employees = new Set<Employees>();

  for (const team of data.whatweoffer.services) {
    for (const member of team.teammates) {
      const obj = {
        '@type': 'Person',
        name: member.title,
        jobTitle: member.proff,
        description: member.description,
        image: member.avatar.url,
      };
      employees.add(obj);
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TimaMih Tmi',
    url: 'https://www.timamih.com',
    logo: 'https://www.timamih.com/icons/icon-512x512.png',
    slogan: data.heroSection.title.replaceAll(',', ''),
    telephone: '+358453491091',
    sameAs: ['tg://resolve?domain=timamih_com', 'https://wa.me/358453491091', 'https://www.instagram.com/timamih_mainostoimisto'],

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hitsaajankatu 6',
      addressLocality: 'Helsinki',
      addressRegion: 'Uusimaa',
      postalCode: '00810',
      addressCountry: 'Finland',
    },

    openingHours: ['Mo-Su 10:00-20:00'],
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    priceRange: '50€ - 1900€',

    aggregateRating: {
      '@type': 'AggregateRating',
      bestRating: '5.0',
      ratingValue: '4.9',
      worstRating: '1.0',
      reviewCount: '7',
    },

    image: [
      'https://timamih.com/images/1x1/logo.png',
      'https://timamih.com/images/4x3/logo.png',
      'https://timamih.com/images/16x9/logo.png',
    ],

    employees: [...Array.from(employees)],
  };
  return schema;
}
