// LANGUAGE
const LANG = {
  en: {
    nav: { home: 'Home', portfolio: 'Portfolio', services: 'Services', contact: 'Contact' },
    hero_tag: 'Web Designer & AI Specialist · Bali, Indonesia',
    hero_title: 'Crafting Digital<br>Experiences That <em>Convert</em>',
    hero_desc: 'I build beautiful, high-performance websites and AI-powered tools for businesses that want to grow. Specializing in web design, GoHighLevel CRM, and AI integrations.',
    hero_cta1: 'View My Work',
    hero_cta2: 'Let\'s Work Together',
    services_label: 'What I Do',
    services_title: 'Services That Drive <em>Results</em>',
    portfolio_label: 'My Work',
    portfolio_title: 'Selected <em>Projects</em>',
    contact_label: 'Get In Touch',
    contact_title: 'Let\'s Build Something <em>Great</em>',
    footer_desc: 'Web designer & AI specialist based in Bali, Indonesia. Creating digital solutions that help businesses grow and convert.',
  },
  id: {
    nav: { home: 'Beranda', portfolio: 'Portfolio', services: 'Layanan', contact: 'Kontak' },
    hero_tag: 'Web Designer & AI Specialist · Bali, Indonesia',
    hero_title: 'Website & AI Tools<br>yang <em>Menghasilkan</em>',
    hero_desc: 'Saya membangun website profesional dan tools berbasis AI untuk bisnis yang ingin berkembang. Spesialis web design, GoHighLevel CRM, dan integrasi AI.',
    hero_cta1: 'Lihat Portfolio',
    hero_cta2: 'Hubungi Saya',
    services_label: 'Layanan Saya',
    services_title: 'Solusi Digital yang <em>Menghasilkan</em>',
    portfolio_label: 'Karya Saya',
    portfolio_title: 'Portfolio <em>Terpilih</em>',
    contact_label: 'Hubungi Saya',
    contact_title: 'Mari Buat Sesuatu yang <em>Luar Biasa</em>',
    footer_desc: 'Web designer & AI specialist berbasis di Bali. Menciptakan solusi digital yang membantu bisnis berkembang.',
  }
};

let currentLang = localStorage.getItem('aw_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('aw_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.id;
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
}

// NAV SCROLL
function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// SCROLL ANIMATIONS
function initScrollAnim() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// NOTIF
function showNotif(msg) {
  let el = document.getElementById('notif');
  if (!el) {
    el = document.createElement('div');
    el.id = 'notif';
    el.className = 'notif';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 4000);
}

// FOOTER RENDER
function renderFooter(activePage) {
  const pages = [
    { href: 'index.html', label_en: 'Home', label_id: 'Beranda' },
    { href: 'portfolio.html', label_en: 'Portfolio', label_id: 'Portfolio' },
    { href: 'services.html', label_en: 'Services', label_id: 'Layanan' },
    { href: 'contact.html', label_en: 'Contact', label_id: 'Kontak' },
  ];

  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">Arwanda <span class="footer-logo-dot"></span> Amalisa</div>
          <p class="footer-desc" data-en="Web designer & AI specialist based in Bali, Indonesia. Creating digital solutions that help businesses grow and convert." data-id="Web designer & AI specialist berbasis di Bali. Menciptakan solusi digital yang membantu bisnis berkembang.">
            Web designer & AI specialist based in Bali, Indonesia.
          </p>
          <div class="footer-social">
            <a href="#" class="fs-btn">📸</a>
            <a href="#" class="fs-btn">💼</a>
            <a href="#" class="fs-btn">💬</a>
          </div>
        </div>
        <div>
          <div class="footer-heading">Navigate</div>
          <ul class="footer-links">
            ${pages.map(p => `<li><a href="${p.href}" data-en="${p.label_en}" data-id="${p.label_id}">${p.label_en}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="footer-heading">Services</div>
          <ul class="footer-links">
            <li><a href="services.html" data-en="Web Design" data-id="Web Design">Web Design</a></li>
            <li><a href="services.html" data-en="AI Content & Caption" data-id="AI Konten & Caption">AI Content & Caption</a></li>
            <li><a href="services.html" data-en="AI Video (HeyGen)" data-id="AI Video (HeyGen)">AI Video (HeyGen)</a></li>
            <li><a href="services.html" data-en="Virtual Assistant" data-id="Virtual Assistant">Virtual Assistant</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <ul class="footer-links">
            <li><a href="#">arwandaamalisa.my.id</a></li>
            <li><a href="#">Bali, Indonesia</a></li>
            <li><a href="contact.html" data-en="Send a Message" data-id="Kirim Pesan">Send a Message</a></li>
            <li><a href="#" data-en="Available for Projects" data-id="Tersedia untuk Proyek">Available for Projects</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2024 Arwanda Amalisa. All rights reserved.</div>
        <div class="footer-credit">Designed & built with ♥ in Bali</div>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  initScrollAnim();
});
