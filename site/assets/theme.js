/* Deferred. theme-init.js has already set data-theme before paint; this only
   wires the dropdown and adds click-away/Escape for the menu. The menu is a
   native <details> and opens without JavaScript. */
(function () {
  var picker = document.querySelector('[data-theme-select]');
  var wrap = document.querySelector('.theme');

  if (picker && wrap) {
    wrap.removeAttribute('hidden');   // only show the control if JS is running
    picker.value = document.documentElement.getAttribute('data-theme');

    picker.addEventListener('change', function () {
      document.documentElement.setAttribute('data-theme', picker.value);
      try { localStorage.setItem('abiegnus-theme', picker.value); } catch (e) { /* private mode */ }
    });
  }

  var menu = document.querySelector('.menu');
  if (!menu) return;

  document.addEventListener('click', function (e) {
    if (!menu.hasAttribute('open') || !e.target.closest) return;
    if (e.target.closest('.theme')) return;
    if (!e.target.closest('.menu') || e.target.closest('.menu-panel a')) {
      menu.removeAttribute('open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !menu.hasAttribute('open')) return;
    menu.removeAttribute('open');
    var s = menu.querySelector('summary');
    if (s) s.focus();
  });
})();
