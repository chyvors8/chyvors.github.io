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
  const slider = stage.querySelector('#memory-reveal');
  const comparison = stage.querySelector('.memory-comparison');
  const state = stage.querySelector('.comparison-state');
  const response = stage.querySelector('.memory-response');
  const confetti = stage.querySelector('.memory-confetti');
  let cleanup;
  let animationEnd;
  function reveal(value, animated = false) {
    clearTimeout(animationEnd);
    const amount = Number(value);
    comparison.classList.toggle('is-animating', animated && !reduced.matches);
    comparison.style.setProperty('--reveal', amount + '%');
    comparison.classList.toggle('is-partial', amount > 0 && amount < 100);
    const transformed = amount >= 50;
    stage.classList.toggle('is-shining', transformed);
    shine.setAttribute('aria-pressed', String(transformed));
    shine.innerHTML = transformed ? '<span aria-hidden="true">↺</span> Back to the plain backdrop' : '<span aria-hidden="true">✦</span> See the Backdropped transformation';
    state.textContent = amount === 0 ? 'A plain starting point' : amount === 100 ? 'The Backdropped touch' : 'Plain → Backdropped';
    response.textContent = amount === 0 ? 'One space. Imagine the possibilities.' : amount === 100 ? 'Custom shapes. Personal details. A burst of colour.' : 'Slide to see the creative difference.';
    slider.value = String(amount);
    slider.setAttribute('aria-valuetext', amount === 0 ? 'Plain starting concept' : amount === 100 ? 'Full Backdropped concept' : amount + '% Backdropped concept revealed');
    animationEnd = setTimeout(() => comparison.classList.remove('is-animating'), 850);
  }
  shine.hidden = false;
  stage.querySelector('.comparison-slider').hidden = false;
  reveal(0);
  slider.addEventListener('input', () => { reveal(slider.value); clearTimeout(cleanup); confetti.replaceChildren(); });
  let pointerStart;
  let imageDragging = false;
  comparison.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
    imageDragging = false;
    comparison.setPointerCapture(event.pointerId);
  });
  comparison.addEventListener('pointermove', event => {
    if (!pointerStart || event.pointerId !== pointerStart.id) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    if (!imageDragging && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) imageDragging = true;
    if (!imageDragging) return;
    const bounds = comparison.getBoundingClientRect();
    reveal(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
    clearTimeout(cleanup); confetti.replaceChildren();
  });
  const finishDrag = () => { pointerStart = undefined; imageDragging = false; };
  comparison.addEventListener('pointerup', finishDrag);
  comparison.addEventListener('pointercancel', finishDrag);
  comparison.addEventListener('lostpointercapture', finishDrag);
  shine.addEventListener('click', () => {
    const active = Number(slider.value) < 50;
    reveal(active ? 100 : 0, true);
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
