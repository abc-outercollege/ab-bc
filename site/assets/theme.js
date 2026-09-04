/* Theme switching, plus small courtesies for the menu.
   The theme is applied by a tiny inline script in <head> before first paint,
   so there is no flash. The menu itself is a native <details> and needs no
   JavaScript to open or close — this only adds click-away and Escape. */
(function () {
  var THEMES = ['canopy', 'manuscript', 'nuit', 'light'];
  var KEY = 'abiegnus-theme';

  /* ---- theme ---- */

  var picker = document.querySelector('[data-theme-select]');
  var wrap = document.querySelector('.theme');

  if (picker && wrap) {
    // only reveal the control once we know scripting works
    wrap.removeAttribute('hidden');
    picker.value = document.documentElement.getAttribute('data-theme') || 'canopy';

    picker.addEventListener('change', function () {
      var theme = picker.value;
      if (THEMES.indexOf(theme) === -1) return;
      document.documentElement.setAttribute('data-theme', theme);
      try { localStorage.setItem(KEY, theme); } catch (e) { /* private mode: this session only */ }
    });
  }

  /* ---- menu ---- */

  var menu = document.querySelector('.menu');
  if (!menu) return;

  document.addEventListener('click', function (e) {
    if (!menu.hasAttribute('open') || !e.target.closest) return;
    // leave clicks on the theme control alone; close on a link or on click-away
    if (e.target.closest('.theme')) return;
    if (!e.target.closest('.menu') || e.target.closest('.menu-panel a')) {
      menu.removeAttribute('open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !menu.hasAttribute('open')) return;
    menu.removeAttribute('open');
    var summary = menu.querySelector('summary');
    if (summary) summary.focus();
  });
})();
