export type LanguagesType = 'ru' | 'fi' | 'en';
export type ThemeType = { theme: string; auto: boolean };

export type IDType = { id: string };
export type NameType = { name: string };
export type TitleType = { title: string };
export type AnchorType = { anchor: string };
export type UrlType = { url: string };
export type HandlerType = { handler: () => void };

export interface Image {
  image: { url: string };
}

export interface IArticleType extends TitleType {
  description: string;
}

export interface INavigationLink extends TitleType {
  links: Array<IDType & NameType & AnchorType>;
  languages: Array<IDType & NameType>;
  themes: Array<IDType & NameType>;
}

export interface IHeroSection extends Image {
  greatings: string;
  hideContent: boolean;
}

export interface IData {
  // _site: SEO;
  navigation: INavigationLink;
  heroSection: IHeroSection;
}
