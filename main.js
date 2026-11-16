(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IT = window.I18N_IT || {};

  /* ---------- i18n: data-i18n keys (dictionary) + data-it inline ---------- */
  const keyed = [...document.querySelectorAll('[data-i18n]')];
  keyed.forEach(n => n.dataset.en = n.innerHTML);
  const inline = [...document.querySelectorAll('[data-it]')];
  inline.forEach(n => n.dataset.en = n.innerHTML);
  const phAttr = [...document.querySelectorAll('[data-ph-it]')];
  phAttr.forEach(n => n.dataset.phEn = n.getAttribute('placeholder') || '');
  const titleEn = document.title, titleIt = document.body.dataset.titleIt;
  let lang = 'en';
  const hooks = [];
  function setLang(l){
    lang = l; doc.lang = l;
    keyed.forEach(n => { const k = n.dataset.i18n; n.innerHTML = (l === 'it' && IT[k]) ? IT[k] : n.dataset.en; });
    inline.forEach(n => { n.innerHTML = l === 'it' ? n.dataset.it : n.dataset.en; });
    phAttr.forEach(n => n.setAttribute('placeholder', l === 'it' ? n.dataset.phIt : n.dataset.phEn));
    if (titleIt) document.title = l === 'it' ? titleIt : titleEn;
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    try{ localStorage.setItem('tr-lang', l) }catch(e){}
    hooks.forEach(f => f(l));
  }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  window.TR = { get lang(){ return lang }, onLang: f => hooks.push(f), IT };

  /* ---------- nav ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive:true }); onScroll();
  const burger = document.querySelector('.burger'), menu = document.getElementById('mobileMenu');
  const closeMenu = () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); document.body.style.overflow=''; };
  burger.addEventListener('click', () => { const o = !menu.classList.contains('open'); menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  const dd = document.querySelector('.dd');
  if (dd) {
    const btn = dd.querySelector('.dd-btn');
    btn.addEventListener('click', e => { e.stopPropagation(); const o = !dd.classList.contains('open'); dd.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); });
    document.addEventListener('click', e => { if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') dd.classList.remove('open'); });
  }

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el); });
  document.querySelectorAll('.steps').forEach(steps => new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) steps.style.setProperty('--prog','100%'); }), { threshold:.3 }).observe(steps));

  /* ---------- inline videos ---------- */
  const hover = matchMedia('(hover:hover)').matches;
  document.querySelectorAll('.reel, .spaces-media, .vid-auto').forEach(el => {
    const v = el.querySelector('video'); if (!v) return;
    if (hover && el.classList.contains('reel')) {
      el.addEventListener('mouseenter', () => { v.preload='auto'; v.play().catch(()=>{}); });
      el.addEventListener('mouseleave', () => v.pause());
    } else {
      new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !reduce){ v.preload='auto'; v.play().catch(()=>{}); } else v.pause(); }), { threshold:.4 }).observe(el);
    }
    if (el.classList.contains('reel')) el.addEventListener('click', () => v.paused ? v.play() : v.pause());
  });

  /* ---------- ads hero stage ---------- */
  const stage = document.getElementById('stage');
  if (stage) {
    const phones = [...stage.querySelectorAll('.phone')];
    const dots = document.getElementById('dots');
    const label = document.getElementById('styleLabel');
    const DUR = 4500; let active = 0, timer;
    phones.forEach((p, i) => { const b = document.createElement('button'); b.setAttribute('aria-label', p.dataset.label); b.innerHTML = '<i></i>'; b.onclick = () => go(i); dots.appendChild(b); p.addEventListener('click', () => go(i)); });
    dots.style.setProperty('--dur', DUR + 'ms');
    const updateLabel = () => { const p = phones[active]; const k = p.dataset.i18nLabel; label.textContent = (lang === 'it' && IT[k]) ? IT[k] : p.dataset.label; };
    function go(i){
      active = (i + phones.length) % phones.length;
      const n = phones.length;
      phones.forEach((p, j) => {
        const k = (j - active + n) % n;
        const pos = k === 0 ? 0 : k === 1 ? 1 : k === n - 1 ? 2 : k === 2 ? 3 : -1;
        p.className = 'phone ' + (pos < 0 ? 'px' : 'p' + pos);
        const v = p.querySelector('video');
        if (pos >= 0 && !v.getAttribute('src') && v.dataset.src) v.src = v.dataset.src;
        if (pos === 0) { v.preload = 'auto'; try { v.currentTime = 0 } catch(e){} v.play().catch(()=>{}); }
        else if (pos === 1 || pos === 2) { v.preload = 'auto'; v.play().catch(()=>{}); }
        else v.pause();
      });
      [...dots.children].forEach((d, j) => { d.classList.remove('on'); void d.offsetWidth; d.classList.toggle('on', j === active); });
      updateLabel();
      clearTimeout(timer); if (!reduce) timer = setTimeout(() => go(active + 1), DUR);
    }
    hooks.push(updateLabel);
    const swapWord = document.getElementById('swapWord');
    if (swapWord) hooks.push(l => swapWord.textContent = l === 'it' ? 'fermano' : 'stop');
    new IntersectionObserver(es => es.forEach(e => phones.forEach(p => { const v = p.querySelector('video'); if (!e.isIntersecting) v.pause(); else if (p.classList.contains('p0')||p.classList.contains('p1')||p.classList.contains('p2')) v.play().catch(()=>{}); }))).observe(stage);
    go(0);
  }

  /* ---------- forms -> mailto ---------- */
  document.querySelectorAll('form[data-mailto]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    let ok = true;
    ['name','email'].forEach(k => { const el = form.elements[k]; if (!el) return; const bad = !el.value.trim() || (k==='email' && !el.checkValidity()); el.classList.toggle('err', bad); if (bad) ok = false; });
    if (!ok) return;
    const topic = form.dataset.mailto;
    const subj = `${topic} — ${f.company || f.product || f.link || f.name}`;
    const body = Object.entries(f).filter(([,v]) => v).map(([k,v]) => `${k}: ${v}`).join('\n');
    location.href = `mailto:hello@thinridge.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  }));

  /* ---------- init ---------- */
  let saved = null; try{ saved = localStorage.getItem('tr-lang') }catch(e){}
  setLang(saved || ((navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en'));
  requestAnimationFrame(() => requestAnimationFrame(() => doc.classList.add('loaded')));
})();
