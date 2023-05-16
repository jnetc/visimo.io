export type LanguagesType = 'ru' | 'fi' | 'en';
export type ThemeColorType = 'light' | 'dark';
export type AutoColorType = ThemeColorType | 'auto';
export type ThemeType = { theme: ThemeColorType; auto: boolean };

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

export interface INavigationLink {
  links: Array<IDType & NameType & AnchorType>;
}

export interface IHeroSection extends IArticleType {
  button: string;
}

export interface IData {
  // _site: SEO;
  navigation: INavigationLink;
  heroSection: IHeroSection;
}
