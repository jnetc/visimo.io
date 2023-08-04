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
    _site(locale: $locale) {
      ...SiteFragment
    }
    heroSection(locale: $locale) {
      ...HeroSectionRecordFragment
    }
    appSection(locale: $locale) {
      ...AppSectionRecordFragment
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

  fragment SiteFragment on Site {
    globalSeo {
      fallbackSeo {
        description
        title
        twitterCard
        image {
          url
        }
      }
      siteName
      titleSuffix
      twitterAccount
      facebookPageUrl
    }
  }

  fragment HeroSectionRecordFragment on HeroSectionRecord {
    notification
    title
    primary
    secondary
    description
    surveyNotice
    buttonName
    image {
      alt
      url
      title
      responsiveImage {
        srcSet
        sizes
      }
    }
  }

  fragment AppSectionRecordFragment on AppSectionRecord {
    image {
      url
      title
      alt
      responsiveImage {
        srcSet
        sizes
      }
    }
  }

  fragment HowitworksSectionRecordFragment on HowitworksSectionRecord {
    title
    description
    primary
    secondary
    steps {
      description
      image {
        alt
        url
        title
        responsiveImage {
          srcSet
          sizes
        }
      }
    }
  }

  fragment SurveySectionRecordFragment on SurveySectionRecord {
    enableSection
    title
    primary
    secondary
    description
    questions {
      id
      title
      description
      illustrationId
      image {
        alt
        url
        title
        responsiveImage {
          srcSet
          sizes
        }
      }
    }
    attension
    buttonName
    successMessage
    errorMessage
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
        title
        responsiveImage {
          sizes
          srcSet
        }
      }
      name
      teamPosition
      about
      instagramUrl
      linkedinUrl
      twitterUrl
      facebookUrl
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
      alt
      url
      title
      responsiveImage {
        sizes
        srcSet
      }
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
        alt
        url
        title
        responsiveImage {
          sizes
          srcSet
        }
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
