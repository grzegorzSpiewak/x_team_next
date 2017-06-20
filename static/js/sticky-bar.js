(function(){
  "use strict";

  // sticky top bar
  var height = document.querySelector('.hero-section').clientHeight;
  window.addEventListener('scroll', function() {
    var scrollTop = document.querySelector('body').scrollTop;
    if (scrollTop > 200) {
      document.querySelector('.menu').classList.add('menu--sticky');
    } else {
      document.querySelector('.menu').classList.remove('menu--sticky');
    }
    if (scrollTop > height) {
      document.querySelector('.menu').classList.add('menu--sticky--show');
      document.querySelector('.sticky-cta').classList.add('sticky-cta--show');
    } else {
      document.querySelector('.menu').classList.remove('menu--sticky--show');
      document.querySelector('.sticky-cta').classList.remove('sticky-cta--show');
    }
  }, true)

})();
