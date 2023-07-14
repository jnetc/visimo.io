import { GraphQLClient, gql } from 'graphql-request';

interface Data {
  greatings: string;
  hideContent: boolean;
  image: {
    url: string;
  };
}

export async function request({ query, variables }: { query: string; variables: {} }): Promise<Data> {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return await client.request(query, variables);
}

export const query = gql`
  query ($locale: SiteLocale) {
    navigation(locale: $locale) {
      ...NavigationRecordFragment
    }
    heroSection(locale: $locale) {
      ...HeroSectionRecordFragment
    }
    howitworksSection(locale: $locale) {
      ...HowitworksSectionRecordFragment
    }
    surveySection(locale: $locale) {
      ...SurveySectionRecordFragment
    }
    featureSection(locale: $locale) {
      ...FeatureSectionRecordFragment
    }
    faqSection(locale: $locale) {
      ...FaqSectionRecordFragment
    }
    testimonialSection(locale: $locale) {
      ...TestimonialSectionRecordFragment
    }
  }

  fragment NavigationRecordFragment on NavigationRecord {
    links {
      id
      name
      anchor
    }
  }

  fragment HeroSectionRecordFragment on HeroSectionRecord {
    notification
    title
    primary
    secondary
    description
    surveyNotice
    button
  }

  fragment HowitworksSectionRecordFragment on HowitworksSectionRecord {
    title
    description
    primary
    secondary
    steps {
      description
    }
  }

  fragment SurveySectionRecordFragment on SurveySectionRecord {
    label
    title
    primary
    secondary
    description
    questions {
      id
      title
      description
      illustrationId
    }
    surveyCompleted
  }

  fragment FeatureSectionRecordFragment on FeatureSectionRecord {
    label
    title
    primary
    secondary
    description
    features {
      title
      description
      iconid
    }
  }

  fragment FaqSectionRecordFragment on FaqSectionRecord {
    label
    title
    primary
    secondary
    description
    faqs {
      id
      question
      answer
    }
    avatars {
      id
      url
      alt
    }
    extraInfo
  }

  fragment TestimonialSectionRecordFragment on TestimonialSectionRecord {
    label
    title
    primary
    secondary
    description
    testimonials {
      id
      name
      post
      description
      avatar {
        url
        alt
      }
    }
  }
`;
