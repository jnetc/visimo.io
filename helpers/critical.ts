// Insert extra css, to check LocalStorage before DOM is loaded
export const setInitialTheme = `
  function getUserPreference() {
    const lS = JSON.parse(localStorage.getItem('theme'));
    if (!lS || lS.auto) {
      // Check, if the user is using a dark theme
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery.matches) {
        // Assign a dark theme
        localStorage.setItem('theme', JSON.stringify({ theme: 'dark', auto: true }));
        document.documentElement.dataset.theme = 'dark';
      } else {
        // Assign a light theme
        localStorage.setItem('theme', JSON.stringify({ theme: 'light', auto: true }));
        document.documentElement.dataset.theme = 'light';
      }
    } else {

      // Init theme onload
      localStorage.setItem('theme', JSON.stringify({ theme: lS.theme, auto: lS.auto }));
      document.documentElement.dataset.theme = lS.theme;
    }
  }
  getUserPreference();
`;
// Insert extra css, to prevent flash when DOM is loaded
export const extraCSS = `
  html[data-theme=dark] {
    background-color: hsl(0, 0%, 32%);
    color: hsl(0, 0%, 96%);
  }
  html[data-theme=light] {
    background-color: white;
    color: hsl(0, 0%, 32%);
  }
`;
