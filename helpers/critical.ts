// Insert extra css, to check LocalStorage before DOM is loaded
export const setInitialTheme = `
  function getUserPreference() {
    const lS = localStorage.getItem('theme');
    if (!lS || lS.auto) {
      // Check, if the user is using a dark theme
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery.matches) {
        // Assign a dark theme
        localStorage.setItem('theme', 'dark');
        document.documentElement.dataset.theme = 'dark';
      } else {
        // Assign a light theme
        localStorage.setItem('theme', 'light');
        document.documentElement.dataset.theme = 'light';
      }
    } else {

      // Init theme onload
      localStorage.setItem('theme', lS);
      document.documentElement.dataset.theme = lS;
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

export const setScrollPosition = `
  document.addEventListener("DOMContentLoaded", function() {
      const scrollpos = localStorage.getItem('scrollpos');
      if (scrollpos) window.scrollTo(0, +scrollpos);
  });

  window.onbeforeunload = function() {
      localStorage.setItem('scrollpos', window.scrollY);
  };
`;
