// app.js - interactivity & animations for Arpita Jena portfolio

// ===== Helper Functions ===== //
function $(selector, scope = document) {
  return scope.querySelector(selector);
}
function $$(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// ===== Smooth Scrolling & Active Nav ===== //
const navLinks = $$('.nav__link');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = $(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav item based on scroll
const sections = $$('section');
function setActiveSection() {
  const scrollPos = window.scrollY + 100;
  sections.forEach((sec) => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach((lnk) => lnk.classList.remove('active'));
      const activeLink = $(`.nav__link[href="#${sec.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveSection);

// ===== Typewriter Effect for Hero Tagline ===== //
const taglineEl = $('.hero__tagline');
const taglineText = taglineEl.textContent;
let idx = 0;
function typeWriter() {
  taglineEl.textContent = taglineText.slice(0, idx);
  idx += 1;
  if (idx <= taglineText.length) {
    setTimeout(typeWriter, 100);
  }
}
// Start typing on page load
window.addEventListener('load', () => {
  taglineEl.textContent = '';
  typeWriter();
  $('#year').textContent = new Date().getFullYear();
});

// ===== Skill Card Flip handled by CSS (:hover) ===== //

// ===== Project Modal Logic ===== //
const modalOverlay = $('#modal-overlay');
function openModal(modal) {
  modal.classList.add('show');
  modalOverlay.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  $("body").style.overflow = 'hidden';
  // focus trap
  modal.querySelector('[data-close]').focus();
}
function closeModal() {
  const openModalEl = $('.modal.show');
  if (!openModalEl) return;
  openModalEl.classList.remove('show');
  openModalEl.setAttribute('aria-hidden', 'true');
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

$$('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    const targetId = card.dataset.modalTarget;
    const modal = $("#" + targetId);
    if (modal) openModal(modal);
  });
});

modalOverlay.addEventListener('click', closeModal);
$$('[data-close]').forEach((btn) => btn.addEventListener('click', closeModal));
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Scroll-triggered Timeline Animations ===== //
function revealOnScroll() {
  $$('.timeline-item').forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      item.classList.add('animate');
    }
  });
  // counters
  $$('.achievement-counter').forEach((counter) => {
    if (counter.dataset.counted) return;
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      animateCounter(counter);
      counter.dataset.counted = 'true';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Achievement Counters ===== //
function animateCounter(counter) {
  const target = +counter.dataset.count;
  const span = counter.querySelector('.counter-value');
  let current = 0;
  const increment = Math.ceil(target / 100);
  function update() {
    current += increment;
    if (current > target) current = target;
    span.textContent = current;
    if (current < target) requestAnimationFrame(update);
  }
  update();
}

// ===== Contact Form Validation ===== //
const contactForm = $('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name = $('#name');
  const email = $('#email');
  const message = $('#message');
  if (!name.value.trim()) {
    showError('name');
    valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError('email');
    valid = false;
  }
  if (!message.value.trim()) {
    showError('message');
    valid = false;
  }
  if (valid) {
    contactForm.reset();
    $('#form-success').classList.remove('hidden');
    setTimeout(() => $('#form-success').classList.add('hidden'), 4000);
  }
});
function showError(field) {
  $('#error-' + field).classList.remove('hidden');
  setTimeout(() => {
    $('#error-' + field).classList.add('hidden');
  }, 3000);
}

// ===== Intersection Observer for Parallax shapes ===== //
const shapes = $$('.shape');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const delta = scrollTop - lastScroll;
  shapes.forEach((shape, idx) => {
    const speed = (idx + 1) * 0.3;
    const yPos = parseFloat(shape.dataset.y || 0) + delta * speed;
    shape.dataset.y = yPos;
    shape.style.transform = `translateY(${yPos}px)`;
  });
  lastScroll = scrollTop <= 0 ? 0 : scrollTop; // For mobile bouncing
});