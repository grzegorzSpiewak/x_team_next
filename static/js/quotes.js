(function(){
  "use strict";

  // Quotes carousel
  var quotes__box = document.querySelector('.quotes__quotes');
  var interval = 10;


  // set the 1st page active
  document.querySelector(".quotes__input:first-of-type").checked = true;

  var firstRadio = quotes__box.querySelector(".quotes__input:first-of-type");
  var lastRadio = quotes__box.querySelector(".quotes__input:last-of-type");

  function carousel() {
    function f() {
      var activeRadio = quotes__box.querySelector(".quotes__input:checked");
      var nextRadio = activeRadio.nextElementSibling;

      if (activeRadio == lastRadio) {
        firstRadio.checked = true;
      } else {
        nextRadio.checked = true;
        activeRadio = nextRadio;
        nextRadio = nextRadio.nextElementSibling;
      }

      carousel();
    }
    setTimeout(f, interval*1000)

  }

  // developers quotes
  var labelDev =  document.querySelector(".quotes--devs__page__label");
  if (typeof(labelDev) != 'undefined' && labelDev != null) {

    var interval = 13;

    // when clicking a bullet, the interval is reset
    var devQ = document.querySelectorAll('.quotes--devs__page__label');
    for(var i=0; i<devQ.length; i++){
      devQ[i].addEventListener("click", function(event){
        interval = 13;
      });
    }
  }

  carousel();

})();
