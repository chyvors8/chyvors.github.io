const dialog = document.querySelector('#brief-dialog');
const serviceSelect = document.querySelector('#brief-service');
let activeOccasion = 'personal';
let previousFocus;
const content = {
  personal: {label:'FOR LIFE’S HAPPY LITTLE MILESTONES', title:'More than a party.\nA memory in the making.', description:'A first birthday. A big “I do”. An excuse to get everyone together. Let’s turn your theme, colours and personal touches into a scene you’ll love looking back on.', items:['Birthday & milestone celebrations','Weddings & engagement parties','Baby showers & family gatherings'], cta:'Plan your celebration', service:'Personal celebration'},
  corporate: {label:'YOUR BRAND, CENTRE STAGE', title:'Bring your brand.\nWe’ll bring the presence.', description:'From your next launch to your annual company celebration, create a setting that feels unmistakably yours. Bring your brand guidelines and big ideas; we’ll help them take shape.', items:['Product launches & brand activations','Company dinners & award ceremonies','Conference backdrops & media walls'], cta:'Plan your brand moment', service:'Corporate event'},
  signage: {label:'SOMETHING WORTH NOTICING', title:'Say it clearly.\nMake it memorable.', description:'Welcome your guests, guide your visitors or give your brand a place to shine. We create custom signs and display graphics that fit your message, your space and your style.', items:['Welcome & directional signage','Custom lettering & brand displays','Printed panels & display graphics'], cta:'Create your custom signage', service:'Signage & display'}
};
function setOccasion(key, focus = false) {
  activeOccasion = key;
  const data = content[key];
  document.querySelectorAll('[data-tab]').forEach(button => {const selected = button.dataset.tab === key; button.setAttribute('aria-selected', String(selected));button.tabIndex = selected ? 0 : -1;if(selected && focus) button.focus();});
  document.querySelector('#occasion-panel').setAttribute('aria-labelledby', 'tab-' + key);
  document.querySelector('#occasion-label').textContent = data.label;
  const title = document.querySelector('#occasion-title');title.replaceChildren();data.title.split('\n').forEach((line,i)=>{if(i)title.append(document.createElement('br'));title.append(document.createTextNode(line));});
  document.querySelector('#occasion-description').textContent = data.description;
  document.querySelector('#occasion-list').replaceChildren(...data.items.map(item=>{const li=document.createElement('li');li.textContent=item;return li;}));
  document.querySelector('#occasion-cta').textContent = data.cta;
}
document.querySelectorAll('[data-tab]').forEach((button,index,buttons)=>{
  button.addEventListener('click',()=>setOccasion(button.dataset.tab));
  button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%buttons.length;if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;if(event.key==='Home')next=0;if(event.key==='End')next=buttons.length-1;if(next!==undefined){event.preventDefault();setOccasion(buttons[next].dataset.tab,true);}});
});
document.querySelectorAll('[data-occasion]').forEach(button=>button.addEventListener('click',()=>{setOccasion(button.dataset.occasion);document.querySelector('#occasions').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
document.querySelectorAll('[data-open-brief]').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;serviceSelect.value=content[activeOccasion].service;document.querySelector('#brief-status').textContent='';dialog.showModal();document.body.classList.add('dialog-open');}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');previousFocus?.focus();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
document.querySelector('#brief-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target);const text=['BACKDROPPED — PROJECT BRIEF','','Name: '+data.get('name'),'Email: '+data.get('email'),'Service: '+data.get('service'),'Required date: '+(data.get('date')||'To be confirmed'),'','Project details:',data.get('details'),'','Prepared for discussion with backdropped.'].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='backdropped-project-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#brief-status').textContent='Your brief is ready to save. Keep it handy to share with backdropped.';});
const menu=document.querySelector('.menu-toggle');const navigation=document.querySelector('#navigation');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a,button').forEach(item=>item.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelector('#year').textContent = new Date().getFullYear();
const processVideo = document.querySelector('#process-video');
const videoToggle = document.querySelector('#video-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = reducedMotion.matches;
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
