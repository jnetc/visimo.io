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
    featureSection(locale: $locale) {
      ...FeatureSectionRecordFragment
    }
    faqSection(locale: $locale) {
      ...FaqSectionRecordFragment
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
    title
    description
    button
  }

  fragment FeatureSectionRecordFragment on FeatureSectionRecord {
    label
    title
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
    description
    faqs {
      id
      question
      answer
    }
    avatars {
      url
      alt
    }
    extraInfo
  }
`;
