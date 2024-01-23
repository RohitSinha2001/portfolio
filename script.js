document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Check if the user's dark mode preference is stored
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  // Set initial dark mode state
  if (isDarkMode) {
      enableDarkMode();
  } else {
      disableDarkMode();
  }

  // Toggle dark mode when the toggle button is clicked
  darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  // Function to enable dark mode
  function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
  }

  // Function to disable dark mode
  function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
  }
});
