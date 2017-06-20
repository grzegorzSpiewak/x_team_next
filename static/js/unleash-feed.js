(function(){
  "use strict";

  // Unleash Feed rotating items
  var unleash__box = document.querySelector('.unleash-feed__list');

  function unleashFeed() {
      function f() {
        var lastChild = document.querySelector(".unleash-feed__item:last-child");
        var firstChild = document.querySelector(".unleash-feed__item:first-child");

        unleash__box.insertBefore(lastChild, firstChild);

        unleashFeed();
      }
      setTimeout(f, 5000)
  }

  unleashFeed();

})();
