export type LanguagesType = 'fi' | 'en' | 'sv';
export type LanguagesMessageType = {
  fi: string;
  en: string;
  sv: string;
};
export type ThemeColorType = 'light' | 'dark';

export type IDType = { id: string };
export type NameType = { name: string };
export type TitleType = { title: string };
export type TitleColorType = { primary: string; secondary: string };
export type DescType = { description: string };
export type LabelType = { label: string };
export type AnchorType = { anchor: string };
export type UrlType = { url: string };
export type HandlerType = { handler: () => void };
export type LinksType = {
  emailUrl?: string;
  discordUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  tiktokUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  websiteUrl?: string;
};

export interface IImage {
  url: string;
  alt: string;
  title: string;
  responsiveImage: {
    sizes: string;
    srcSet: string;
  };
}

export interface ISectionType extends TitleType, DescType, TitleColorType {}

export interface ISeo {
  globalSeo: {
    fallbackSeo: {
      description: string;
      title: string;
      twitterCard: string;
      image: {
        url: string;
      };
    };
    siteName: string;
    titleSuffix: string;
    twitterAccount: string;
    facebookPageUrl: string;
  };
}

export interface IHeroSection extends ISectionType {
  notification: string;
  surveyNotice: string;
  buttonName: string;
  image: IImage;
}

export interface IStep extends DescType {
  image: IImage;
}

export interface IHowItWorksSection extends ISectionType {
  steps: Array<IStep>;
}

export interface IQuestion extends IDType, TitleType, DescType {
  illustrationId: string;
  order: number;
  image: IImage;
}
export interface ISurveyContext extends Omit<IQuestion, 'illustrationId' | 'image'> {
  answer: string;
  hasCustomerAnswer: boolean;
  customerAnswer: string;
}

export interface ISurveySection extends ISectionType {
  enableSection: boolean;
  questions: Array<IQuestion>;
  attension: string;
  buttonName: string;
  successMessage: string;
  errorMessage: string;
}

export interface IFeature extends Pick<ISectionType, 'title' | 'description'> {
  iconid: string;
}
export interface IFeatureSection extends ISectionType {
  features: Array<IFeature>;
}

export interface IMember
  extends IDType,
    NameType,
    Pick<LinksType, 'instagramUrl' | 'linkedinUrl' | 'twitterUrl' | 'facebookUrl' | 'websiteUrl'> {
  avatar: IImage;
  teamPosition: string;
  about: string;
}
export interface ITeamSection extends ISectionType {
  team: Array<IMember>;
}

export interface IFaq extends IDType {
  question: string;
  answer: string;
}
export interface IFaqSection extends ISectionType {
  faqs: Array<IFaq>;
  avatars: Array<IImage>;
  extraInfo: string;
}

export interface ITestimonial extends IDType, NameType, DescType {
  post: string;
  avatar: IImage;
}

export interface ITestimonialSection extends ISectionType {
  testimonials: Array<ITestimonial>;
}

export interface IFooter extends Omit<LinksType, 'websiteUrl'> {
  copyright: string;
}

export interface IData {
  _site: ISeo;
  heroSection: IHeroSection;
  appSection: { image: IImage };
  howitworksSection: IHowItWorksSection;
  surveySection: ISurveySection;
  featureSection: IFeatureSection;
  teamSection: ITeamSection;
  faqSection: IFaqSection;
  testimonialSection: ITestimonialSection;
  footer: IFooter;
}

// NODEMAILER
export interface ResponseMessageType {
  status: 'success' | 'error';
}
