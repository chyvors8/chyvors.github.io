const content = {
  "personal": {
    "label": "FOR LIFE’S HAPPY LITTLE MILESTONES",
    "title": "Personal moments.\nMade memorable.",
    "description": "Custom backdrops, welcome signage and decorative table details for baby showers, anniversaries, birthdays, engagements and weddings. We design and install the agreed pieces, with teardown arranged in your quote.",
    "categories": [
      {
        "name": "Baby showers",
        "description": "A sweet setting to welcome a little one.",
        "items": [
          "Baby shower backdrops",
          "Welcome & personalised signage",
          "Table decorations"
        ],
        "image": "assets/personal-tiers/baby-showers-signature.jpg",
        "alt": "Personalised printed baby-shower backdrop with matching signage and a cylinder pedestal concept"
      },
      {
        "name": "Anniversaries",
        "description": "Celebrate another chapter of your story.",
        "items": [
          "Anniversary backdrops",
          "Personalised signage",
          "Table decorations"
        ],
        "image": "assets/personal-tiers/anniversaries-signature.jpg",
        "alt": "Personalised anniversary backdrop with matching printed welcome signage and a cylinder pedestal concept"
      },
      {
        "name": "Birthdays",
        "description": "Bring your birthday theme to life, at any age.",
        "items": [
          "Birthday backdrops",
          "Name & welcome signage",
          "Table decorations"
        ],
        "image": "assets/personal-tiers/birthdays-signature.jpg",
        "alt": "Shaped birthday backdrop with matching signage, printed cutout and a cylinder pedestal concept"
      },
      {
        "name": "Engagements",
        "description": "Set the scene for the start of something special.",
        "items": [
          "Engagement backdrops",
          "Personalised signage",
          "Table decorations"
        ],
        "image": "assets/personal-tiers/engagements-signature.jpg",
        "alt": "Printed engagement backdrop with shaped panels, matching welcome signage and a cylinder pedestal concept"
      },
      {
        "name": "Weddings",
        "description": "Thoughtful details for your big day.",
        "items": [
          "Wedding backdrops",
          "Welcome & event signage",
          "Table decorations"
        ],
        "image": "assets/personal-tiers/weddings-signature.jpg",
        "alt": "Heritage-inspired printed wedding backdrop with matching signage and a cylinder pedestal concept"
      },
      {
        "name": "Table decorations",
        "description": "Carry your colours and theme through every table.",
        "items": [
          "Table signs & decorative pieces",
          "Decorative table details",
          "Matching backdrop & table signage"
        ],
        "image": "assets/personal-tiers/table-decorations-signature.jpg",
        "alt": "Coordinated table-number, menu and place-card decoration concept on a venue-supplied table"
      }
    ],
    "cta": "Enquire about your backdrop",
    "service": "Personal event"
  },
  "corporate": {
    "label": "YOUR BRAND, CENTRE STAGE",
    "title": "Your business.\nBrought to life.",
    "description": "Backdrop and signage design, printing and installation for events, exhibitions and business premises. Explore the options below, with dismantling and collection arranged in your quote where needed.",
    "categories": [
      {
        "name": "Event backdrops",
        "description": "For a photo area, stage or branded event wall. Choose a design, then arrange printing, installation and teardown.",
        "items": [
          "Event & stage backdrops",
          "Branded photo backdrops",
          "Media walls",
          "Exhibition booth graphics"
        ],
        "image": "assets/mockups/corporate-backdrops.jpg",
        "alt": "Blue and lime corporate stage and media wall backdrop concept"
      },
      {
        "name": "Shop & business signs",
        "description": "For your shopfront, reception or business name. Explore illuminated letters, lightboxes and metal signs.",
        "items": [
          "LED-lit signs",
          "Front-lit letters (glowing face)",
          "Back-lit letters (halo glow)",
          "Aluminium signs",
          "Stainless steel signs",
          "Lightbox signs"
        ],
        "image": "assets/mockups/signboards.jpg",
        "alt": "LED, front-lit, back-lit and metal signboard showroom concept"
      },
      {
        "name": "Stickers & surface graphics",
        "description": "For adding printed graphics to floors, walls, glass, fridges and temporary shop hoardings.",
        "items": [
          "Floor stickers",
          "Wall stickers",
          "Glass stickers",
          "Fridge stickers",
          "Hoarding graphics",
          "Pillar & escalator graphics",
          "Die-cut stickers"
        ],
        "image": "assets/mockups/stickers.jpg",
        "alt": "Retail floor, wall, glass and fridge sticker graphics concept"
      },
      {
        "name": "Acrylic signs & small displays",
        "description": "For welcome signs, reception logos, directions and small product displays made from acrylic.",
        "items": [
          "Custom acrylic signage",
          "Acrylic product displays",
          "Acrylic wayfinding"
        ],
        "image": "assets/mockups/acrylic-signages.jpg",
        "alt": "Clear acrylic sign mounted with metal standoffs and blue raised lettering concept"
      },
      {
        "name": "Shop windows & retail displays",
        "description": "For storefront windows, product shelves, display risers and promotional corners in shops.",
        "items": [
          "Branded window displays",
          "Custom retail fixtures",
          "Concept corners",
          "Product display risers"
        ],
        "image": "assets/mockups/window-displays.jpg",
        "alt": "Retail window graphics and sculptural display installation concept"
      },
      {
        "name": "Banners, boards & printed signs",
        "description": "For promotional banners, freestanding boards, cutout standees and printed directions.",
        "items": [
          "Foam board displays",
          "Fabric banners",
          "Vinyl prints",
          "PVC banners & boards",
          "Kapaline display boards",
          "Hanging wayfinding banners",
          "Life-size standees",
          "Print collateral & name cards",
          "Brand artwork & logo design"
        ],
        "image": "assets/mockups/banners-display-boards.jpg",
        "alt": "Fabric and vinyl banners with rigid foam and PVC display boards concept"
      },
      {
        "name": "Exhibition setup & dismantling",
        "description": "For booth graphics, backdrops, counters and display fixtures. We deliver, install and dismantle the agreed display, rather than organise the exhibition.",
        "items": [
          "Exhibition booth installation",
          "Exhibition graphics & backdrops",
          "Display fixtures & product displays",
          "Transport & on-site setup",
          "Dismantling & collection"
        ],
        "image": "assets/portfolio/project-140.jpg",
        "alt": "Meiji exhibition booth with branded counter, display graphics and installed fixtures"
      }
    ],
    "cta": "Enquire about your signage or display",
    "service": "Corporate event"
  }
};
function setOccasion(key, focus = false) {
  activeOccasion = key;
  updateOccasionFilm(key);
  const data = content[key];
  document.querySelectorAll('[data-tab]').forEach(button => {const selected = button.dataset.tab === key; button.setAttribute('aria-selected', String(selected));button.tabIndex = selected ? 0 : -1;if(selected && focus) button.focus();});
  document.querySelector('#occasion-panel').setAttribute('aria-labelledby', 'tab-' + key);
  document.querySelector('#occasion-label').textContent = data.label;
  const title = document.querySelector('#occasion-title');title.replaceChildren();data.title.split('\n').forEach((line,i)=>{if(i)title.append(document.createElement('br'));title.append(document.createTextNode(line));});
  document.querySelector('#occasion-description').textContent = data.description;
  document.querySelector('#occasion-panel').dataset.occasion = key;
  document.querySelector('#occasion-categories').replaceChildren(...data.categories.map(category => {
    const card = document.createElement('article'); card.className = 'occasion-category';
    const heading = document.createElement('h3'); heading.textContent = category.name;
    const description = document.createElement('p'); description.textContent = category.description;
    const list = document.createElement('ul');
    list.append(...category.items.map(item => {const li = document.createElement('li'); li.textContent = item; return li;}));
    const preview = document.createElement('figure'); preview.className = 'occasion-category-preview';
    const caption = document.createElement('figcaption'); caption.textContent = category.name === 'Exhibition setup & dismantling' ? 'Real exhibition projects' : key === 'corporate' ? 'Concepts & real projects' : 'Personal event tier concepts';
    const collection = window.backdroppedThemes?.find(c => c.name === category.name);
    if (collection && window.backdroppedThemeUI) {
      const reel = window.backdroppedThemeUI.createReel(key === 'personal' && collection.tierExamples ? collection.tierExamples : collection.themes);
      preview.append(reel, caption, window.backdroppedThemeUI.createMotionButton(reel));
    } else {
      const image = document.createElement('img');
      window.setBackdroppedImage(image, category.image); image.alt = category.alt;
      image.loading = 'lazy'; preview.append(image, caption);
    }
    const body = document.createElement('div'); body.className = 'occasion-category-body';
    body.append(heading, description, list);
    if (collection) {
      const explore = document.createElement('a'); explore.className = 'theme-explore-link';
      explore.href = 'themes.html?category=' + collection.key;
      explore.textContent = 'Explore ' + collection.themes.length + (category.name === 'Exhibition setup & dismantling' ? ' project photos ↗' : key === 'corporate' ? ' ideas & projects ↗' : collection.tierExamples ? ' tier concepts ↗' : ' themes ↗'); body.append(explore);
      if (key === 'corporate' && collection.key === 'signboards') {
        const guide = document.createElement('a'); guide.className = 'theme-explore-link';
        guide.href = 'themes.html?occasion=corporate&category=signboards#signboard-guide';
        guide.textContent = 'Compare lighting & materials ↗'; body.append(guide);
      }
    }
    card.append(preview, body); return card;
  }));
  document.querySelector('#occasion-cta').textContent = data.cta;
  document.querySelector('#occasion-cta').href = 'lets-talk.html?occasion=' + key;
}
document.querySelectorAll('[data-tab]').forEach((button,index,buttons)=>{
  button.addEventListener('click',()=>setOccasion(button.dataset.tab));
  button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%buttons.length;if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;if(event.key==='Home')next=0;if(event.key==='End')next=buttons.length-1;if(next!==undefined){event.preventDefault();setOccasion(buttons[next].dataset.tab,true);}});
});
const occasionQuery = new URLSearchParams(location.search).get('occasion');
const requestedOccasion = occasionQuery === 'signage' ? 'corporate' : occasionQuery;
let activeOccasion = Object.hasOwn(content, requestedOccasion) ? requestedOccasion : 'personal';
if(document.querySelector('#occasion-panel')) setOccasion(activeOccasion);
const serviceSelect = document.querySelector('#brief-service');
if(serviceSelect) {
  serviceSelect.value = content[activeOccasion].service;
  function updateServiceEnquiry() {
    const key = serviceSelect.value === content.corporate.service ? 'corporate' : 'personal';
    const tierField = document.querySelector('#brief-tier-field');
    const tierSelect = document.querySelector('#brief-tier');
    if (tierField) tierField.hidden = key !== 'personal';
    if (tierSelect) tierSelect.disabled = key !== 'personal';
    const container = document.querySelector('#brief-services');
    if (!container) return;
    container.replaceChildren(...content[key].categories.map(category => {
      const group = document.createElement('details'); group.className = 'service-enquiry-group';
      const heading = document.createElement('summary'); heading.textContent = category.name;
      const options = document.createElement('div'); options.className = 'service-enquiry-options';
      options.append(...category.items.map(item => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.name = 'services';
        checkbox.value = category.name + ': ' + item;
        label.append(checkbox, document.createTextNode(item)); return label;
      }));
      group.append(heading, options); return group;
    }));
    const otherGroup = document.createElement('details'); otherGroup.className = 'service-enquiry-group';
    const otherHeading = document.createElement('summary'); otherHeading.textContent = 'Others';
    const otherOptions = document.createElement('div'); otherOptions.className = 'service-enquiry-options';
    const otherChoice = document.createElement('label');
    const otherCheckbox = document.createElement('input'); otherCheckbox.type = 'checkbox';
    otherCheckbox.name = 'services'; otherCheckbox.value = 'Others';
    otherChoice.append(otherCheckbox, document.createTextNode('Others'));
    const otherDetails = document.createElement('label'); otherDetails.className = 'other-service-details';
    otherDetails.hidden = true;
    const otherText = document.createElement('textarea'); otherText.name = 'otherServices';
    otherText.rows = 3; otherText.placeholder = 'Describe the service you have in mind'; otherText.disabled = true;
    otherDetails.append(document.createTextNode('Please specify'), otherText);
    otherCheckbox.addEventListener('change', () => {
      otherDetails.hidden = !otherCheckbox.checked;
      otherText.disabled = !otherCheckbox.checked;
      otherText.required = otherCheckbox.checked;
    });
    otherOptions.append(otherChoice, otherDetails); otherGroup.append(otherHeading, otherOptions);
    container.append(otherGroup);
    document.querySelector('#service-enquiry-help').textContent =
      'Explore ' + (key === 'corporate' ? 'corporate' : 'personal') + ' backdrop, signage and display services below and select all that apply.';
  }
  serviceSelect.addEventListener('change', updateServiceEnquiry);
  updateServiceEnquiry();
}
document.querySelector('#brief-form')?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target);const text=['BACKDROPPED — PROJECT BRIEF','','Name: '+data.get('name'),'Email: '+data.get('email'),'Service: '+data.get('service'),...(data.has('tier') ? ['Preferred tier: '+(event.target.elements.tier.selectedOptions[0]?.textContent || 'To be discussed')] : []),'Selected services: '+(data.getAll('services').join('; ')||'To be discussed'),...(data.get('otherServices')?['Other service details: '+data.get('otherServices')]:[]),'Required date: '+(data.get('date')||'To be confirmed'),'','Project details:',data.get('details'),'','Prepared for discussion with backdropped.'].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='backdropped-project-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#brief-status').textContent='Your brief is ready to save. Keep it handy to share with backdropped.';});
const menu=document.querySelector('.menu-toggle');const navigation=document.querySelector('#navigation');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a').forEach(item=>item.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')&&document.querySelector('.occasion-nav-toggle').getAttribute('aria-expanded')!=='true'){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelector('#year').textContent = new Date().getFullYear();
const processVideo = document.querySelector('#process-video');
const videoToggle = document.querySelector('#video-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function filmPoster(stem) {
  return 'assets/films/' + stem + (matchMedia('(max-width: 760px)').matches ? '-mobile.webp' : '-desktop.webp');
}
function mobileVideoFile(stem) {
  const films = {'backdrop-process':'home-fill-montage','personal-event-loop':'personal-fill-montage','corporate-event-loop':'corporate-fill-montage'};
  return 'assets/films/' + films[stem] + (matchMedia('(max-width: 760px)').matches ? '-mobile.mp4' : '-desktop.mp4');
}
let userPaused = reducedMotion.matches || navigator.connection?.saveData === true;
if(processVideo && videoToggle) {
processVideo.muted = true;
processVideo.poster = filmPoster('home-fill-montage');
processVideo.src = mobileVideoFile('backdrop-process');
function updateVideoControl() {
  videoToggle.hidden = false;
  videoToggle.setAttribute('aria-label', processVideo.paused ? 'Play background video' : 'Pause background video');
  videoToggle.setAttribute('aria-pressed', String(processVideo.paused));
  videoToggle.querySelector('.video-control-icon').textContent = processVideo.paused ? '▷' : 'Ⅱ';
  videoToggle.querySelector('.video-control-label').textContent = processVideo.paused ? 'Play video' : 'Pause video';
}
function playProcessVideo() {processVideo.play().then(updateVideoControl).catch(updateVideoControl);}
if (userPaused) {processVideo.removeAttribute('autoplay');processVideo.pause();updateVideoControl();} else {playProcessVideo();}
processVideo.addEventListener('loadeddata', updateVideoControl);
processVideo.addEventListener('play', updateVideoControl);
processVideo.addEventListener('pause', updateVideoControl);
videoToggle.addEventListener('click', () => {userPaused = !processVideo.paused; if(userPaused)processVideo.pause();else playProcessVideo();});
processVideo.addEventListener('timeupdate', () => {const phaseLength=(Number.isFinite(processVideo.duration)&&processVideo.duration>0?processVideo.duration:32)/4;const phase=Math.min(3,Math.floor(processVideo.currentTime / phaseLength));document.querySelectorAll('[data-film-stage]').forEach(label=>label.classList.toggle('active', Number(label.dataset.filmStage) === phase));});
processVideo.addEventListener('error',()=>{document.querySelector('.hero-film').classList.add('video-unavailable');videoToggle.hidden=true;});
reducedMotion.addEventListener('change',event=>{userPaused=event.matches;if(userPaused)processVideo.pause();else playProcessVideo();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)processVideo.pause();else if(!userPaused)playProcessVideo();});

}
const strip = document.querySelector('.colour-strip');
const stripToggle = document.querySelector('.strip-toggle');
stripToggle?.addEventListener('click', () => {
  const paused = strip.classList.toggle('is-paused');
  stripToggle.setAttribute('aria-pressed', String(paused));
  stripToggle.setAttribute('aria-label', paused ? 'Resume scrolling text' : 'Pause scrolling text');
  stripToggle.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
});

const occasionNav = document.querySelector('.occasion-nav');
const occasionNavToggle = document.querySelector('.occasion-nav-toggle');
const occasionNavOptions = document.querySelector('#occasion-nav-options');
function closeOccasionNav() {
  occasionNavToggle.setAttribute('aria-expanded', 'false');
  occasionNavOptions.hidden = true;
}
occasionNavToggle.addEventListener('click', () => {
  const expanded = occasionNavToggle.getAttribute('aria-expanded') === 'true';
  occasionNavToggle.setAttribute('aria-expanded', String(!expanded));
  occasionNavOptions.hidden = expanded;
});
occasionNavToggle.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown') {
    event.preventDefault(); occasionNavToggle.setAttribute('aria-expanded', 'true');
    occasionNavOptions.hidden = false; occasionNavOptions.querySelector('a').focus();
  }
});
document.addEventListener('click', event => {if (!occasionNav.contains(event.target)) closeOccasionNav();});
occasionNav.addEventListener('focusout', event => {if (!occasionNav.contains(event.relatedTarget)) closeOccasionNav();});
occasionNav.addEventListener('keydown', event => {
  if (event.key === 'Escape') {event.preventDefault(); event.stopPropagation(); closeOccasionNav(); occasionNavToggle.focus();}
});

function updateOccasionFilm(key) {
  const video = document.querySelector('#occasion-video');
  if (!video) return;
  const kind = key === 'corporate' ? 'corporate' : 'personal';
  document.querySelector('.occasion-masthead').dataset.film = kind;
  const filmCredit = document.querySelector('#occasion-film-credit');
  if (filmCredit) filmCredit.textContent = kind === 'corporate' ? 'Portfolio photos · Art Illusion Pte Ltd production contributions' : 'Illustrative personal-event concepts';
  if (video.dataset.film === kind) return;
  video.dataset.film = kind;
  video.poster = filmPoster(kind === 'corporate' ? 'corporate-fill-montage' : 'personal-fill-montage');
  video.src = mobileVideoFile(kind + '-event-loop');
  video.muted = true;
  const shouldPlay = !matchMedia('(prefers-reduced-motion: reduce)').matches && navigator.connection?.saveData !== true && video.dataset.userPaused !== 'true';
  if (navigator.connection?.saveData && !video.dataset.userPaused) video.dataset.userPaused = 'true';
  video.autoplay = shouldPlay;
  video.load();
  if (shouldPlay) video.play().catch(() => {}); else video.pause();
}
const occasionFilm = document.querySelector('#occasion-video');
const occasionFilmToggle = document.querySelector('#occasion-film-toggle');
if (occasionFilm && occasionFilmToggle) {
  function updateOccasionFilmControl() {
    occasionFilmToggle.hidden = false;
    const paused = occasionFilm.paused;
    occasionFilmToggle.setAttribute('aria-label', paused ? 'Play occasion video' : 'Pause occasion video');
    occasionFilmToggle.setAttribute('aria-pressed', String(paused));
    occasionFilmToggle.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
    occasionFilmToggle.querySelector('.occasion-film-toggle-label').textContent = paused ? 'Play video' : 'Pause video';
  }
  occasionFilm.addEventListener('play', updateOccasionFilmControl);
  occasionFilm.addEventListener('pause', updateOccasionFilmControl);
  occasionFilm.addEventListener('loadeddata', updateOccasionFilmControl);
  occasionFilmToggle.addEventListener('click', () => {
    occasionFilm.dataset.userPaused = String(!occasionFilm.paused);
    occasionFilm.autoplay = occasionFilm.paused;
    if (occasionFilm.paused) occasionFilm.play().catch(updateOccasionFilmControl); else occasionFilm.pause();
  });
  reducedMotion.addEventListener('change', event => {
    occasionFilm.autoplay = !event.matches && occasionFilm.dataset.userPaused !== 'true';
    if(event.matches) occasionFilm.pause();
    else if(occasionFilm.dataset.userPaused !== 'true') occasionFilm.play().catch(() => {});
  });
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) occasionFilm.pause();
    else if(!reducedMotion.matches && occasionFilm.dataset.userPaused !== 'true') occasionFilm.play().catch(() => {});
  });
  occasionFilm.addEventListener('error', () => {occasionFilmToggle.hidden = true;});
  updateOccasionFilmControl();
}

const portfolioProject = new URLSearchParams(location.search).get("project");
const portfolioBrief = document.querySelector("[name=details]");
if (portfolioProject && portfolioBrief && !portfolioBrief.value) portfolioBrief.value = "Portfolio inspiration: " + portfolioProject.replaceAll("-", " ") + "\n";
