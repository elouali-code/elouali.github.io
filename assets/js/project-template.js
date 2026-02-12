(function () {
  function initMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.querySelector('.menu-close');
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('menu-overlay');

    if (!menuBtn || !closeBtn || !sidebar || !overlay) return;

    function openMenu() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  function initReveal() {
    const blocks = document.querySelectorAll('.reveal');
    if (!blocks.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach(function (block) {
      observer.observe(block);
    });
  }

  function initSliders() {
    const sliders = document.querySelectorAll('[data-slider]');
    sliders.forEach(function (slider) {
      const track = slider.querySelector('.slides');
      const slides = slider.querySelectorAll('.slide');
      const prev = slider.querySelector('.slider-control.prev');
      const next = slider.querySelector('.slider-control.next');
      const dotsWrap = slider.querySelector('.slider-dots');
      if (!track || !slides.length) return;

      let index = 0;
      const max = slides.length;

      function render() {
        track.style.transform = 'translateX(-' + index * 100 + '%)';
        if (!dotsWrap) return;
        dotsWrap.querySelectorAll('button').forEach(function (dot, dotIndex) {
          dot.classList.toggle('active', dotIndex === index);
        });
      }

      if (dotsWrap) {
        dotsWrap.innerHTML = '';
        for (let i = 0; i < max; i += 1) {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          dot.addEventListener('click', function () {
            index = i;
            render();
          });
          dotsWrap.appendChild(dot);
        }
      }

      if (max <= 1) {
        if (prev) prev.style.display = 'none';
        if (next) next.style.display = 'none';
      }

      if (prev) {
        prev.addEventListener('click', function () {
          index = (index - 1 + max) % max;
          render();
        });
      }

      if (next) {
        next.addEventListener('click', function () {
          index = (index + 1) % max;
          render();
        });
      }

      render();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initReveal();
    initSliders();
  });
})();
