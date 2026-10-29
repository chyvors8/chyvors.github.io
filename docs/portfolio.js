(function () {
  const projects = window.backdroppedPortfolio || [];
  const grid = document.querySelector('#portfolio-grid');
  if (!grid) return;
  const categories = [['all', 'All work'], ['exhibitions','Exhibitions & events'], ['signboards','Shop & business signs'], ['retail-graphics','Stickers & surface graphics'], ['window-displays','Shop windows'], ['retail-fixtures','Retail displays & fixtures'], ['backdrops','Backdrops'], ['hoardings','Temporary wall graphics'], ['personal-displays','Personal displays'], ['brand-print','Design & printed stationery'], ['production','Production']];
  const serviceFilters = {'exhibitions':'Exhibition booths','signboards':'Signboards','retail-graphics':'Stickers','window-displays':'Window displays','retail-fixtures':'Retail fixtures','backdrops':'Backdrops','hoardings':'Hoarding graphics','personal-displays':'Personal displays','brand-print':'Print collateral','production':'Production'};
  const filters = document.querySelector('#portfolio-filters');
  const search = document.querySelector('#portfolio-search');
  const detail = document.querySelector('#portfolio-detail');
  const overview = document.querySelector('#portfolio-overview');
  const dialog = document.querySelector('#portfolio-dialog');
  let category = 'all', currentProject, photoIndex = 0, opener, original = false;
  const make = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text) el.textContent = text; return el; };
  function image(photo, thumb = false) {
    const img = make('img');
    if (thumb) window.setBackdroppedImage(img, photo.enhanced || photo.image);
    else img.src = photo.enhanced || photo.image;
    img.alt = photo.alt; img.width = photo.enhancedWidth || photo.width; img.height = photo.enhancedHeight || photo.height;
    img.loading = 'lazy'; img.decoding = 'async'; return img;
  }
  function showPhoto() {
    const photo = currentProject.photos[photoIndex];
    const img = document.querySelector('#portfolio-dialog-image');
    img.src = !original && photo.enhanced ? photo.enhanced : photo.image; img.alt = photo.alt;
    document.querySelector('#portfolio-photo-caption').textContent = photo.alt;
    document.querySelector('#portfolio-photo-count').textContent = (photoIndex + 1) + ' / ' + currentProject.photos.length;
    document.querySelector('#portfolio-photo-treatment').textContent = !original && photo.enhanced ? 'AI-enhanced preview' : 'Original project photograph';
    const toggle = document.querySelector('#portfolio-original-toggle'); toggle.hidden = !photo.enhanced; toggle.textContent = original ? 'View enhanced' : 'View original'; toggle.setAttribute('aria-pressed', String(original));
  }
  function openPhoto(project, index, button) { currentProject = project; photoIndex = index; original = false; opener = button; showPhoto(); dialog.showModal(); }
  function render() {
    const term = search.value.toLowerCase().trim();
    const matches = projects.filter(p => (category === 'all' || p.category === category || p.services.includes(serviceFilters[category])) && [p.name, p.description, ...p.services].join(' ').toLowerCase().includes(term));
    grid.replaceChildren(...matches.map(project => {
      const card = make('article', 'portfolio-card'); const link = make('a', 'portfolio-project-link'); link.href = 'portfolio.html?project=' + project.id;
      const visual = make('div', 'portfolio-card-visual'); visual.append(image(project.cover, true)); visual.append(make('span','portfolio-photo-badge',project.photos.length + (project.photos.length === 1 ? ' photo' : ' photos'))); if (project.cover.enhanced) visual.append(make('span','portfolio-enhanced-badge','AI-enhanced preview'));
      const copy = make('div','portfolio-card-copy'); copy.append(make('p','eyebrow',categories.find(c => c[0] === project.category)?.[1] || project.category),make('h2','',project.name),make('p','',project.description));
      const tags = make('ul','portfolio-tags'); project.services.forEach(s => tags.append(make('li','',s))); copy.append(tags,make('span','card-link','Explore project ↗')); link.append(visual,copy);card.append(link);return card;
    }));
    document.querySelector('#portfolio-results').textContent = matches.length + (matches.length === 1 ? ' project collection' : ' project collections');
    document.querySelector('#portfolio-empty').hidden = matches.length > 0;
  }
  for (const [key, name] of categories) { const button = make('button','',name);button.type='button';button.dataset.filter=key;button.setAttribute('aria-pressed',String(key==='all'));button.addEventListener('click',()=>{category=key;filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();});filters.append(button); }
  search.addEventListener('input',render);
  const requested = new URLSearchParams(location.search).get('project');
  const project = projects.find(p => p.id === requested);
  if (project) {
    overview.hidden = true; detail.hidden = false; document.title = project.name + ' — backdropped portfolio';
    document.querySelector('#project-heading').textContent = project.name; document.querySelector('#project-description').textContent = project.description;
    document.querySelector('#project-photo-total').textContent = project.photos.length + ' project photographs';
    if (!project.photos.some(photo => photo.enhanced)) {
      document.querySelector('#portfolio-detail .theme-disclaimer').textContent = 'Original project photographs. Select an image to enlarge it and browse the gallery.';
    }
    const services = document.querySelector('#project-services');project.services.forEach(s=>services.append(make('li','',s)));
    const photos = document.querySelector('#project-photos');photos.replaceChildren(...project.photos.map((photo,index)=>{
      const figure=make('figure','portfolio-photo'); const button=make('button','portfolio-photo-open');button.type='button';button.setAttribute('aria-label','Enlarge '+photo.alt);button.append(image(photo,true));button.addEventListener('click',()=>openPhoto(project,index,button));figure.append(button,make('figcaption','',(photo.enhanced ? 'AI-enhanced preview · ' : '') + photo.alt));return figure;
    }));
    document.querySelector('#project-enquire').href = 'lets-talk.html?occasion=' + (project.category === 'personal-displays' ? 'personal' : 'corporate') + '&project=' + project.id;
  } else { render(); }
  document.querySelector('#portfolio-dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>opener?.focus());
  const next = delta => { photoIndex=(photoIndex+delta+currentProject.photos.length)%currentProject.photos.length;showPhoto(); };
  document.querySelector('#portfolio-photo-prev').addEventListener('click',()=>next(-1));document.querySelector('#portfolio-photo-next').addEventListener('click',()=>next(1));
  document.querySelector('#portfolio-original-toggle').addEventListener('click',()=>{original=!original;showPhoto();});
  dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();next(-1);}if(e.key==='ArrowRight'){e.preventDefault();next(1);}});
  const detailsField=document.querySelector('[name="details"]');if(project&&detailsField&&!detailsField.value)detailsField.value='Project inspiration: '+project.name+'\n';
})();
