if ($("#mobile-indicator").css("display") == "none") {

  var is_mobile = false;

} else {

  var is_mobile = true;

}

function animateAll() {


}

// About


// About END



$(document).ready(function () {

  setParallax();

});

$(window).on("resize", function () {

  //animateAll();

});

$(window).on("resize scroll", function () {

  setParallax();

});

$(document).ready(function () {

  animateAll();

});

function setParallax() {

  $(".main-cover .prlx-cover").filter(function () {

    return !$(this).find(".play-slider").length

  }).prlx($("body"), -250, 100, false);

  $(".page-header .prlx-cover").filter(function () {

    return !$(this).find(".play-slider").length

  }).prlx($("body"), -250, 100, false);

}

(function( $ ) {
  $.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

    if (!is_mobile) {

      var obj = $(this);

      var yPos;

      if (fromTop) {

        if ($(window).scrollTop() <= pTrigger.offset().top) {

          yPos = yStart;

        } else if ($(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

          yPos = yFinish;

        } else {

          var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height());

          var yRange = yStart - yFinish,
            posInRange = yRange * percentOffset,
            yPos = posInRange + yFinish;

          obj.attr("percentOffset", percentOffset);

        }

      } else {

        if ($(window).scrollTop() <= pTrigger.offset().top - $(window).height()) {

          yPos = yStart;

        } else if ($(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

          yPos = yFinish;

        } else {

          var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

          var yRange = yStart - yFinish,
            posInRange = yRange * percentOffset,
            yPos = posInRange + yFinish;

          obj.attr("percentOffset", percentOffset);

        }

      }

      TweenMax.to(obj, .7, {y: yPos, ease:Linear.ease});

    }

  };
})( jQuery );