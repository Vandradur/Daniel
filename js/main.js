/**** NAVIGATION ****/
$(".menu").on("click", function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("menu-open");
});
$(".nav a").on("click", function () {
  $(".menu").removeClass("active");
  $(".overlay").removeClass("menu-open");
});

/**** LANDING ANIMATION ****/
$(document).ready(function () {
  if ($(".landing").is(":visible")) {
    $(".wrapper").css({
      "opacity": "0"
    });
  }
  $(".splash-arrow").click(function () {
    $(".landing").slideUp("800", function () {
      $(".wrapper").delay(100).animate({
        "opacity": "1.0"
      }, 800);
    });
  });
});

$(window).scroll(function () {
  $(window).off("scroll");
  $(".landing").slideUp("800", function () {
    $("html, body").animate({
      "scrollTop": "0px"
    }, 100);
    $(".wrapper").delay(100).animate({
      "opacity": "1.0"
    }, 800);
  });
});



/**** BEES ROTATION ****/

var looper;
var degrees = 0;

function rotateAnimation(el, speed) {
  var elem = document.getElementById(el);
  elem.style.transform = 'rotate(' + degrees + 'deg)';
  looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
  degrees--;
  if (degrees < -359) {
    degrees = -1;
  }
}

