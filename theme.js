/* Service Human — theme (shared) */
(() => {
  const KEY = 'sh_theme';

  function apply(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('.theme-toggle-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀︎' : '☾';
  }

  const stored = localStorage.getItem(KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  apply(stored || (prefersDark ? 'dark' : 'light'));

  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('#theme-toggle, .theme-toggle');
    if (!btn) return;
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  });
})();
(function () {
  const steps = document.querySelectorAll('#momentum-loop .loop-step');
  if (!steps.length) return;

  let i = 0;

  setInterval(() => {
    steps.forEach(s => s.classList.remove('active'));
    steps[i].classList.add('active');
    i = (i + 1) % steps.length;
  }, 1600);
})();
