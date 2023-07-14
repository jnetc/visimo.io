export type LanguagesType = 'fi' | 'en' | 'sv';
export type LanguagesMessageType = {
  ru: string;
  fi: string;
  en: string;
  sv: string;
};
export type ThemeColorType = 'light' | 'dark';
// export type AutoColorType = ThemeColorType | 'auto';

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

export interface INavigationLink {
  links: Array<IDType & NameType & AnchorType>;
}

export interface IHeroSection extends ISectionType {
  notification: string;
  surveyNotice: string;
  button: string;
}

export interface IHowItWorksSection extends ISectionType {
  steps: Array<DescType>;
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
  navigation: INavigationLink;
  heroSection: IHeroSection;
  howitworksSection: IHowItWorksSection;
  surveySection: ISurveySection;
  featureSection: IFeatureSection;
  faqSection: IFaqSection;
  testimonialSection: ITestimonialSection;
}

// SVG TYPES
export type TypeSVGObjSize =
  | 'bg-geometric-size-32'
  | 'bg-geometric-size-40'
  | 'bg-geometric-size-48'
  | 'bg-geometric-size-56'
  | 'bg-geometric-size-64'
  | 'bg-geometric-size-80'
  | 'bg-geometric-size-96'
  | 'bg-geometric-size-192';
export type TypeSVGObjStroke = 'bg-geometric-stroke-32' | 'bg-geometric-stroke-48';
export type TypeSVGObjFill = 'bg-geometric-fill-primary' | 'bg-geometric-fill-secondary';
type TypeSVGLinesStroke = 'bg-lines-stroke-main' | 'bg-lines-stroke-alt';

export interface ISVGGeometricObjects {
  fill: TypeSVGObjFill;
  size: TypeSVGObjSize;
  stroke: TypeSVGObjStroke;
  position: string;
}
export interface ISVGLetterObjects {
  size: string;
  position: string;
}
export interface ISVGLinesObjects {
  size: TypeSVGObjSize;
  stroke: TypeSVGLinesStroke;
  position: string;
}

// NODEMAILER
export interface ResponseSurveyType {
  status: string;
  message: LanguagesMessageType;
}
