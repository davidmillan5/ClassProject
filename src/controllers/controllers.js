'use strict';

let menu = document.getElementById('menu');

/* What do I do when the event happends */
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 100) {
    menu.classList.add('secondarymenu');
    menu.classList.remove('mainmenu');
  } else {
    menu.classList.remove('secondarymenu');
    menu.classList.add('mainmenu');
  }
});
