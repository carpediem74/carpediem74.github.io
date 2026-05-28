/**
 * i18n.js — DE/EN language toggle for Carpediem Apps.
 *
 * Sets data-lang="de"|"en" on <html>.
 * CSS rules in style.css hide .lang-en when data-lang="de" and vice versa.
 * Preference persisted in localStorage under key "carpediem-lang".
 *
 * HTML pattern — short strings:
 *   <span class="lang-de">Deutsch</span><span class="lang-en">English</span>
 *
 * HTML pattern — long blocks:
 *   <div class="lang-de">...</div>
 *   <div class="lang-en">...</div>
 *
 * Toggle buttons:
 *   <button class="lang-btn" data-lang="de">DE</button>
 *   <button class="lang-btn" data-lang="en">EN</button>
 */
(function () {
  var KEY = 'carpediem-lang';

  function apply(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(KEY, lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(localStorage.getItem(KEY) || 'de');
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-lang')); });
    });
  });
}());
