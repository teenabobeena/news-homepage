document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.nav-menu img');
    const navMenu = document.querySelector('.nav-menu ul');

    menuIcon.addEventListener('click', function() {
      navMenu.classList.toggle('show-menu');
      menuIcon.src = navMenu.classList.contains('show-menu') ? './assets/images/icon-menu-close.svg'
      : './assets/images/icon-menu.svg';
    });
  });