const $header = document.querySelector('.header');
const $mobileMenu = document.querySelector('.navbar');
const $scrollToTopBtn = document.querySelector('.scroll-to-top-button')

document.addEventListener("scroll", e => {
      
      if (window.scrollY !== 0) $header.classList.add('header--scroll'); 
      else $header.classList.remove('header--scroll');

      if (window.scrollY > 100) $scrollToTopBtn.classList.add('scroll-to-top-button--active'); 
      else $scrollToTopBtn.classList.remove('scroll-to-top-button--active');
});

document.addEventListener("click", e => {
      if (e.target.matches('.burger-menu-container') || e.target.matches('.burger-menu')) {
            $mobileMenu.classList.toggle('navbar--active');
      };

      if (e.target.matches('.navbar__link')) {
            $mobileMenu.classList.remove('navbar--active');
      };
});