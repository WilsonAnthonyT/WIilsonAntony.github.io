const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const reveals = document.querySelectorAll('.reveal');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

// Keep the public portfolio factual until verified academic metrics are provided.
const heroStats = document.querySelectorAll('.hero-meta > div');
if (heroStats.length >= 1) {
  const firstValue = heroStats[0].querySelector('strong');
  const firstLabel = heroStats[0].querySelector('span');
  if (firstValue) firstValue.textContent = 'NTHU';
  if (firstLabel) firstLabel.textContent = 'EECS Undergraduate';
}
