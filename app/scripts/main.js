$(document).ready(function () {
  
  // Счетчик в слайдерах
  // $(".slider-countable").each(function () {
  //   $(this).on("init", function () {
  //     var curSlider = $(this),
  //       visibleSlides = $(this).find(".slick-slide.slick-active").length,
  //       curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") / visibleSlides + 1,
  //       totalSlides = Math.round($(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides);

  //     curSlider.closest(".slider-wrapper").append('<div class="slider-count"><span class="slider-count-cur">' + ("0" + curSlide).slice(-2) + '</span><span class="slider-count-sep">/</span><span class="slider-count-total">' + ("0" + totalSlides).slice(-2) + '</span></div>');

  //     if (totalSlides == 1) {
  //       curSlider.closest(".slider-wrapper").find(".slider-count").hide();
  //     }
  //   });

  //   $(this).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //     var curSlider = $(this),
  //       visibleSlides = $(this).find(".slick-slide.slick-active").length,
  //       curSlide = nextSlide / visibleSlides + 1;
  //     curSlider.closest(".slider-wrapper").find(".slider-count-cur").html(("0" + curSlide).slice(-2));
  //   });
  // });

  

  $(window).on("scroll touchmove resize", function () {
    fixedHeader();
    fixedCalendar();
  });

  function fixedHeader() {
    let scrollPos = $(window).scrollTop(),
      bannerHeight = $(".banner-img").outerHeight(),
      headerHeight = $(".header").outerHeight(),
      offsetPos = bannerHeight + headerHeight;
    if (scrollPos > offsetPos) {
      if (!$(".header").hasClass("fixed")) {
        $("main").css({
          marginTop: $("header").outerHeight(),
        });
        $(".header").addClass("fixed");
      }
    } else {
      if ($(".header").hasClass("fixed")) {
        $("main").css({
          marginTop: 0,
        });
        $(".header").removeClass("fixed");
      }
    }
  }

  function fixedCalendar() {
    let scrollPos = $(window).scrollTop(),
      headerHeight = $(".header").outerHeight(),
      calendarPos = $(".calendar").offset().top,
      offsetPos = calendarPos - headerHeight;
    console.log(offsetPos, scrollPos, calendarPos);
    if (scrollPos >= offsetPos) {
      if (!$(".calendar").hasClass("fixed")) {
        $(".calendar").addClass("fixed");
        $(".calendar").css({
          top: headerHeight,
        });        
      }
    } else {
      if ($(".calendar").hasClass("fixed")) {
        $(".calendar").removeClass("fixed");
        $(".calendar").css({
          top: "auto",
        });        
      }
    }
  }

  // Верхний слайдер на Главной
  $('.main-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });

  // Средний слайдер на Главной
  $(".main-slider-partners").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // Нижний слайдер на главной
  $('.main-slider-bottom').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 0
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
    rows: 0,
    responsive: [      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // Верхний слайдер Новости
  $('.news-img-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });

  // Нижний слайдер Новости
  $('.news-img-slider-bottom').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // Верхний слайдер Спектакля
  $('.show-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });

  // Нижний слайдер Спектакля
  // $('.show-slider-bottom').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   rows: 0
  // });

  // Верхний слайдер Площадки
  $('.stage-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });

  // Фильтры в афише
  $('.filter-abc-item').click(function () {
    $('.filter-abc-item').removeClass('active');
    $(this).addClass('active');
  });
  $('.filter-img-item').click(function () {
    $('.filter-img-item').removeClass('active');
    $(this).addClass('active');
  });

  // Выпадающее меню фильтра в Афише
  $('.filter-scene').click(function () {
    $('.filter-scene, .filter-scene-menu').toggleClass('active');
  });

  // Карты на странице контактов
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map-1', {
      center: [55.76343811803522, 37.60576528406144],
      zoom: 17
    }),
      myPlacemark = new ymaps.Placemark([55.76343811803522, 37.60576528406144], null, {
        iconLayout: 'default#image',
        iconImageHref: './images/images/pin.svg'
      });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');    
    var myMap2 = new ymaps.Map('map-2', {
      center: [55.67402156903472, 37.542329499999994],
      zoom: 17
    }),
      myPlacemark2 = new ymaps.Placemark([55.67402156903472, 37.542329499999994], null, {
        iconLayout: 'default#image',
        iconImageHref: './images/images/pin.svg'
      });
    myMap2.geoObjects.add(myPlacemark2);
    myMap2.behaviors.disable('scrollZoom');    
  });

  // Скролл наверх 
  $(".stage-history-on-top-button").click(function () {
    $("html, body").animate({
      scrollTop: 0,
    },
      1000
    );
  });

  $('.svg-inline').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });


  $(".main-billboard-list").each(function () {
    var mList = $(this),
      mClone1 = $(this).clone(),
      mClone2 = $(this).clone(),
      mSize = $(this).find(".main-billboard-item").length;

    mList.before(mClone1);
    mList.after(mClone2);

    $(this).closest(".main-billboard-content").css({
      animationDuration: mSize * 20 + "s",
      width: mList.outerWidth() * 3
    });
  });

});
