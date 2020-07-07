$(document).ready(function () {
  
  // Счетчик в слайдерах
  $(".slider-countable").each(function () {
    $(this).on("init", function () {
      var curSlider = $(this),
        visibleSlides = $(this).find(".slick-slide.slick-active").length,
        curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") / visibleSlides + 1,
        totalSlides = Math.round($(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides);

      curSlider.closest(".slider-wrapper").append('<div class="slider-count"><span class="slider-count-cur">' + ("0" + curSlide).slice(-2) + '</span><span class="slider-count-sep">/</span><span class="slider-count-total">' + ("0" + totalSlides).slice(-2) + '</span></div>');

      if (totalSlides == 1) {
        curSlider.closest(".slider-wrapper").find(".slider-count").hide();
      }
    });

    $(this).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var curSlider = $(this),
        visibleSlides = $(this).find(".slick-slide.slick-active").length,
        curSlide = nextSlide / visibleSlides + 1;
      curSlider.closest(".slider-wrapper").find(".slider-count-cur").html(("0" + curSlide).slice(-2));
    });
  });

  // Верхний слайдер
  $('.project-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });

  // Нижний слайдер
  $('.project-slider-bottom').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 0
  });


});
