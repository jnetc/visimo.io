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
    teamSection(locale: $locale) {
      ...TeamSectionRecordFragment
    }
    faqSection(locale: $locale) {
      ...FaqSectionRecordFragment
    }
    testimonialSection(locale: $locale) {
      ...TestimonialSectionRecordFragment
    }
    footer(locale: $locale) {
      ...FooterRecordFragment
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
      discuss
    }
  }

  fragment SurveySectionRecordFragment on SurveySectionRecord {
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

  fragment TeamSectionRecordFragment on TeamSectionRecord {
    title
    primary
    secondary
    description
    team {
      id
      avatar {
        alt
        url
      }
      name
      teamPosition
      about
      instagramUrl
      linkedinUrl
      twitterUrl
      websiteUrl
    }
  }

  fragment FaqSectionRecordFragment on FaqSectionRecord {
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

  fragment FooterRecordFragment on FooterRecord {
    copyright
    discordUrl
    emailUrl
    instagramUrl
    linkedinUrl
    tiktokUrl
    twitterUrl
  }
`;
