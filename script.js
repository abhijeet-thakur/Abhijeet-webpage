(() => {
  'use strict';

  /* ───────────── NAVBAR SCROLL EFFECT ───────────── */
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });


  /* ───────────── SMOOTH SCROLL ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  /* ───────────── SCROLL REVEAL ANIMATION ───────────── */
  const revealElements = document.querySelectorAll(
    '.work__card, .service, .about__content, .about__images img, .loki__image, .contact-card'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  /* ───────────── HOVER TILT EFFECT (SUBTLE) ───────────── */
  const cards = document.querySelectorAll('.work__card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 6;
      const rotateY = ((x / rect.width) - 0.5) * -6;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });


  /* ───────────── BUTTON MICRO INTERACTION ───────────── */
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
    });
  });

})();