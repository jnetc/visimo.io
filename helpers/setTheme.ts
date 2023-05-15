import type { ThemeColorType } from '@Types';

export default function setTheme(theme: ThemeColorType, auto: boolean = false) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', JSON.stringify({ theme, auto }));
}
