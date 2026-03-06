/* ===== PRELOADER ===== */
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

/* ===== PARTICLES BACKGROUND ===== */
particlesJS("particles-js", {
  "particles": {
    "number": {"value":100},
    "color":{"value":"#00f2ff"},
    "shape":{"type":"triangle"},
    "opacity":{"value":0.5},
    "size":{"value":2},
    "line_linked":{"enable":true,"distance":180,"color":"#00f2ff","opacity":0.4,"width":0.8},
    "move":{"enable":true,"speed":4}
  }
});

/* ===== NAVBAR MENU TOGGLE ===== */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}



/* ===== VIDEO ARRAYS ===== */
let gamingCategories = {
  "Lords Mobile": [
    {id:'RgFDVH1HQhM', desc:'My Rally Trap 😎'},
    {id:'GmrwxEZOLEA', desc:'My Rally Trap 😎 (P2)'},
    {id:'F106cJpyqV0', desc:'So Many Rallies on me 💀'},
    {id:'WvXSi5RKZLM', desc:'Showing States  of 2 pieces 💀'},
    {id:'WBv-qD9Mg1I', desc:'لما يكون صاحبك مغرور وتعلمه درس'},
    {id:'BQiFxZPfFTE', desc:'I got The Highest score in the Game!'},
    {id:'iQEeQeCp0R8', desc:'Some fun'},
    {id:'LWjzy61QmkM', desc:'testing a new trap 🔥'},
    {id:'6VdKVBFBn4U', desc:'My Rally Trap is Back!!'}
  ],

  "Free Fire": [
    {id:'HK6r1G6wQwI', desc:'Skateboard event !'},
    {id:'V6U8kK0fGHQ', desc:'3 seconds 💀'},
    {id:'qB_RgP1JN9k', desc:'New Trend !'},
    {id:'41Z1uNFNbzA', desc:'لما تكسب صاحبك روم'}
  ],

  "Clash of Clans": [
    // ضيف فيديوهاتك هنا
      {id:'rqS53VXdmAM', desc:'Review My Acc In Clash Of Clans'},
  ],

  "Clash Royale": [
    // ضيف فيديوهاتك هنا
    {id:'SuTywOUTqn4', desc:'Review My Acc In Clash Royale'},
    {id:'93NXZ7e2ghE', desc:'How To PLay With 2.3 Deck'},
    {id:'6i_w1Bqt9Ds', desc:'Win Against Beatdown Decks'},
    {id:'_L4iSKoKiPo', desc:'A Hard Win?'},
    {id:'seaR_1ItRU0', desc:'Win Against Hogrider'},
    {id:'B6dX2uktATk', desc:'How To PLay With 2.4 Deck'},
    {id:'sagCqynU_ps', desc:'Reach 10,000 trophies'}
  ]
};
let animeVideos = [
  {id:'9zIor5qP7b0', desc:'GOJO <BR> VS <BR> Miguel'},
  {id:'-75h1pyYHsc', desc:'When GOJO <BR> Gets Serious 💀'},
  {id:'SMDKFtTVgGI', desc:'GOJO <BR> VS <BR> JOGO'}
];
let marvelVideos = [
  {id:'70pHukpTyhk', desc:'SPIDER-MAN <br> VS <br> DR.STRANGE '},
  {id:'GoockRFyx_4', desc:'DR.STRANGE BEST AURA'},
  {id:'KzMRavXCe9o', desc:'"I HAVE COME TO BARGAIN"'},
  {id:'NtwCLlILiPc', desc:'TOM HOLLAND DANCE <br>  ON BEATS 😂'},
  {id:'moVZnIMCm7w', desc:'SPIDER-MAN <br> VS <br> GREEN-GOBLIN '},
  {id:'WsLyDwMoZE8', desc:'THOR VS HULK'},
  {id:'4YoXzgGhqkw', desc:'SPIDER-MAN <br> VS <br> CAP-AMERICA'},
  {id:'Q09LJCp8MYk', desc:'IRON-MAN BEST AURA'},
  {id:'VkAhflXyVtk', desc:'THE STRENGHT OF<BR> SPIDER-MAN'}
];

/* ===== CREATE VIDEO GRID ===== */
function createVideoGrid(videos, gridId){
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";
  videos.forEach((v,index) => {
    const div = document.createElement('div');
    div.className = 'video-card';
    div.innerHTML = `<img src="https://img.youtube.com/vi/${v.id}/0.jpg" title="${v.desc}"><span class="desc">${v.desc}</span>`;
    div.onclick = () => openVideo(videos, index);
    grid.appendChild(div);
  });
}

/* ===== GENERATE GRIDS ===== */
function createGamingSection(){
  const grid = document.getElementById('gaming-grid');
  grid.innerHTML = "";

  Object.keys(gamingCategories).forEach(category => {

    // عنوان اللعبة
    const title = document.createElement('h3');
    title.style.gridColumn = "1 / -1";
    title.style.marginTop = "40px";
    title.style.color = "#00f2ff";
    title.innerText = category;
    grid.appendChild(title);

    // فيديوهات اللعبة
    gamingCategories[category].forEach((v,index) => {
      const div = document.createElement('div');
      div.className = 'video-card';
      div.innerHTML = `
        <img src="https://img.youtube.com/vi/${v.id}/0.jpg">
        <span class="desc">${v.desc}</span>
      `;
      div.onclick = () => openVideo(gamingCategories[category], index);
      grid.appendChild(div);
    });

  });
}

createGamingSection();
createVideoGrid(animeVideos,'anime-grid');
createVideoGrid(marvelVideos,'marvel-grid');



/* ===== FULLSCREEN VIDEO MODAL WITH END THUMBNAIL ===== */
let currentVideos = [];
let currentIndex = 0;
const modal = document.getElementById("videoModal");
const modalContent = modal.querySelector(".modal-content");
const videoFrame = document.getElementById("videoFrame");
const thumbWrapper = document.getElementById('videoThumbWrapper');

function openVideo(videos, index){
  currentVideos = videos;
  currentIndex = index;

  // رابط الفيديو مع autoplay و mute
  const embedLink = `https://www.youtube.com/embed/${videos[index].id}?autoplay=1&mute=1&modestbranding=1&rel=0&playsinline=1`;
  videoFrame.src = embedLink;

  modal.classList.add("active");
  modalContent.classList.add("active-scale");

  // اظهار الفيديو مباشرة
  videoFrame.style.display = "block";
  thumbWrapper.style.display = "none";
  videoFrame.style.height = window.innerWidth <= 900 ? "85vh" : "90vh";
  
  // أضف listener لنهاية الفيديو لإظهار الـ thumbnail
  videoFrame.onload = () => {
    const player = new YT.Player(videoFrame, {
      events: {
        'onStateChange': (event) => {
          if(event.data === YT.PlayerState.ENDED){
            // لما الفيديو يخلص
            showThumbnail(videos[index].id);
          }
        }
      }
    });
  }
}

function showThumbnail(videoId){
  thumbWrapper.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/0.jpg')`;
  thumbWrapper.style.display = "block";
  videoFrame.style.display = "none";

  // لو ضغط المستخدم على الصورة يبدأ الفيديو من جديد
  thumbWrapper.onclick = () => {
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`;
    videoFrame.style.display = "block";
    thumbWrapper.style.display = "none";
  }
}

/* ===== CLOSE VIDEO ===== */
function closeVideo(){
  modalContent.classList.remove("active-scale");
  setTimeout(()=>{
    modal.classList.remove("active");
    videoFrame.src = "";
    thumbWrapper.style.display = "none";
  }, 300);
}

/* ===== CLICK OUTSIDE TO CLOSE ===== */
modal.addEventListener("click", (e)=>{
  if(e.target === modal) closeVideo();
});

/* ===== NEXT / PREV VIDEO ===== */
document.getElementById("nextVideo").addEventListener("click", (e)=>{
  e.stopPropagation();
  if(currentVideos.length === 0) return;
  currentIndex = (currentIndex + 1) % currentVideos.length;
  openVideo(currentVideos, currentIndex);
});

document.getElementById("prevVideo").addEventListener("click", (e)=>{
  e.stopPropagation();
  if(currentVideos.length === 0) return;
  currentIndex = (currentIndex - 1 + currentVideos.length) % currentVideos.length;
  openVideo(currentVideos, currentIndex);
});

/* ===== FULLSCREEN BUTTON ===== */
const fullscreenBtn = document.getElementById('fullscreenBtn');
fullscreenBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  if(modal.requestFullscreen) modal.requestFullscreen();
  else if(modal.webkitRequestFullscreen) modal.webkitRequestFullscreen();
  else if(modal.mozRequestFullScreen) modal.mozRequestFullScreen();
  else if(modal.msRequestFullscreen) modal.msRequestFullscreen();
});

/* ===== ADJUST VIDEO HEIGHT ON RESIZE ===== */
window.addEventListener("resize", ()=>{
  videoFrame.style.height = window.innerWidth <= 900 ? "100vh" : "90vh";
});

const API_KEY = "AIzaSyBTvModFdFi3k4HmHgQ19ZuHihYyArRvk8";
const VIDEO_ID = "lRV7RbyxXcg";

// عداد متحرك
function animateCounter(element, target){
  let count = 0;
  const increment = target/100;
  const interval = setInterval(()=>{
    count += increment;
    if(count >= target) count = target;
    element.innerText = Math.floor(count).toLocaleString();
    if(count >= target) clearInterval(interval);
  },20);
}

// 1️⃣ جلب Channel ID من Video ID
fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`)
.then(res => res.json())
.then(data => {
  const channelId = data.items[0].snippet.channelId;

  // 2️⃣ جلب إحصائيات القناة
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const stats = data.items[0].statistics;
    const snippet = data.items[0].snippet;

    document.getElementById("channel-name").innerText = snippet.title;
    document.getElementById("channel-thumb").src = snippet.thumbnails.default.url;

  // ===== تشغيل العدادات كل مرة يظهر section "states" =====
function animateStatesCounters() {
  const counters = document.querySelectorAll('#states .counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) count = target;
      counter.innerText = Math.floor(count).toLocaleString();
      if (count >= target) clearInterval(interval);
    }, 10);
  });
}

// ضبط القيم النهائية في data-target
document.getElementById("subs-count").setAttribute('data-target', stats.subscriberCount);
document.getElementById("views-count").setAttribute('data-target', stats.viewCount);
document.getElementById("videos-count").setAttribute('data-target', stats.videoCount);

// مراقبة ظهور section كل مرة
const statesSection = document.getElementById('states');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateStatesCounters();
    }
  });
}, {threshold: 0.5}); // لما نصف section يظهر
observer.observe(statesSection);
  });
  
  const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", ()=>{
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
});
});

function openContact(){
  document.getElementById("contactModal").style.display = "flex";
}

function closeContact(){
  document.getElementById("contactModal").style.display = "none";
}

document.getElementById("contactModal").addEventListener("click", function(e){
  if(e.target === this){
    closeContact();
  }
});

/* ===== EVENT LISTENERS ===== */

const homeBtn = document.getElementById('homeBtn');
const backBtn = document.getElementById('backBtn');

homeBtn.addEventListener('click', () => {
  resetQuiz();

  homeSection.style.display = 'block';
  categoriesSection.style.display = 'none';
  quizSection.style.display = 'none';
  resultsSection.style.display = 'none';
  puzzleMenuSection.style.display = 'none';
});

backBtn.addEventListener('click', () => {

  if (quizSection.style.display === 'block') {
    quizSection.style.display = 'none';
    categoriesSection.style.display = 'block';
    return;
  }

  if (categoriesSection.style.display === 'block') {
    categoriesSection.style.display = 'none';
    puzzleMenuSection.style.display = 'block';
    return;
  }

  if (puzzleMenuSection.style.display === 'block') {
    puzzleMenuSection.style.display = 'none';
    homeSection.style.display = 'block';
    return;
  }

});


(function () {
  function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

  // create temporary guard overlay that captures events (prevents tap-through)
  function createGuard(ms = 260) {
    try {
      const guard = document.createElement('div');
      guard.className = '__temp_menu_blocker';
      guard.style.position = 'fixed';
      guard.style.inset = '0';
      guard.style.zIndex = '99998';
      guard.style.background = 'transparent';
      guard.style.pointerEvents = 'auto';
      document.body.appendChild(guard);
      setTimeout(() => { try { guard.remove(); } catch (e) {} }, Math.max(120, ms));
      return guard;
    } catch (e) { return null; }
  }

  // suppress the next pointerdown/click events globally for `ms` milliseconds
  function suppressNextClicks(ms = 300) {
    let removed = false;
    const handler = function (ev) {
      try {
        ev.stopPropagation();
        ev.preventDefault();
        if (typeof ev.stopImmediatePropagation === 'function') ev.stopImmediatePropagation();
      } catch (e) {}
    };
    // capture both pointerdown and click to be safe
    document.addEventListener('pointerdown', handler, true);
    document.addEventListener('click', handler, true);
    // cleanup after timeout
    setTimeout(() => {
      if (removed) return;
      try {
        document.removeEventListener('pointerdown', handler, true);
        document.removeEventListener('click', handler, true);
      } catch (e) {}
      removed = true;
    }, Math.max(120, ms));
  }

  document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');         // <ul id="menu">
    const toggle = document.querySelector('.menu-toggle'); // hamburger element
    const nav = document.querySelector('nav');
    const social = document.querySelector('.social-icons');

    if (!menu || !toggle || !nav) {
      console.warn('menu/toggle/nav missing - cannot init mobile menu.');
      return;
    }

    // Ensure toggle sits inside nav so it never gets moved by other scripts
    if (toggle.parentNode !== nav) try { nav.appendChild(toggle); } catch (e) { /*silent*/ }

    // Remove duplicate social blocks (keep first)
    const allSocial = document.querySelectorAll('.social-icons');
    if (allSocial.length > 1) { for (let i = 1; i < allSocial.length; i++) { allSocial[i].remove(); } }

    // Preserve original social location to restore later
    const originalSocialParent = social && social.parentNode ? social.parentNode : null;
    const originalSocialNext = social ? social.nextSibling : null;
    let menuSocialLi = menu.querySelector('.menu-social');

    function ensureMenuSocialLi() {
      if (!menuSocialLi) {
        menuSocialLi = document.createElement('li');
        menuSocialLi.className = 'menu-social';
        menu.appendChild(menuSocialLi);
      }
      return menuSocialLi;
    }

    function moveSocialForMobile() {
      const isMobile = window.innerWidth <= 768;
      if (!social) return;
      if (isMobile) {
        const li = ensureMenuSocialLi();
        if (social.parentNode !== li) {
          li.appendChild(social);
          social.style.display = 'flex';
        }
      } else {
        if (originalSocialParent && social.parentNode !== originalSocialParent) {
          originalSocialParent.insertBefore(social, originalSocialNext);
          social.style.display = '';
        }
        if (menuSocialLi && menuSocialLi.parentNode && menuSocialLi.children.length === 0) {
          menuSocialLi.remove();
          menuSocialLi = null;
        }
      }
    }

    // Toggle open/close safely
    function toggleMenuOpen() {
      const opened = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
      if (opened) {
        menu.style.display = 'flex';
        // guard to avoid immediate tap-through after opening
        createGuard(220);
      } else {
        menu.style.display = '';
      }
    }

    // Close on outside but CONSUME the outside event (first click closes and is NOT forwarded)
    function closeMenuConsumeOutside(e) {
      if (!menu.classList.contains('active')) return;

      // if click/touch is inside menu or toggle, ignore (not outside)
      if (menu.contains(e.target) || toggle.contains(e.target)) return;

      // consume the event (prevent underlying activation) and close
      try {
        e.stopPropagation();
        e.preventDefault();
        if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
      } catch (err) {}

      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      menu.style.display = '';

      // additional suppression to be safer (for browsers that may still dispatch click)
      suppressNextClicks(300);
      // also add a visual/functional guard overlay briefly
      createGuard(260);
    }

    // Bind toggle
    toggle.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); toggleMenuOpen(); });

    // Bind menu items (pointerdown for fast mobile)
    function bindMenuItems() {
      menu.querySelectorAll('li[data-section]').forEach(li => {
        // remove old bound if present
        if (li._bound) li.removeEventListener('pointerdown', li._bound);
        const bound = function (ev) {
          ev.stopPropagation();
          ev.preventDefault();
          const id = li.getAttribute('data-section');
          if (id) {
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            const target = document.getElementById(id);
            if (target) target.classList.add('active');
            if (window.innerWidth <= 900) {
              menu.classList.remove('active');
              toggle.setAttribute('aria-expanded', 'false');
              menu.style.display = '';
            }
            createGuard(200);
            // also suppress any immediate click that might leak
            suppressNextClicks(220);
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        };
        li.addEventListener('pointerdown', bound);
        li._bound = bound;
        const a = li.querySelector('a');
        if (a) {
          a.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); bound(ev); });
        }
      });
    }

    // Capture-phase listener to intercept outside pointerdown BEFORE it reaches targets - ensures closure + consumption
    document.addEventListener('pointerdown', closeMenuConsumeOutside, true);

    // Also a non-capture fallback (safety)
    document.addEventListener('pointerdown', function (e) {
      if (!menu.classList.contains('active')) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      menu.style.display = '';
      createGuard(220);
      suppressNextClicks(220);
    });

    // Restore on resize
    window.addEventListener('resize', debounce(function () {
      moveSocialForMobile();
      if (window.innerWidth > 768) {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        menu.style.display = '';
      }
    }, 120));

    // Close menu when Escape pressed (and consume)
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && menu.classList.contains('active')) {
        ev.preventDefault();
        ev.stopPropagation();
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        menu.style.display = '';
        createGuard(180);
        suppressNextClicks(180);
      }
    }, true);

    // Init
    moveSocialForMobile();
    bindMenuItems();

    // Defensive cleanup of duplicate social nodes
    setTimeout(function () {
      const nodes = document.querySelectorAll('.social-icons');
      if (nodes.length > 1) {
        for (let i = 1; i < nodes.length; i++) {
          const el = nodes[i];
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }
      }
    }, 400);

  }); // DOMContentLoaded
})();

AOS.init({
duration:1000,
once:true
});



let clickBuffer;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// تحميل الصوت مرة واحدة
fetch("click.mp3")
  .then(r => r.arrayBuffer())
  .then(data => audioCtx.decodeAudioData(data))
  .then(buffer => {
    clickBuffer = buffer;
  });

// تشغيل الصوت
function playClick(){
  if(!clickBuffer) return;

  const source = audioCtx.createBufferSource();
  source.buffer = clickBuffer;
  source.connect(audioCtx.destination);
  source.start(0);
}

document.addEventListener("pointerdown", function(e){

  // ❌ منع الصوت عند اختيار إجابة في الكويز
  if(e.target.closest("#answers .btn")) return;

  // ✅ عناصر الموقع
  if(
    e.target.closest("button") ||
    e.target.closest(".btn") ||
    e.target.closest("a") ||
    e.target.closest("nav li") ||
    e.target.closest(".menu-toggle") ||
    e.target.closest(".modal-nav")
  ){
    playClick();
    return;
  }

  // ✅ فيديوهات السكاشن
  if(
    e.target.closest(".video-card") ||
    e.target.closest(".video-grid") ||
    e.target.closest("#videoThumbWrapper") ||
    e.target.closest("#videoFrame")
  ){
    playClick();
  }

});
