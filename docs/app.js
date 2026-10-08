const content = {
  "personal": {
    "label": "FOR LIFE’S HAPPY LITTLE MILESTONES",
    "title": "Personal moments.\nMade memorable.",
    "description": "Baby showers, anniversaries, birthdays, engagements and weddings. Bring your theme together with custom backdrops, signage and table decorations.",
    "categories": [
      {
        "name": "Baby showers",
        "description": "A sweet setting to welcome a little one.",
        "items": [
          "Baby shower backdrops",
          "Welcome & personalised signage",
          "Table decorations"
        ]
      },
      {
        "name": "Anniversaries",
        "description": "Celebrate another chapter of your story.",
        "items": [
          "Anniversary backdrops",
          "Personalised signage",
          "Table decorations"
        ]
      },
      {
        "name": "Birthdays",
        "description": "Bring your birthday theme to life, at any age.",
        "items": [
          "Birthday backdrops",
          "Name & welcome signage",
          "Table decorations"
        ]
      },
      {
        "name": "Engagements",
        "description": "Set the scene for the start of something special.",
        "items": [
          "Engagement backdrops",
          "Personalised signage",
          "Table decorations"
        ]
      },
      {
        "name": "Weddings",
        "description": "Thoughtful details for your big day.",
        "items": [
          "Wedding backdrops",
          "Welcome & event signage",
          "Table decorations"
        ]
      },
      {
        "name": "Table decorations",
        "description": "Carry your colours and theme through every table.",
        "items": [
          "Themed table styling",
          "Decorative table details",
          "Coordinated backdrop & signage styling"
        ]
      }
    ],
    "cta": "Plan your personal event",
    "service": "Personal event"
  },
  "corporate": {
    "label": "YOUR BRAND, CENTRE STAGE",
    "title": "Your business.\nBrought to life.",
    "description": "From event backdrops to everyday brand visibility, explore stickers, signboards, acrylic signages, window displays and banners made for your business.",
    "categories": [
      {
        "name": "Stickers",
        "description": "Turn everyday surfaces into spaces for your brand.",
        "items": [
          "Floor stickers",
          "Wall stickers",
          "Glass stickers",
          "Fridge stickers"
        ]
      },
      {
        "name": "Backdrops",
        "description": "Put your brand at the centre of the moment.",
        "items": [
          "Event & stage backdrops",
          "Branded photo backdrops",
          "Media walls"
        ]
      },
      {
        "name": "Signboards",
        "description": "Give your business a presence that stands out.",
        "items": [
          "LED",
          "Front lit",
          "Back lit",
          "Aluminium",
          "Stainless steel"
        ]
      },
      {
        "name": "Acrylic signages",
        "description": "A clean finish for your message and branding.",
        "items": [
          "Custom acrylic signage"
        ]
      },
      {
        "name": "Window displays",
        "description": "Create an eye-catching moment for your storefront.",
        "items": [
          "Branded window displays"
        ]
      },
      {
        "name": "Banners & display boards",
        "description": "Choose a material to suit your message and space.",
        "items": [
          "Foam board",
          "Fabric",
          "Vinyl",
          "PVC",
          "Kapaline"
        ]
      }
    ],
    "cta": "Plan your corporate project",
    "service": "Corporate event"
  }
};
function setOccasion(key, focus = false) {
  activeOccasion = key;
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
    card.append(heading, description, list); return card;
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
if(serviceSelect) serviceSelect.value = content[activeOccasion].service;
document.querySelector('#brief-form')?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target);const text=['BACKDROPPED — PROJECT BRIEF','','Name: '+data.get('name'),'Email: '+data.get('email'),'Service: '+data.get('service'),'Required date: '+(data.get('date')||'To be confirmed'),'','Project details:',data.get('details'),'','Prepared for discussion with backdropped.'].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='backdropped-project-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#brief-status').textContent='Your brief is ready to save. Keep it handy to share with backdropped.';});
const menu=document.querySelector('.menu-toggle');const navigation=document.querySelector('#navigation');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a').forEach(item=>item.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')&&document.querySelector('.occasion-nav-toggle').getAttribute('aria-expanded')!=='true'){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelector('#year').textContent = new Date().getFullYear();
const processVideo = document.querySelector('#process-video');
const videoToggle = document.querySelector('#video-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = reducedMotion.matches;
if(processVideo && videoToggle) {
processVideo.muted = true;
function updateVideoControl() {
  videoToggle.hidden = false;
  videoToggle.setAttribute('aria-label', processVideo.paused ? 'Play background video' : 'Pause background video');
  videoToggle.setAttribute('aria-pressed', String(processVideo.paused));
  videoToggle.querySelector('.video-control-icon').textContent = processVideo.paused ? '▷' : 'Ⅱ';
  videoToggle.querySelector('.video-control-label').textContent = processVideo.paused ? 'Play video' : 'Pause video';
}
function playProcessVideo() {processVideo.play().then(updateVideoControl).catch(updateVideoControl);}
if (reducedMotion.matches) {processVideo.removeAttribute('autoplay');processVideo.pause();} else {playProcessVideo();}
processVideo.addEventListener('loadeddata', updateVideoControl);
processVideo.addEventListener('play', updateVideoControl);
processVideo.addEventListener('pause', updateVideoControl);
videoToggle.addEventListener('click', () => {userPaused = !processVideo.paused; if(userPaused)processVideo.pause();else playProcessVideo();});
processVideo.addEventListener('timeupdate', () => {const phase=Math.min(3,Math.floor(processVideo.currentTime / 5));document.querySelectorAll('[data-film-stage]').forEach(label=>label.classList.toggle('active', Number(label.dataset.filmStage) === phase));});
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
