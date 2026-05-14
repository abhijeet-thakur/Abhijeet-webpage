(() => {

  'use strict';

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
      nav.style.background = 'rgba(8,8,8,0.92)';
      nav.style.backdropFilter = 'blur(18px)';
    }
    else{
      nav.style.background = 'rgba(8,8,8,0.65)';
      nav.style.backdropFilter = 'blur(14px)';
    }

  });


  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute('href')
      );

      if(target){

        target.scrollIntoView({
          behavior:'smooth'
        });

      }

    });

  });


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealItems = document.querySelectorAll(`
    .work-card,
    .service-card,
    .step,
    .about-item,
    .about-img,
    .contact-card
  `);

  revealItems.forEach(item => {

    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = `
      opacity 0.8s ease,
      transform 0.8s ease
    `;

  });

  const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

      }

    });

  },{
    threshold:0.15
  });

  revealItems.forEach(item => {
    revealObserver.observe(item);
  });


  /* =========================
     WORK CARD TILT EFFECT
  ========================= */

  const cards = document.querySelectorAll('.work-card');

  cards.forEach(card => {

    card.addEventListener('mousemove', e => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `;

    });

    card.addEventListener('mouseleave', () => {

      card.style.transform = `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        translateY(0)
      `;

    });

  });


  /* =========================
     HERO COUNTER ANIMATION
  ========================= */

  const counters = document.querySelectorAll('.trust-item strong');

  counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(targetText);

    const isPercent = targetText.includes('%');
    const isHour = targetText.includes('h');

    let current = 0;

    const updateCounter = () => {

      current += target / 40;

      if(current < target){

        if(isPercent){
          counter.innerText = Math.floor(current) + '%';
        }
        else if(isHour){
          counter.innerText = Math.floor(current) + 'h';
        }

        requestAnimationFrame(updateCounter);

      }
      else{

        counter.innerText = targetText;

      }

    };

    updateCounter();

  });

})();