(function(w,d){
if(w.CoolBrew&&w.CoolBrew._bridgeReady)return;
var FOOT={
 tr:'Horecare / CoolBrew verilerine göre. Toptan 50 L+. Porsiyon maliyeti standart dozda (çay 20 ml, kahve 20 ml). «~28 TL» geleneksel fincan — tam maliyet (makine+barista). Rakamlar tahminidir, teklif değildir.',
 ru:'По данным Horecare / CoolBrew. Опт от 50 л. Себестоимость порции при стандартной дозе (чай 20 мл, кофе 20 мл). «~28 TL» за чашку на зерне — полная себестоимость. Цифры ориентировочные, не оферта.'
};
var PAGE={
 tr:{
  title:'Konsantre kahve & çay',
  sub:'Barista ve makine yatırımı olmadan — stabil tat, düşük food cost',
  docTitle:'CoolBrew / Horecare — Konsantre Kahve & Çay',
  nav:{cbadv:'Avantajlar',cbbiz:'İşletmeler',cbvs2:'Karşılaştırma',cbcat:'Katalog',cbdz:'Dozaj',cbstp:'Geçiş',cbroi:'ROI',cbfc:'Hesaplayıcı',cbfaq:'SSS'},
  promptHint:'Danışmanlık talebi — chat widget veya e-posta ile yanıtlayın.',
  footer:'Horecare / CoolBrew'
 },
 ru:{
  title:'Концентрат кофе и чая',
  sub:'Без бариста и кофемашины — стабильный вкус, низкий фудкост',
  docTitle:'CoolBrew / Horecare — Концентрат кофе и чая',
  nav:{cbadv:'Преимущества',cbbiz:'Сегменты',cbvs2:'Сравнение',cbcat:'Каталог',cbdz:'Дозировки',cbstp:'Внедрение',cbroi:'ROI',cbfc:'Калькулятор',cbfaq:'FAQ'},
  promptHint:'Запрос консультации — ответьте через чат или e-mail.',
  footer:'Horecare / CoolBrew'
 }
};
function readSavedLang(){
 try{var s=localStorage.getItem('coolbrew_lang');if(s==='ru'||s==='tr')return s;}catch(e){}
 return 'tr';
}
var cb={
 _lang:readSavedLang(),
 ASSETS:{coffee:'assets/coffee-box.png'},
 FOOT:FOOT,
 PAGE:PAGE,
 _bridgeReady:true,
 scroll:function(id){var e=d.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'});},
 emit:function(t,dt){d.dispatchEvent(new CustomEvent('coolbrew:'+t,{detail:dt||{},bubbles:true}));},
 on:function(t,fn){d.addEventListener('coolbrew:'+t,function(e){fn(e.detail||{});});},
 calc:function(p){this.emit('calc',p);this.scroll('cbfc');},
 prompt:function(t){
  if(typeof w.sendPrompt==='function'){w.sendPrompt(t);return;}
  var el=d.getElementById('cb-prompt-fallback'),txt=d.getElementById('cb-prompt-text');
  if(el&&txt){txt.textContent=t;el.hidden=false;el.scrollIntoView({behavior:'smooth',block:'nearest'});}
 },
 lang:function(){return this._lang;},
 setLang:function(l){
  if(l!=='tr'&&l!=='ru')l='tr';
  var changed=this._lang!==l;
  this._lang=l;
  try{localStorage.setItem('coolbrew_lang',l);}catch(e){}
  updateSiteChrome();
  if(changed)this.emit('lang',{lang:l});
 }
};
function updateSiteChrome(){
 var l=cb._lang,p=PAGE[l]||PAGE.tr;
 d.documentElement.lang=l;
 if(d.title!==p.docTitle)d.title=p.docTitle;
 var t=d.getElementById('cb-site-title');if(t)t.textContent=p.title;
 var s=d.getElementById('cb-site-sub');if(s)s.textContent=p.sub;
 var f=d.getElementById('cb-site-footer');if(f)f.textContent=p.footer;
 var h=d.getElementById('cb-prompt-hint');if(h)h.textContent=p.promptHint;
 d.querySelectorAll('[data-nav]').forEach(function(a){
  var k=a.getAttribute('data-nav');
  if(p.nav[k])a.textContent=p.nav[k];
 });
 d.querySelectorAll('.cb-site-lang').forEach(function(b){
  var on=b.getAttribute('data-lang')===l;
  b.classList.toggle('on',on);
  b.setAttribute('aria-pressed',on?'true':'false');
 });
}
w.CoolBrew=cb;
function ensureFloatLang(){
 if(d.querySelector('.cb-site-langbar')||d.getElementById('cb-float-lang')||!d.body)return;
 var f=d.createElement('div');
 f.id='cb-float-lang';
 f.setAttribute('role','group');
 f.setAttribute('aria-label','Language');
 f.innerHTML='<button type="button" class="cb-site-lang" data-lang="tr">TR</button><button type="button" class="cb-site-lang" data-lang="ru">RU</button>';
 f.style.cssText='position:fixed;bottom:16px;right:16px;z-index:9999;display:flex;gap:6px;padding:6px;background:rgba(250,248,245,.95);border:1px solid #e7e1d8;border-radius:24px;box-shadow:0 4px 16px rgba(0,0,0,.08)';
 d.body.appendChild(f);
}
function initSite(){
 ensureFloatLang();
 updateSiteChrome();
}
if(!d._cbLangClick){
 d._cbLangClick=true;
 d.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.cb-site-lang');
  if(b)cb.setLang(b.getAttribute('data-lang'));
 });
}
d.addEventListener('coolbrew:lang',function(e){
 if(e.detail&&e.detail.lang&&e.detail.lang!==cb._lang){
  cb._lang=e.detail.lang;
  updateSiteChrome();
 }
});
function boot(){initSite();}
function onReady(fn){
 if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',fn);
 else fn();
}
onReady(boot);
})(window,document);
