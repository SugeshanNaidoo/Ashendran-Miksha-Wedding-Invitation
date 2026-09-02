/* ------------------------------------------------------------------
   Ashendran & Miksha — web tri-fold
   Every text position below is lifted straight from the print PDF,
   in PDF points. Panels declare the source rectangle they were cut
   from, so the type lands exactly where the printer put it.
   ------------------------------------------------------------------ */

const PANELS = {
  back:    { x:  12.7, y: 17.2, w: 341.1, h: 505.3 },
  credits: { x: 377.2, y: 17.2, w: 360.0, h: 504.8 },
  cover:   { x: 761.2, y: 17.2, w: 341.4, h: 505.3 },
  details: { x:  17.2, y: 17.2, w: 360.0, h: 504.8 },
  names:   { x: 377.2, y: 17.2, w: 360.0, h: 504.8 },
  rsvp:    { x: 737.2, y: 17.2, w: 360.0, h: 504.8 }
};

/* fit:"track" keeps the type size honest and tunes letter-spacing to
   match the printed width. fit:"size" scales the whole glyph, used for
   the scripts where tracking would break the joins. */
const SERIF  = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Sacramento', cursive";
const LORA   = "'Lora', Georgia, serif";
const PARIS  = "'Parisienne', cursive";

const MAROON = '#5e0018', BROWN = '#331502', GOLD = '#c5904b',
      COPPER = '#c07d42', TAN = '#a17141';

const TEXT = [
  // ---- cover ----
  { p:'cover', t:'TWO SOULS. ONE PROMISE.', b:[831,164,1028,181], f:LORA, s:12.5, c:COPPER, ls:.04, fit:'track' },
  { p:'cover', t:'a date with destiny',     b:[853,189,1010,221], f:PARIS, s:23.5, c:COPPER, fit:'size' },

  // ---- credits ----
  { p:'credits', t:'Designed By :', b:[453,484,541,500], f:SERIF, s:12.5, c:MAROON, fit:'track' },

  // ---- details ----
  { p:'details', t:'Join us as sacred rituals mark the', b:[60,97,302,115],  f:SERIF, s:13.5, c:MAROON, fit:'track' },
  { p:'details', t:'beginning of a beautiful journey',  b:[65,116,296,134],  f:SERIF, s:13.5, c:MAROON, fit:'track' },
  { p:'details', t:'06',        b:[157,137,205,244], f:SERIF, s:48.5, c:MAROON, w:500, fit:'track' },
  { p:'details', t:'DEC 2026',  b:[116,222,245,289], f:SERIF, s:30.2, c:MAROON, w:500, ls:.03, fit:'track' },
  { p:'details', t:'AT 1:30 PM',b:[120,295,242,344], f:SERIF, s:22.1, c:BROWN,  ls:.06, fit:'track' },
  { p:'details', t:'Venue',     b:[135,349,227,421], f:SCRIPT, s:54.6, c:GOLD, fit:'size' },
  { p:'details', t:'CATO MANOR HINDU TEMPLE,',   b:[61,438,300,469], f:SERIF, s:14.2, c:BROWN, ls:.08, fit:'track',
    href:'https://www.google.com/maps/search/?api=1&query=Cato+Manor+Hindu+Temple%2C+588+Vusi+Mzimela+Rd%2C+Durban%2C+4091' },
  { p:'details', t:'588 VUSI MZIMELA RD, DURBAN,', b:[50,457,311,488], f:SERIF, s:14.2, c:BROWN, ls:.08, fit:'track',
    href:'https://www.google.com/maps/search/?api=1&query=Cato+Manor+Hindu+Temple%2C+588+Vusi+Mzimela+Rd%2C+Durban%2C+4091' },
  { p:'details', t:'4091', b:[164,477,197,508], f:SERIF, s:14.2, c:BROWN, ls:.08, fit:'track' },

  // ---- names ----
  { p:'names', t:'We cordially invite you to witness', b:[436,83,679,101],  f:SERIF, s:13.5, c:MAROON, fit:'track' },
  { p:'names', t:'the marriage of',                    b:[502,102,613,120], f:SERIF, s:13.5, c:MAROON, fit:'track' },
  { p:'names', t:'ASHENDRAN NAIDOO', b:[434,123,681,151], f:SERIF, s:21.6, c:MAROON, ls:.06, fit:'track' },
  { p:'names', t:'Son of Kogie Naidoo',       b:[493,152,622,168], f:SERIF, s:11.9, c:MAROON, fit:'track' },
  { p:'names', t:'&',                          b:[552,169,563,184], f:SERIF, s:11.9, c:MAROON, fit:'track' },
  { p:'names', t:'The late Srinivasan Naidoo', b:[473,185,642,201], f:SERIF, s:11.9, c:MAROON, fit:'track' },
  { p:'names', t:'and', b:[540,191,575,234], f:SCRIPT, s:33, c:TAN, fit:'size' },
  { p:'names', t:'MIKSHA RAVJEE', b:[467,231,648,259], f:SERIF, s:21.6, c:MAROON, ls:.06, fit:'track' },
  { p:'names', t:'Daughter of the late Shivani Ravjee',       b:[446,268,669,283], f:SERIF, s:11.9, c:MAROON, fit:'track' },
  { p:'names', t:'&',                                          b:[552,284,563,300], f:SERIF, s:11.9, c:MAROON, fit:'track' },
  { p:'names', t:'Granddaughter of the late Kausalia Rajdeo',  b:[422,301,693,316], f:SERIF, s:11.9, c:MAROON, fit:'track' },

  // ---- rsvp ----
  { p:'rsvp', t:'Kindly RSVP before 25th October', b:[807,97,1051,117], f:SERIF, s:13.5, c:MAROON, i:1, fit:'track' },
  { p:'rsvp', t:'Groom : 000 - 000 - 0000', b:[794,126,1064,175], f:SCRIPT, s:37.6, c:GOLD, fit:'size',
    enc:'R3Jvb20gOiAwODIgLSA3NzEgLSA1ODc5', encHref:'dGVsOisyNzgyNzcxNTg3OQ==' },
  { p:'rsvp', t:'Bride : 000 - 000 - 0000', b:[785,178,1072,228], f:SCRIPT, s:37.6, c:GOLD, fit:'size',
    enc:'QnJpZGUgOiAwNjIgLSA3NzggLSAyMTIy', encHref:'dGVsOisyNzYyNzc4MjEyMg==' },
  { p:'rsvp', t:'ADM : ________', b:[867,237,991,261], f:SERIF, s:16.5, c:MAROON, i:1, ls:.02, fit:'track', id:'adm' },
  { p:'rsvp', t:'Your presence would be greatly appreciated', b:[780,274,1078,290], f:SERIF, s:12.5, c:MAROON, fit:'track' }
];

/* ---------- build the type layer ---------- */

const built = [];

function build(){
  // optional personalisation:  invite.html?adm=The Naidoo Family
  const guest = new URLSearchParams(location.search).get('adm');

  for (const item of TEXT){
    const host = document.querySelector(`.panel[data-panel="${item.p}"]`);
    if (!host) continue;

    const P  = PANELS[item.p];
    const [x0,y0,x1,y1] = item.b;
    const cx = ((x0 + x1) / 2 - P.x) / P.w * 100;
    const cy = ((y0 + y1) / 2 - P.y) / P.h * 100;

    const el = document.createElement(item.href || item.encHref ? 'a' : 'span');
    el.className = 't' + (item.href || item.encHref ? ' t--link' : '');
    el.textContent = (item.id === 'adm' && guest) ? `ADM : ${guest}` : item.t;
    if (item.href){
      el.href = item.href;
      if (item.href.startsWith('http')){ el.target = '_blank'; el.rel = 'noopener'; }
    }

    el.style.left = cx + '%';
    el.style.top  = cy + '%';
    el.style.fontFamily = item.f;
    el.style.fontWeight = item.w || 400;
    el.style.fontStyle  = item.i ? 'italic' : 'normal';
    el.style.color = item.c;
    el.style.fontSize = (item.s / P.w * 100) + 'cqw';
    if (item.ls) el.style.letterSpacing = item.ls + 'em';
    el.style.transform = 'translate(-50%,-50%)';

    host.appendChild(el);
    built.push({ el, item, P, target: (x1 - x0) / P.w });   // target width as a fraction of the panel
  }
}

/* Match the printed line widths once the real fonts have loaded. */
function fitOne(rec){
  const panelPx = rec.el.parentElement.offsetWidth;   // layout width, unaffected by the 3D transforms
  if (!panelPx) return;
  const want = rec.target * panelPx;                  // the width this line has in print
  if (!rec.el.offsetWidth) return;

  // Serif lines: keep the type size honest and spend the difference on tracking.
  if (rec.item.fit === 'track'){
    rec.el.style.letterSpacing = (rec.item.ls || 0) + 'em';
    const have   = rec.el.offsetWidth;
    const chars  = Math.max(rec.el.textContent.length - 1, 1);
    const fontPx = parseFloat(getComputedStyle(rec.el).fontSize);
    const ls     = (rec.item.ls || 0) + (want - have) / chars / fontPx;
    if (ls > -0.06 && ls < 0.32){
      rec.el.style.letterSpacing = ls.toFixed(4) + 'em';
      rec.el.style.transform = `translate(-50%,-50%) translateX(${(ls * fontPx) / 2}px)`;
      return;
    }
    rec.el.style.letterSpacing = (rec.item.ls || 0) + 'em';   // too much tracking; scale instead
  }

  /* Script faces: scale the glyphs to the printed width. This converges
     rather than guessing, because the substitute faces differ from the
     originals by more than a single correction can cover -- Sacramento
     runs much wider than JimmyScript, and a one-shot estimate left the
     RSVP numbers hanging off both edges of the panel. */
  const base = rec.item.s / rec.P.w * 100;            // cqw, the printed size
  let size = base;
  for (let i = 0; i < 5; i++){
    rec.el.style.fontSize = size.toFixed(4) + 'cqw';
    const have = rec.el.offsetWidth;
    if (!have) break;
    const ratio = want / have;
    if (Math.abs(ratio - 1) < 0.005) break;
    size = Math.min(Math.max(size * ratio, base * 0.3), base * 2.4);
  }
}

function fit(){ built.forEach(fitOne); }

/* ---------- contact details ----------
   The numbers are not in the served HTML or JS in readable form.
   Address harvesters fetch pages and read the DOM; they do not open
   wedding invitations. The digits are assembled only when a guest
   actually opens the card, which is the point at which a human is
   demonstrably present. This does not stop a determined scraper --
   nothing client-side can -- but it stops the automated sweeps that
   are the realistic threat to a phone number on a public URL. */

let contactsOut = false;

function revealContacts(){
  if (contactsOut) return;
  contactsOut = true;
  for (const rec of built){
    if (!rec.item.enc) continue;
    rec.el.textContent = atob(rec.item.enc);
    rec.el.setAttribute('href', atob(rec.item.encHref));
    fitOne(rec);
  }
}

/* ---------- artwork loading ----------
   Six panels used to download in parallel the moment the page opened.
   Only one of them is visible at that point -- the cover -- and it is
   the largest file, so it regularly lost the race and the card popped
   from blank paper to artwork in front of the guest.

   Now: the cover loads by itself and the card is not shown until it
   has decoded. The inside panels follow while the guest is reading the
   cover, and the two outer faces are fetched only if the flip is
   likely. Nothing is ever revealed before its artwork is on screen. */

const ART = {
  cover:   'assets/panel-cover.jpg',
  details: 'assets/panel-details.jpg',
  names:   'assets/panel-names.jpg',
  rsvp:    'assets/panel-rsvp.jpg',
  credits: 'assets/panel-credits.jpg',
  back:    'assets/panel-back.jpg'
};

const art = {};
const artDone = {};

function loadArt(name){
  if (art[name]) return art[name];
  const el = document.querySelector(`.panel[data-panel="${name}"]`);
  art[name] = new Promise(resolve => {
    if (!el) return resolve();
    const img = new Image();
    const done = () => {
      el.style.backgroundImage = `url("${ART[name]}")`;
      artDone[name] = true;
      resolve();
    };
    img.onload = () => (img.decode ? img.decode().then(done, done) : done());
    img.onerror = done;                       // a missing file must not wedge the card
    img.src = ART[name];
  });
  return art[name];
}

const INSIDE = ['details', 'names', 'rsvp'];
const OUTSIDE = ['credits', 'back'];

function loadAll(names){ return Promise.all(names.map(loadArt)); }

/* ---------- sizing ---------- */

const card  = document.getElementById('card');
const tilt  = document.getElementById('tilt');
const root  = document.documentElement;
const RATIO = 504.8 / 360;

let mobile = window.innerWidth <= 840;
let index  = 1;                                  // which panel is centred (0/1/2)

function layout(){
  const vw = window.innerWidth, vh = window.innerHeight;
  mobile = vw <= 840;

  if (mobile){
    // one panel fills the screen; the fold still happens, we just watch it up close
    const w = Math.min(vw * 0.88, (vh - 210) / RATIO);
    root.style.setProperty('--panel-w', w + 'px');
    root.style.setProperty('--fit', 1);
    pan();
    return;
  }

  root.style.setProperty('--pan', '0px');
  const avail = vh - 210;                       // bar, controls, signature
  const cap   = avail / RATIO;
  const open  = Math.min(vw * 0.90 / 3, cap);   // three panels side by side
  const state = card.dataset.state;
  const wide  = state === 'open' ? open
              : state === 'half' ? Math.min(vw * 0.82 / 2, cap)   // mid-fold: two panels
              :                    Math.min(vw * 0.58,     cap);  // folded: one panel

  root.style.setProperty('--panel-w', open + 'px');
  root.style.setProperty('--fit', wide / open);
}

/* ---------- panning between panels (small screens) ---------- */

function panelPx(){
  return parseFloat(getComputedStyle(root).getPropertyValue('--panel-w')) || 0;
}

/* The card is 3 panels wide with the centre panel in the middle, so panel i
   sits at (i - 1) panel-widths from centre. A flipped card mirrors that. */
function pan(extra = 0){
  if (!mobile) return;
  const dir = card.dataset.side === 'back' ? -1 : 1;      // a flipped card mirrors left/right
  const x = dir * (1 - index) * panelPx() + extra;
  root.style.setProperty('--pan', x.toFixed(1) + 'px');
}

function goTo(i){
  index = Math.max(0, Math.min(2, i));
  pan();
  dots.forEach((d, n) => {
    d.classList.toggle('is-on', n === index);
    d.setAttribute('aria-selected', String(n === index));
  });
}

const pager = document.getElementById('pager');
const dots  = [...pager.querySelectorAll('.pager__d')];
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));

/* drag / swipe */
(function swipe(){
  let x0 = null, y0 = 0, locked = null, dragged = false;

  card.addEventListener('click', e => {
    if (dragged){ e.preventDefault(); e.stopPropagation(); dragged = false; }
  }, true);

  card.addEventListener('pointerdown', e => {
    if (!mobile || !opened) return;
    x0 = e.clientX; y0 = e.clientY; locked = null;
  });

  card.addEventListener('pointermove', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0;
    if (locked === null){
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      locked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (locked === 'x'){ card.classList.add('is-dragging'); dragged = true; }
    }
    if (locked !== 'x') return;
    e.preventDefault();
    // resist at the ends so the card feels hinged, not free
    const atEnd = (index === 0 && dx > 0) || (index === 2 && dx < 0);
    pan(atEnd ? dx * 0.3 : dx);
  }, { passive:false });

  function release(e){
    if (x0 === null) return;
    const dx = (e.clientX ?? x0) - x0;
    x0 = null;
    card.classList.remove('is-dragging');
    if (locked !== 'x'){ return; }
    const throwPx = Math.min(panelPx() * 0.22, 90);
    if (dx < -throwPx)      goTo(index + 1);
    else if (dx > throwPx)  goTo(index - 1);
    else                    pan();
  }
  card.addEventListener('pointerup', release);
  card.addEventListener('pointercancel', release);
})();

/* ---------- the fold ---------- */

const opener = document.getElementById('opener');
const label  = document.getElementById('openerLabel');
const tray   = document.getElementById('tray');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

let opened = false;
let busy   = false;

function step(){ return reduce.matches ? 0 : 760; }

function openCard(){
  if (opened || busy) return;

  // never start the fold onto artwork that has not arrived
  if (!INSIDE.every(n => art[n] && artDone[n])){
    opener.classList.add('is-waiting');
    loadAll(INSIDE).then(() => { opener.classList.remove('is-waiting'); openCard(); });
    return;
  }

  busy = true; opened = true;

  label.textContent = 'Fold it away';
  opener.setAttribute('aria-expanded', 'true');
  opener.classList.add('is-open');

  musicOnOpen();
  revealContacts();
  revealTools();
  card.dataset.state = 'half';                  // the cover swings away
  layout();
  setTimeout(() => {
    card.dataset.state = 'open';                // the tucked panel unfolds
    layout();
    labels();
  }, step());

  setTimeout(() => {
    tray.hidden = false;
    requestAnimationFrame(() => { tray.classList.add('is-in'); pager.classList.add('is-in'); });
    busy = false;
  }, step() * 2 + (reduce.matches ? 0 : 140));
}

function closeCard(){
  if (!opened || busy) return;
  busy = true; opened = false;

  label.textContent = 'Open the invitation';
  opener.setAttribute('aria-expanded', 'false');
  opener.classList.remove('is-open');

  tray.classList.remove('is-in');
  pager.classList.remove('is-in');
  goTo(1);                                      // re-centre before folding up
  setTimeout(() => { tray.hidden = true; }, 520);

  card.dataset.state = 'half';                  // the RSVP panel tucks back in
  layout();
  labels();
  setTimeout(() => {
    card.dataset.state = 'closed';              // the cover folds over it
    layout();
  }, step());

  setTimeout(() => { busy = false; }, step() * 2);
}

function toggleCard(){ opened ? closeCard() : openCard(); }

opener.addEventListener('click', toggleCard);
card.addEventListener('click', e => { if (!opened && !e.target.closest('a')) openCard(); });
card.addEventListener('keydown', e => {
  if (!opened && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); openCard(); }
});
addEventListener('keydown', e => { if (e.key === 'Escape' && opened) closeCard(); });

/* ---------- which side is showing ---------- */

const seg  = document.querySelector('.seg');
const segB = [...document.querySelectorAll('.seg__b')];

function labels(){
  const open = opened;
  segB[0].textContent = open ? 'Inside'  : 'Front';
  segB[1].textContent = open ? 'Outside' : 'Back';
}

function showSide(side){
  card.dataset.side = side;
  seg.dataset.on = side;
  root.style.setProperty('--flip', side === 'back' ? '180deg' : '0deg');
  pan();
  segB.forEach(b => {
    const on = b.dataset.side === side;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', String(on));
  });
}

segB.forEach(b => {
  b.addEventListener('click', () => {
    const need = b.dataset.side === 'back' ? OUTSIDE : INSIDE;
    if (need.every(n => artDone[n])) return showSide(b.dataset.side);
    b.classList.add('is-waiting');
    loadAll(need).then(() => { b.classList.remove('is-waiting'); showSide(b.dataset.side); });
  });
  // start fetching as soon as the pointer lands, so the click feels instant
  b.addEventListener('pointerenter', () => loadAll(b.dataset.side === 'back' ? OUTSIDE : INSIDE));
  b.addEventListener('focus', () => loadAll(b.dataset.side === 'back' ? OUTSIDE : INSIDE));
});
showSide('front');
labels();

/* ---------- pointer tilt (desktop, fine pointers only) ---------- */

if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce.matches){
  let raf = 0;
  addEventListener('pointermove', e => {
    if (window.innerWidth <= 840 || raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const nx = (e.clientX / window.innerWidth  - .5) * 2;
      const ny = (e.clientY / window.innerHeight - .5) * 2;
      tilt.style.transform = `rotateX(${(-ny * 3.4).toFixed(2)}deg) rotateY(${(nx * 4.6).toFixed(2)}deg)`;
    });
  }, { passive:true });
  addEventListener('pointerleave', () => { tilt.style.transform = ''; });
}

/* ---------- drifting petals ---------- */

function petals(){
  if (reduce.matches) return;
  const box = document.getElementById('petals');
  const n = window.innerWidth <= 840 ? 6 : 10;
  for (let i = 0; i < n; i++){
    const p = document.createElement('span');
    const size = 8 + Math.random() * 13;
    p.className = 'petal';
    p.style.left = (Math.random() * 100) + 'vw';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.setProperty('--drift', (Math.random() * 160 - 80).toFixed(0) + 'px');
    p.style.setProperty('--spin', (Math.random() * 620 - 310).toFixed(0) + 'deg');
    p.style.animationDuration = (26 + Math.random() * 26).toFixed(1) + 's';
    p.style.animationDelay = (-Math.random() * 40).toFixed(1) + 's';
    box.appendChild(p);
  }
}

/* ---------- background music ----------
   Routed through Web Audio rather than the <audio> element, because
   iOS ignores HTMLMediaElement.volume entirely (the fade was a no-op
   there) and an <audio> tag is silenced by the ringer switch. A
   GainNode gives real volume control on every platform.            */

const bgm  = document.getElementById('bgm');
const mute = document.getElementById('mute');
const PREF = 'am-music';
const VOL  = 0.34;                 // background, never foreground
const SRC  = 'assets/music.mp3';

const AUTOPLAY_ON_OPEN = true;     // false = the Music button only

let ctx = null, gain = null, node = null, buffer = null, loading = null;
let playing = false, useTag = false;

function setBtn(on){
  playing = on;
  mute.setAttribute('aria-pressed', String(on));
}

function loadBuffer(){
  if (loading) return loading;
  loading = fetch(SRC)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
    .then(a => ctx.decodeAudioData(a))
    .then(b => { buffer = b; return b; });
  return loading;
}

function musicOn(){
  const AC = window.AudioContext || window.webkitAudioContext;

  if (!AC){ return tagOn(); }
  if (!ctx){
    ctx  = new AC();
    gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);
  }
  ctx.resume();                                  // must happen inside the gesture

  setBtn(true);
  loadBuffer().then(() => {
    if (!playing) return;
    if (node) { try { node.stop(); } catch(e){} }
    node = ctx.createBufferSource();
    node.buffer = buffer;
    node.loop = true;
    node.connect(gain);
    node.start(0);
    gain.gain.cancelScheduledValues(ctx.currentTime);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(VOL, ctx.currentTime + 2.6);
  }).catch(() => { useTag = true; tagOn(); });
}

function tagOn(){                                 // fallback: plain <audio>
  const go = bgm.play();
  if (go && go.then) go.then(() => setBtn(true)).catch(() => setBtn(false));
  else setBtn(true);
}

function musicOff(){
  setBtn(false);
  if (ctx && gain){
    gain.gain.cancelScheduledValues(ctx.currentTime);
    gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);
    setTimeout(() => { if (!playing && node){ try { node.stop(); } catch(e){} node = null; } }, 800);
  }
  if (!bgm.paused) bgm.pause();
}

mute.addEventListener('click', () => {
  if (playing){ musicOff(); store('off'); }
  else        { musicOn();  store('on');  }
});

function store(v){ try { localStorage.setItem(PREF, v); } catch(e){} }
function stored(){ try { return localStorage.getItem(PREF); } catch(e){ return null; } }

/* Starts on the same gesture that opens the card -- the only moment
   browsers allow audio to begin. */
function musicOnOpen(){
  if (!AUTOPLAY_ON_OPEN || playing) return;
  if (stored() === 'off') return;
  musicOn();
}

/* Browsers suspend the context when the tab is hidden; resume on return. */
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && playing && ctx && ctx.state === 'suspended') ctx.resume();
});

/* the two call buttons in the tray get their numbers at the same moment */
function revealTools(){
  document.querySelectorAll('.tool[data-tel]').forEach(a => {
    a.setAttribute('href', atob(a.dataset.tel));
    a.removeAttribute('data-tel');
  });
}

/* ---------- countdown + calendar ---------- */

const WEDDING = new Date('2026-12-06T13:30:00+02:00');

function countdown(){
  const n = document.getElementById('countN');
  const l = document.getElementById('countL');
  const days = Math.ceil((WEDDING - Date.now()) / 86400000);

  if (days > 1){ n.textContent = days; l.textContent = 'days to go'; }
  else if (days === 1){ n.textContent = '1'; l.textContent = 'day to go'; }
  else if (days === 0){ n.textContent = 'Today'; l.textContent = 'is the day'; }
  else { n.textContent = 'Married'; l.textContent = 'with love'; }
}

function calendar(){
  const stamp = d => d.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
  const ics = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Alba Designs//Wedding//EN','BEGIN:VEVENT',
    'UID:ashendran-miksha-2026@albasdesigns.com',
    'DTSTAMP:' + stamp(new Date()),
    'DTSTART:' + stamp(WEDDING),
    'DTEND:'   + stamp(new Date(WEDDING.getTime() + 3 * 3600000)),
    'SUMMARY:Wedding of Ashendran Naidoo and Miksha Ravjee',
    'LOCATION:Cato Manor Hindu Temple\\, 588 Vusi Mzimela Rd\\, Durban\\, 4091',
    'DESCRIPTION:Two souls. One promise.',
    'END:VEVENT','END:VCALENDAR'
  ].join('\r\n');
  document.getElementById('ics').href =
    URL.createObjectURL(new Blob([ics], { type:'text/calendar' }));
}

/* ---------- go ---------- */

build();
layout();
petals();

const stage = document.querySelector('.stage');

/* One wait, at the door. Every panel is fetched in parallel and the card
   is not shown until they have all decoded, so nothing after this point
   can ever reveal blank paper -- not the fold, not the flip, not a swipe.
   The cover still carries fetchpriority=high so it lands first and the
   progress line moves immediately rather than sitting at zero.

   The lazy machinery is kept, not replaced: loadArt() still resolves once
   per panel and the fold and flip still check before they run. With
   everything preloaded those checks are no-ops, but they are what stops a
   slow connection or a failed request turning into a broken card. */

const ALL = Object.keys(ART);
let ready = 0;

function progress(){
  ready++;
  root.style.setProperty('--load', (ready / ALL.length).toFixed(3));
}

function reveal(){
  if (stage.classList.contains('is-ready')) return;
  stage.classList.add('is-ready');
  card.classList.add('is-ready');
}

ALL.forEach(n => loadArt(n).then(progress));

// everything decoded -- the normal path, typically well under a second
loadAll(ALL).then(reveal);

/* Safety valve: if one file is slow or missing, show the card as soon as
   the cover is up rather than holding a guest on a loading screen. The
   per-action checks take over from there. */
loadArt('cover').then(() => setTimeout(reveal, 4000));
