export type LanguagesType = 'fi' | 'en' | 'sv';
export type LanguagesMessageType = {
  ru: string;
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

export interface Image {
  url: string;
  alt: string;
}

export interface ISectionType extends TitleType, DescType, TitleColorType {}

export interface IHeroSection extends ISectionType {
  notification: string;
  surveyNotice: string;
  button: string;
}

export interface IStep extends DescType {
  discuss: string;
}

export interface IHowItWorksSection extends ISectionType {
  steps: Array<IStep>;
}

export interface IQuestion extends IDType, TitleType, DescType {
  illustrationId: string;
  order: number;
}
export interface ISurveyContext extends Omit<IQuestion, 'illustrationId'> {
  answer: string;
  hasCustomerAnswer: boolean;
  customerAnswer: string;
}

export interface ISurveySection extends ISectionType {
  questions: Array<IQuestion>;
  surveyCompleted: string;
}

export interface IFeature extends Pick<ISectionType, 'title' | 'description'> {
  iconid: string;
}
export interface IFeatureSection extends ISectionType {
  features: Array<IFeature>;
}

export interface IFaq extends IDType {
  question: string;
  answer: string;
}
export interface IFaqSection extends ISectionType {
  faqs: Array<IFaq>;
  avatars: Array<Image>;
  extraInfo: string;
}

export interface ITestimonial extends IDType, NameType, DescType {
  post: string;
  avatar: Image;
}

export interface ITestimonialSection extends ISectionType {
  testimonials: Array<ITestimonial>;
}

export interface IData {
  // _site: SEO;
  heroSection: IHeroSection;
  howitworksSection: IHowItWorksSection;
  surveySection: ISurveySection;
  featureSection: IFeatureSection;
  faqSection: IFaqSection;
  testimonialSection: ITestimonialSection;
}

// NODEMAILER
export interface ResponseSurveyType {
  status: string;
  message: LanguagesMessageType;
}
