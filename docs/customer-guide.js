document.querySelectorAll('[data-light-demo]').forEach(card => {
  const button = card.querySelector('.light-switch');
  const demo = card.querySelector('.sign-demo');
  const description = card.dataset.lightDemo === 'front' ? 'The letter itself lights up.' : 'Light glows on the wall behind the letter.';
  button.addEventListener('click', () => {
    const on = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(on));
    button.textContent = on ? 'Switch lights off' : 'Switch lights on';
    card.classList.toggle('lights-off', !on);
    demo.setAttribute('aria-label', description + ' Illustrative sign with lights ' + (on ? 'on.' : 'off.'));
  });
});

// Reveal each process card once, without continuous motion or touch interception.
(() => {
  const cards = document.querySelectorAll('.workflow-grid > li');
  if (!cards.length || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('workflow-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: .15 });
  cards.forEach((card, index) => {
    card.style.setProperty('--workflow-delay', (index % 3) * 80 + 'ms');
    observer.observe(card);
  });
})();
