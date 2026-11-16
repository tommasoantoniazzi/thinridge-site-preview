(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- i18n ---------- */
  const IT = {
    'nav.work':'Lavori','nav.services':'Servizi','nav.process':'Processo','nav.pricing':'Prezzi',
    'cta.idea_short':'Idea gratis','cta.idea':'Ricevi un’idea di ad gratis','cta.work':'Guarda i lavori','cta.call':'Prenota una call','cta.quote':'Chiedi un preventivo',
    'hero.eyebrow':'Studio video AI · Ads animate e statiche',
    'hero.t1':'Ads animate','hero.t2':'che','hero.t3':'lo scroll.',
    'hero.sub':'Trasformiamo il tuo prodotto in video ads animate e static ads, in qualsiasi stile: stile Pixar, claymation, lana lavorata a maglia, 3D. Fatte con i migliori strumenti video AI, rifinite a mano.',
    'fact.1a':'3–7 giorni','fact.1b':'dallo storyboard approvato all’ad finita','fact.2a':'Prezzo fisso','fact.2b':'una proposta chiara, niente pacchetti','fact.3a':'100% tuo','fact.3b':'usa i file su qualsiasi canale',
    'style.pixar':'Stile Pixar','style.clay':'Claymation','style.wool':'Lana lavorata a maglia','style.3d':'Ad visual 3D',
    'tag.hook':'Hook','tag.format':'9:16 · pronto per Reels e TikTok',
    'hero.who':'Con chi lavoriamo','seg.1':'Brand TikTok Shop','seg.2':'Brand DTC','seg.3':'Dropshipping','seg.4':'Aziende manifatturiere',
    'work.t1':'Un prodotto.','work.t2':'Qualsiasi stile.','work.sub':'Lavori video recenti, organizzati per stile visivo. Passa sopra o tocca per riprodurre.',
    'spaces.chip':'Walkthrough POV · Appartamento a Venezia','spaces.k':'Spazi','spaces.t':'Walkthrough e render 3D per spazi reali.',
    'spaces.p':'Walkthrough in POV e render 3D cinematografici che mostrano un appartamento, una camera d’hotel o un affitto prima che qualcuno ci entri. Per annunci Airbnb, hotel, immobiliare e affitti brevi.',
    'svc.t1':'Creatività che vende,','svc.t2':'alla velocità con cui testi.',
    'svc.v.k':'Servizio principale','svc.v.t':'Video ads animate con l’AI','svc.v.p':'Ads animate costruite attorno a prodotto, messaggio, pubblico e obiettivo della campagna. Più veloci di uno shooting tradizionale, con più varianti da testare.',
    'fmt.1':'Ads animate per i social a pagamento','fmt.2':'Video prodotto animati','fmt.3':'Scene AI cinematografiche','fmt.4':'Video ads in stile UGC',
    'svc.s.k':'Insieme a ogni video','svc.s.t':'Static ads','svc.s.p':'Ads immagine per feed, stories e caroselli, create con gli stessi personaggi, scene e hook dei tuoi video, così ogni posizionamento sembra una sola campagna.',
    'svc.p.k':'Per brand che hanno bisogno di volume','svc.p.t':'Pipeline creativa mensile','svc.p.p':'Un sistema ripetibile che produce nuove ads e varianti ogni mese senza ripartire da zero: template coerenti col brand, varianti creative da testare.',
    'svc.a.k':'Sempre da Thinridge','svc.a.t':'Soluzioni AI per le aziende','svc.a.p':'Agenti AI su misura, automazione dei processi e assistenti sulla vostra conoscenza, dal primo audit all’uso quotidiano.',
    'tools':'Strumenti che usiamo',
    'proc.t1':'Dall’idea','proc.t2':'all’ad finita.',
    'st.1t':'Strategia','st.1p':'Prodotto, pubblico, offerta e direzione visiva.','st.2t':'Script e storyboard','st.2p':'Hook, script, scene e concept di movimento, approvati da te.',
    'st.3t':'Produzione AI','st.3p':'Scene animate, visual di prodotto e frame statici.','st.4t':'Montaggio e consegna','st.4p':'Rifinite, nei formati di ogni posizionamento, pronte da pubblicare.',
    'proc.note':'La maggior parte delle video ads brevi è pronta in 3–7 giorni lavorativi dallo storyboard approvato.',
    'idea.k':'Gratis, senza impegno','idea.t1':'Mandaci il tuo prodotto.','idea.t2':'Ti mandiamo un’idea di ad.',
    'idea.p':'Dicci cosa vendi e dove fai pubblicità. Ti rispondiamo con un concept di ad animata pensata per il tuo brand, e un orario per una call se vuoi realizzarla.',
    'idea.l1':'Un hook e una scena, scritti per il tuo prodotto','idea.l2':'Lo stile visivo che useremmo e perché','idea.l3':'Risposta entro 1 giorno lavorativo',
    'f.name':'Nome','f.email':'Email','f.link':'Link del negozio o sito','f.product':'Quale prodotto deve vendere l’ad?','f.budget':'Spesa ads mensile','f.b0':'Seleziona',
    'f.note':'Apre la tua app email con i dati già compilati. Oppure scrivi a hello@thinridge.com',
    'pr.t1':'Nessun listino.','pr.t2':'Una proposta a prezzo fisso.',
    'pr.p':'Ogni preventivo è costruito sulla tua azienda: il lavoro in sé, come funziona l’azienda, il volume e i tempi che ti servono. Dopo una prima call mandiamo un solo documento con scope, tempistiche e prezzo fisso.',
    'q1':'Perché non mostrate i prezzi?','a1':'Perché due aziende raramente hanno bisogno della stessa cosa. Un listino farebbe pagare troppo i casi semplici o sottovaluterebbe quelli complessi. Il prezzo arriva dopo che abbiamo capito il lavoro.',
    'q2':'In quanto tempo consegnate?','a2':'Dipende dallo scope. La maggior parte delle video ads brevi è pronta in 3–7 giorni lavorativi dallo storyboard approvato; i progetti più grandi seguono le tempistiche concordate nella proposta.',
    'q3':'Quello che consegnate è mio?','a3':'Sì. Video e immagini finali sono tuoi, da usare in ads a pagamento, sui social e sui tuoi canali.',
    'q4':'Quali strumenti AI usate?','a4':'Lavoriamo con i migliori strumenti video AI, tra cui Kling, Veo, Seedance, Runway, Sora e Pika, uniti a direzione creativa, scene design e montaggio curato.',
    'fin.t1':'La tua prossima ad vincente','fin.t2':'parte da un’idea.',
    'foot.tag':'Video ads animate e static ads con l’AI, con uno studio fatto per il video.','foot.nav':'Naviga','foot.contact':'Contatti','foot.remote':'Da remoto, in tutto il mondo','foot.rights':'Tutti i diritti riservati.','foot.top':'Torna su ↑'
  };
  const swapWord = document.getElementById('swapWord');
  const SWAP = { en:'stop', it:'fermano' };
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  nodes.forEach(n => n.dataset.en = n.innerHTML);
  let lang = 'en';
  function setLang(l){
    lang = l; doc.lang = l;
    nodes.forEach(n => { const k = n.dataset.i18n; n.innerHTML = (l === 'it' && IT[k]) ? IT[k] : n.dataset.en; });
    swapWord.textContent = SWAP[l];
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    try{ localStorage.setItem('tr-lang', l) }catch(e){}
    updateLabel();
  }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- nav ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive:true }); onScroll();
  const burger = document.querySelector('.burger'), menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => { const o = !menu.classList.contains('open'); menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); document.body.style.overflow=''; }));

  /* ---------- hero stage ---------- */
  const phones = [...document.querySelectorAll('.phone')];
  const dots = document.getElementById('dots');
  const label = document.getElementById('styleLabel');
  const DUR = 4500;
  let active = 0, timer;
  phones.forEach((p, i) => { const b = document.createElement('button'); b.setAttribute('aria-label', p.dataset.label); b.innerHTML = '<i></i>'; b.onclick = () => go(i); dots.appendChild(b); p.addEventListener('click', () => go(i)); });
  dots.style.setProperty('--dur', DUR + 'ms');
  function updateLabel(){ const p = phones[active]; const k = p.dataset.i18nLabel; label.textContent = (lang === 'it' && IT[k]) ? IT[k] : p.dataset.label; }
  function go(i){
    active = (i + phones.length) % phones.length;
    phones.forEach((p, j) => {
      const pos = [0,1,3,2][(j - active + phones.length) % phones.length];
      p.className = 'phone p' + pos;
      const v = p.querySelector('video');
      if (pos === 0) { v.preload = 'auto'; v.currentTime = 0; v.play().catch(()=>{}); }
      else if (pos === 3) v.pause();
      else { v.play().catch(()=>{}); }
    });
    [...dots.children].forEach((d, j) => { d.classList.remove('on'); void d.offsetWidth; d.classList.toggle('on', j === active); });
    updateLabel();
    clearTimeout(timer); if (!reduce) timer = setTimeout(() => go(active + 1), DUR);
  }

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el); });
  const steps = document.querySelector('.steps');
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) steps.style.setProperty('--prog','100%'); }), { threshold:.3 }).observe(steps);

  /* ---------- work videos: play in view (mobile) / on hover (desktop) ---------- */
  const hover = matchMedia('(hover:hover)').matches;
  document.querySelectorAll('.reel, .spaces-media').forEach(el => {
    const v = el.querySelector('video');
    if (hover && el.classList.contains('reel')) {
      el.addEventListener('mouseenter', () => { v.preload='auto'; v.play().catch(()=>{}); });
      el.addEventListener('mouseleave', () => v.pause());
    } else {
      new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !reduce){ v.preload='auto'; v.play().catch(()=>{}); } else v.pause(); }), { threshold:.5 }).observe(el);
    }
    el.addEventListener('click', () => v.paused ? v.play() : v.pause());
  });
  // pause hero videos when offscreen
  const stage = document.getElementById('stage');
  let stageVisible = true;
  new IntersectionObserver(es => es.forEach(e => { stageVisible = e.isIntersecting; phones.forEach(p => { const v = p.querySelector('video'); if (!stageVisible) v.pause(); else if (!p.classList.contains('p3')) v.play().catch(()=>{}); }); })).observe(stage);

  /* ---------- form -> mailto ---------- */
  const form = document.getElementById('ideaForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    let ok = true;
    ['name','email'].forEach(k => { const el = form.elements[k]; const bad = !el.value.trim() || (k==='email' && !el.checkValidity()); el.classList.toggle('err', bad); if (bad) ok = false; });
    if (!ok) return;
    const subj = (lang === 'it' ? 'Idea di ad gratis — ' : 'Free ad idea — ') + (f.product || f.link || f.name);
    const body = `Name: ${f.name}\nEmail: ${f.email}\nStore / website: ${f.link}\nProduct: ${f.product}\nMonthly ad spend: ${f.budget}\n`;
    location.href = `mailto:hello@thinridge.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });

  /* ---------- init ---------- */
  let saved = null; try{ saved = localStorage.getItem('tr-lang') }catch(e){}
  setLang(saved || ((navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en'));
  go(0);
  requestAnimationFrame(() => requestAnimationFrame(() => doc.classList.add('loaded')));
})();
