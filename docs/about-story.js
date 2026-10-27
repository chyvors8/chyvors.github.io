(() => {
  const page = document.querySelector('.about-story-page');
  if (!page) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const animate = element => {
    element.classList.remove('story-enter');
    if (!reduced.matches) { void element.offsetWidth; element.classList.add('story-enter'); }
  };
  const chapters = [...page.querySelectorAll('[data-chapter]')];
  const stories = [...page.querySelectorAll('.story-chapter')];
  function showChapter(index) {
    chapters.forEach((button, i) => button.setAttribute('aria-expanded', String(i === index)));
    stories.forEach((story, i) => { story.hidden = i !== index; if (i === index) animate(story); });
  }
  chapters.forEach((button, index) => button.addEventListener('click', () => showChapter(index)));
  showChapter(0);
  page.querySelector('.story-chapters').hidden = false;
  page.querySelector('.story-interaction-note').hidden = false;
  const picker = page.querySelector('.moment-picker');
  const momentButtons = [...picker.querySelectorAll('button')];
  const panels = [...page.querySelectorAll('[data-moment-panel]')];
  function showMoment(index) {
    momentButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    panels.forEach((panel, i) => { panel.hidden = i !== index; if (i === index) animate(panel); });
  }
  momentButtons.forEach((button, index) => {
    button.setAttribute('aria-controls', 'about-moment-' + index);
    panels[index].id = 'about-moment-' + index;
    button.addEventListener('click', () => showMoment(index));
  });
  showMoment(0); picker.hidden = false;
  const stage = page.querySelector('.memory-stage');
  const shine = stage.querySelector('.memory-button');
  const confetti = stage.querySelector('.memory-confetti');
  let cleanup;
  shine.hidden = false;
  shine.addEventListener('click', () => {
    const active = shine.getAttribute('aria-pressed') !== 'true';
    shine.setAttribute('aria-pressed', String(active));
    stage.classList.toggle('is-shining', active);
    shine.innerHTML = active ? '<span aria-hidden="true">↺</span> Reset this moment' : '<span aria-hidden="true">✦</span> Make this moment shine';
    stage.querySelector('.memory-response').textContent = active ? 'That’s the feeling we design for.' : 'Made for your moment.';
    clearTimeout(cleanup); confetti.replaceChildren();
    if (active && !reduced.matches) {
      for (let i = 0; i < 18; i++) {
        const piece = document.createElement('i');
        piece.style.setProperty('--piece', ['#2453ff','#fbb6cc','#ff773e','#8abb56'][i % 4]);
        piece.style.setProperty('--x', ((i % 6) - 2.5) * 55 + 'px');
        piece.style.setProperty('--y', (Math.floor(i / 6) * 105 - 170) + 'px');
        piece.style.setProperty('--rotation', i * 47 + 'deg');
        piece.style.setProperty('--delay', (i % 3) * 25 + 'ms');
        confetti.append(piece);
      }
      cleanup = setTimeout(() => confetti.replaceChildren(), 1200);
    }
  });
})();
