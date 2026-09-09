/* Runs blocking in <head> so data-theme is set before the page paints —
   no flash of the wrong theme. This is the only place a stored theme value
   is read or migrated. */
(function () {
  var t = null;
  try { t = localStorage.getItem('abiegnus-theme'); } catch (e) { /* private mode */ }
  if (t === 'nuit') t = 'night';  // renamed 2026-09-09; migrate old stored value
  var valid = ['canopy', 'manuscript', 'night', 'light'];
  document.documentElement.setAttribute('data-theme', valid.indexOf(t) > -1 ? t : 'canopy');
})();
