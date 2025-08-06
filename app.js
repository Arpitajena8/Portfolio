// Smooth scroll for nav links & active link highlight

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href')));
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-links');
  const themeToggle = document.getElementById('theme-toggle');
  const pawPrintContainer = document.querySelector('.paw-print-container');
  const body = document.body;

  // Hamburger menu toggle for mobile nav
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });

  // Close mobile nav menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll handled by css scroll-behavior, but we update active link on scroll
  window.addEventListener('scroll', () => {
    // Sticky navbar background toggle
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight nav link based on current scroll position
    let currentSectionIndex = sections.findIndex(section => {
      const top = section.offsetTop - navbar.offsetHeight - 20;
      return window.scrollY >= top;
    });
    if (currentSectionIndex === -1) currentSectionIndex = 0;

    navLinks.forEach((link, idx) => {
      if (idx === currentSectionIndex) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  });

  // Theme toggle with localStorage persistence
  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      themeToggle.textContent = '🐱'; // Cat icon in dark mode
    } else {
      body.classList.remove('dark-theme');
      themeToggle.textContent = '🐕'; // Dog icon in light mode
    }
    localStorage.setItem('theme', theme);
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Initialize theme from localStorage or defaults to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Contact form submission mock-up with validation & playful error messages
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Basic validation
    let valid = true;
    const requiredFields = ['name', 'email', 'message'];
    requiredFields.forEach(id => {
      const input = form.querySelector(`#${id}`);
      if (!input.value.trim()) {
        valid = false;
        alert(`Oops! The "${input.previousElementSibling.textContent}" field needs some love 🐱`);
        input.focus();
        return;
      }
    });

    if (valid) {
      alert('Thanks for reaching out! I\'ll get back to you soon 🐕');
      form.reset();
    }
  });

  // Paw prints floating animation creation in hero section
  function createPawPrint(x, y, delay) {
    const paw = document.createElement('div');
    paw.classList.add('paw-print');
    paw.style.left = `${x}px`;
    paw.style.top = `${y}px`;
    paw.style.animationDelay = `${delay}s`;
    pawPrintContainer.appendChild(paw);
  }

  // Generate random paw prints inside container
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * pawPrintContainer.clientWidth;
    const y = Math.random() * pawPrintContainer.clientHeight;
    const delay = Math.random() * 6;
    createPawPrint(x, y, delay);
  }
});
