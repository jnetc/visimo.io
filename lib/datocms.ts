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
  query MyQuery($locale: SiteLocale) {
    navigation(locale: $locale) {
      ...NavigationRecordFragment
    }
    hero(locale: $locale) {
      greatings
      hideContent
      image {
        url
      }
    }
  }

  fragment NavigationRecordFragment on NavigationRecord {
    title
    links {
      id
      name
      anchor
    }
    languages {
      id
      name
    }
    themes {
      id
      name
    }
  }
`;
