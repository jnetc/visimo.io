// Insert extra css, to check LocalStorage before DOM is loaded
export const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    window.localStorage.setItem('theme', 'light')
    return 'light'
  }
  document.documentElement.dataset.theme = getUserPreference();
`;
// Insert extra css, to prevent flash when DOM is loaded
export const extraCSS = `
  html[data-theme=dark] {
    background-color: hsl(0, 0%, 22%);
    color: hsl(32, 100%, 95%);
  }
  html[data-theme=light] {
    background-color: hsl(32, 100%, 95%);
    color: hsl(0, 0%, 22%);
  }
`;
