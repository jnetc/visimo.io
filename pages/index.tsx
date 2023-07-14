import dynamic from 'next/dynamic';
import Head from 'next/head';

// import { createSchema } from '@Helpers/transformToSchema';

import { request, query } from 'lib/datocms';
// Hooks
import { Store } from '@Hooks/useStore';
// Types
import type { IData } from '@Types';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

const Header = dynamic(() => import('@Components/header'), { ssr: false });
const HeroSection = dynamic(() => import('@Components/index-section-hero'), { ssr: false });
const AppSection = dynamic(() => import('@Components/index-section-app'), { ssr: false });
const HowItWorksSection = dynamic(() => import('@Components/index-section-howitworks'), { ssr: false });
const SurveySection = dynamic(() => import('@Components/index-section-survey'), { ssr: false });
// const Features = dynamic(() => import('@Components/index-section-features'), { ssr: false });
const FAQ = dynamic(() => import('@Components/index-section-faq'), { ssr: false });
const Testimonials = dynamic(() => import('@Components/index-section-testimonials'), { ssr: false });

const Home: NextPage = ({ data, language, languages }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const googleTokken = process.env.NEXT_PUBLIC_NEXT_GOOGLE_ANALYTICS_TOKEN as string;

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }

  const assignType = data as IData;

  // Create reach results (schema.org) for google search
  // const schema = createSchema(assignType);

  return (
    <Store.Provider value={{ language, languages, data: assignType }}>
      <Head>
        {/* <title>{assignType._site.globalSeo.fallbackSeo.title}</title> */}
        {/* <meta name="description" content={assignType._site.globalSeo.fallbackSeo.description} /> */}

        {/* Canonical page */}
        <link
          rel="canonical"
          href={`${language === 'fi' ? 'https://www.visimo.io/' : `https://www.visimo.io/${language}`}`}
        />

        {/* Facebook / Open Graph */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content={assignType._site.siteName} /> */}
        <meta
          property="og:url"
          content={`${language === 'fi' ? 'https://www.visimo.io/' : `https://www.visimo.io/${language}/`}`}
        />
        {/* <meta property="og:image" content={assignType._site.globalSeo.fallbackSeo.image.url} /> */}
        {/* <meta property="og:title" content={assignType._site.globalSeo.fallbackSeo.title} /> */}
        {/* <meta property="og:description" content={assignType._site.globalSeo.fallbackSeo.description} /> */}
        <meta property="og:locale" content={language} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content={`${language === 'fi' ? 'https://www.visimo.io/' : `https://www.visimo.io/${language}/`}`}
        />
        {/* <meta name="twitter:title" content={assignType._site.globalSeo.fallbackSeo.title} /> */}
        {/* <meta name="twitter:description" content={assignType._site.globalSeo.fallbackSeo.description} /> */}
        {/* <meta name="twitter:image" content={assignType._site.globalSeo.fallbackSeo.image.url} /> */}
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> */}
      </Head>
      {/* <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=G-${googleTokken}`} /> */}
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        async
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${googleTokken}');
          `,
        }}
      /> */}
      <Header />
      <main>
        <HeroSection />
        <AppSection />
        <HowItWorksSection />
        <SurveySection />
        {/* <Features /> */}
        <FAQ />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </Store.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request({ query, variables: { locale: context.locale } });

  return {
    props: {
      data,
      language: context.locale,
      languages: context.locales,
    },
  };
};
