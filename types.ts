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

export type TypeSVGObjSize =
  | 'bg-geometric-size-32'
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