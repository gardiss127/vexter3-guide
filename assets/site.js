const langKey='vxtr-language';
function lang(){try{return localStorage.getItem(langKey)==='fr'?'fr':'en'}catch(e){return 'en'}}
function applyLanguage(){
 const l=lang();document.documentElement.lang=l;
 document.querySelectorAll('[data-lang]').forEach(el=>{el.hidden=el.dataset.lang!==l});
 document.querySelectorAll('[data-en][data-fr]').forEach(el=>{el.textContent=el.dataset[l]});
 document.querySelectorAll('[data-set-language]').forEach(b=>{const active=b.dataset.setLanguage===l;b.setAttribute('aria-pressed',String(active));b.classList.toggle('active',active)});
 document.querySelectorAll('.head-links a').forEach(a=>{const t=a.dataset[l];if(t)a.textContent=t});
}
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-set-language]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem(langKey,b.dataset.setLanguage)}catch(e){}applyLanguage();if(typeof runSearch==='function')runSearch()}));
 document.querySelector('#menuToggle')?.addEventListener('click',()=>document.querySelector('.head-links')?.classList.toggle('open'));
 applyLanguage();
});
