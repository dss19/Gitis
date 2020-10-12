$(document).ready(function () {

	stickyBlocks();
	sliderButtonsPos();
	svgInline();
	billNav();
	billScroll();	

	$(window).on("scroll touchmove resize", function () {
		fixedHeader();
		sliderButtonsPos();
		billNav();
		billScroll();
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

	setTimeout(function () {
		$('.cookie-modal').addClass('vis');
	}, 3000)

	$('.cookie-modal-agree').click(function () {
		$('.cookie-modal').removeClass('vis');
	});
	$('.cookie-modal-close').click(function () {
		$('.cookie-modal').removeClass('vis');
	});

	// Модальное окно
	$('[data-fancybox^="modal"]').fancybox({
		animationEffect: "fade",
		animationDuration: 300,
		touch: false,
		smallBtn: false,
		modal: true,
		clickOutside: true
	});

	$('.header-mobile-humb').click(function () {
		$('.mobile-menu').addClass('active');
	});
	$('.mobile-menu-close').click(function () {
		$('.mobile-menu').removeClass('active');
	});
	$('.mobile-menu').click(function (e) {
		let popup = $('.mobile-menu-wrap');
		if (!popup.is(e.target)) {
			$('.mobile-menu').removeClass('active');
		}
	});




	// Верхний слайдер на Главной

	function sliderButtonsPos() {
		var imgHeight = $(".main-slider-top-img").outerHeight(),
      imgWidth = $(".main-slider-top-img").outerWidth(),
      btnWidth = $(".slick-arrow-fake").outerWidth(),
      btnPosLeft = imgWidth - btnWidth,
      btnPosTop = imgHeight - btnWidth,
      btnPosLeftPrev = imgWidth - btnWidth - btnWidth;
    $(".slick-next-fake").css({
      top: btnPosTop + "px",
      left: btnPosLeft + "px",
    });
    $(".slick-prev-fake").css({
      top: btnPosTop + "px",
      left: btnPosLeftPrev + "px",
    });
	}

	$(window).on("resize", function () {
    sliderButtonsPos();
  });

	$(".main-slider-top").on("init", function () {

		$(".slider-wrapper-mt").append('<div class="slick-arrow-fake slick-prev-fake"></div>');
		$(".slider-wrapper-mt").append('<div class="slick-arrow-fake slick-next-fake"></div>');
		
		sliderButtonsPos();

		$(".main-slider-top-img").each(function () {

			$(this).append('<div class="img-mask"></div>');

		});

	});

	$(".main-slider-top").on("afterChange", function(event, slick, currentSlide){

		mainPicIn(currentSlide);
		sliderButtonsPos();

	});

	$('.main-slider-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		fade: true,
		speed: 0
	});

	$(".slider-wrapper-mt .slick-prev-fake").click(function () {

		$(".main-slider-top").removeClass("dir-next").addClass("dir-prev");

		if ($(".main-slider-top .slick-slide.slick-active").prevAll().not(".slick-cloned").length) {

			var nextSlideIndex = $(".main-slider-top .slick-slide.slick-active").prev().not(".slick-cloned").data("slick-index");
			
		} else {

			var nextSlideIndex = $(".main-slider-top .slick-slide").not(".slick-cloned").length - 1;
			
		}

		mainPicOut($(".main-slider-top .slick-slide.slick-active").data("slick-index"), nextSlideIndex);

		setTimeout(function () {

			$(".main-slider-top").slick("slickGoTo", nextSlideIndex);

		}, 500);

	});

	$(".slider-wrapper-mt .slick-next-fake").click(function () {

		$(".main-slider-top").removeClass("dir-prev").addClass("dir-next");

		if ($(".main-slider-top .slick-slide.slick-active").nextAll().not(".slick-cloned").length) {

			var nextSlideIndex = $(".main-slider-top .slick-slide.slick-active").next().not(".slick-cloned").data("slick-index");

		} else {

			var nextSlideIndex = 0;

		}

		mainPicOut($(".main-slider-top .slick-slide.slick-active").data("slick-index"), nextSlideIndex);

		setTimeout(function () {

			$(".main-slider-top").slick("slickGoTo", nextSlideIndex);

		}, 500);

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
	
	// Верхний слайдер Площадки
	$('.stage-slider-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0
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

	$('.filter-scene-menu-link').click(function () {
		var scene = $(this).text();
		$('.filter-scene span').text(scene);
	});
	
	// Отображение блоков с датами на странице Проекта
	var billItem = $('.page-content-bill-item');
	if (billItem.length < 2) {
		billItem.removeClass('col-md-6').addClass('single');
	}
	

	// Ajax Афиши
	$.ajax({
		type: "GET",
		cache: true,
		success: function () {
			$(".playbill-wrapper").load("loads/playbill-date-img.html");
		},		
	});

	$('.filter-abc-date').click(function () {
		$('.filter-abc-item').removeClass('active');
		$(this).addClass('active');
		if ($('.playbill').hasClass('img')) {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-date-img.html");
				},
			});
		} else {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-date-noimg.html");
				},
			});
		}
		// if (!$('.playbill').hasClass('date')) {
		// 	$.ajax({
		// 		type: "GET",
		// 		cache: true,
		// 		success: function () {
		// 			$(".calendar-wrapper").load("loads/days.html");
		// 		},
		// 	});
		// }
	})
	$('.filter-abc-abc').click(function () {
		$('.filter-abc-item').removeClass('active');
		$(this).addClass('active');
		if ($('.playbill').hasClass('img')) {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-abc-img.html");
				},
			});
		} else {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-abc-noimg.html");
				},
			});
		}
		// if (!$('.playbill').hasClass('abc')) {
		// 	$.ajax({
		// 		type: "GET",
		// 		cache: true,
		// 		success: function () {
		// 			$(".calendar-wrapper").load("loads/letters.html");
		// 		},
		// 	});
		// }
	})
	$('.filter-img-yes').click(function () {
		$('.filter-img-item').removeClass('active');
		$(this).addClass('active');
		if ($('.playbill').hasClass('date')) {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-date-img.html");
				},
			});
		} else {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-abc-img.html");
				},
			});
		}
	})
	$('.filter-img-no').click(function () {
		$('.filter-img-item').removeClass('active');
		$(this).addClass('active');
		if ($('.playbill').hasClass('date')) {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-date-noimg.html");
				},
			});
		} else {
			$.ajax({
				type: "GET",
				cache: true,
				success: function () {
					$(".playbill-wrapper").load("loads/playbill-abc-noimg.html");
				},
			});
		}
	})

	// Форма заявки
	$(".input").each(function () {
    var label;
    $(".input").focusin(function () {
      label = $(this).children(".label");
      label.addClass("focused");
    });
    $(".input").focusout(function () {
      var input = $(this).children(".field");
      if (input.val() === "") {
        label.removeClass("focused");
      }
    });
	});
	
	$(".input-comment").on("keyup input", function () {
    $(this)
      .css("height", "auto")
      .css(
        "height",
        this.scrollHeight + (this.offsetHeight - this.clientHeight)
      );
	});
	
	$('.form-valid').each(function () {
		form = $(this);
		$('.input-phone').mask("+7 (999) 999-99-99");
		form.validate({
			rules: {
					f_i_o: {
						required: true,
						minlength: 2
					}
				},
				messages: {
					f_i_o: {
						required: 'Укажите имя',
						minlength: 'Длина имени должна быть более 2-х символов'
					},
					email: {
						required: 'Укажите почту',
						minlength: 'Неверный формат почтового адреса'
					},
					phone: {
						required: 'Укажите телефон'
					}					
				},
			submitHandler: function (form) {
				$.ajax({
					url: '',
					// type: 'POST',
					contentType: false,
					processData: false,
					data: new FormData(form),
					success: function () {
						$(form).trigger('reset');
						$.fancybox.close();
						setTimeout(function() {
							$.fancybox.open({
							src: '#modal-success',
							animationEffect: "fade",
							animationDuration: 300,
							touch: false,
							smallBtn: false,
							modal: true,
							clickOutside: true
							});
						}, 300);
					}
				})	
			}
		})
	})

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

	// Смотреть больше в Спектакле
	$('.show-about-desc-more').click(function () {
		$(this).toggleClass('active');
		$('.show-about-desc-hidden').toggleClass('hidden');
	});

});

function billScroll() {
	$("ul.playbill-menu a").click(function (e) {
		e.preventDefault();		
		if (!$(this).hasClass("empty")) {
			var topOffset;
			if ($('.scroll-div').css("display") == "block") {
				topOffset = $(".calendar").outerHeight() + 74;
			} else if ($('.scroll-div').css("display") == "flex") {
				topOffset = $(".calendar").outerHeight() + 81;
			} else {
				topOffset = $(".calendar").outerHeight() + 51;
			}
			console.log("scroll to" + topOffset);
			$("body, html").animate({
				scrollTop: $("a[name='" + $(this).attr("href").replace("#", "") + "']").offset().top - topOffset
			}, 1000);
		} else {
			return false;
		}
	});
}

function stickyBlocks() {

	var stickyElements = $(".sticky-block").filter(function () {
			return !$(this).find(".news-filter").length
		}),
		topOffset = 30,
		topOffsetProgram = 0;

	$(window).on("resize scroll touchmove", function () {

		stickyElements.each(function () {

			$(this).data("orig-width", $(this).outerWidth());

			$(this).closest(".sticky-wrapper").css({
				minHeight: $(this).outerHeight()
			});

			$(this).closest(".sticky-wrapper").css({
				minHeight: $(this).outerHeight()
			});

			var extraHeight = 0;

			if ($(".program-nav").length && $(".program-nav").hasClass("fixed")) {

				extraHeight = $(".program-nav").outerHeight();

			} else {

				extraHeight = 0

			}

			if ($("header").hasClass("fixed")) {

				var headerHeight = $("header").outerHeight() + extraHeight;

			} else {

				var headerHeight = 0 + extraHeight;

			}

			var el = $(this),
				elHeight = $(this).outerHeight(),
				elWrapper = $(this).closest(".sticky-wrapper"),
				wrapperHeight = elWrapper.outerHeight(),
				scrollPos = $(window).scrollTop();

			if (el.hasClass("calendar")) {

				topOffset = 0;

			}

			if (!el.hasClass("troupe-pic")) {

				var scrollCondition = scrollPos > (elWrapper.offset().top - headerHeight - topOffset);

				var stickCondition = elHeight < ($(window).height() - topOffset*2 - headerHeight) && elHeight < wrapperHeight;

				var topPos = headerHeight + topOffset;

			} else {

				scrollCondition = scrollPos > elWrapper.offset().top;

				stickCondition = true;

				topOffset = 0;

				var topPos = 0;

			}


			if (scrollCondition && stickCondition) {

				el.addClass("fixed").css({

					top: topPos,
					width: el.data("orig-width")

				});

				if (scrollPos > (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffset)) {

					el.css({

						marginTop: (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffset) - scrollPos

					});

				} else {

					el.css({
						marginTop: 0
					});

				}

			} else {

				el.removeClass("fixed").css({

					width: "auto",
					marginTop: 0

				})

			}



		});

		$(".program-nav").each(function () {

			$(this).data("orig-width", $(this).outerWidth());

			$(this).closest(".page-wrapper").css({
				minHeight: $(this).outerHeight()
			});


			if ($("header").hasClass("header-fixed")) {

				var headerHeight = $("header").outerHeight();

			} else {

				var headerHeight = 0;

			}

			var el = $(this),
				elHeight = $(this).outerHeight(),
				elWrapper = $(this).closest(".page-wrapper"),
				wrapperHeight = elWrapper.outerHeight(),
				scrollPos = $(window).scrollTop();

			if (scrollPos > (elWrapper.offset().top - headerHeight - topOffsetProgram) && elHeight < ($(window).height() - topOffsetProgram*2 - headerHeight) && elHeight < wrapperHeight) {

				$(".program-nav-wrapper").css({
					paddingTop: el.outerHeight()
				});

				el.addClass("fixed").css({

					top: headerHeight + topOffsetProgram,
					width: el.data("orig-width")

				});


				if (scrollPos > (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffsetProgram)) {

					el.css({

						marginTop: (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffsetProgram) - scrollPos

					});

				} else {

					el.css({
						marginTop: 0
					});

				}

			} else {

				$(".program-nav-wrapper").css({
					paddingTop: 0
				});

				el.removeClass("fixed").css({

					width: "auto"

				});

			}



		});

	});


}

function mainPicOut(slideIndex, nextSlideIndex) {

	var curSlide = $(".main-slider-top .slick-slide[data-slick-index='" + slideIndex + "']"),
		nextSlide = $(".main-slider-top .slick-slide[data-slick-index='" + nextSlideIndex + "']");

	// curSlide.find(".main-slide-pic-inner").css({
	// 	opacity: 0
	// });

	curSlide.find(".img-mask").show().removeClass("opening").addClass("open").removeClass("open").addClass("closing");
	$(".main-slider-top .slick-slide").not(curSlide).find(".img-mask").addClass("closed");

	$(".main-slider-top-info-inner").addClass("closing");

}

function mainPicIn(slideIndex) {

	var curSlide = $(".main-slider-top .slick-slide[data-slick-index='" + slideIndex + "']");

	// $(".main-slider-top .slick-slide").not(curSlide).find(".main-slide-pic-inner").css({
	// 	opacity: 1
	// });

	$(".main-slider-top .slick-slide").not(curSlide).find(".img-mask").removeClass("closing").removeClass("opening");

	curSlide.find(".img-mask").removeClass("closed").addClass("opening");

	setTimeout(function () {

		curSlide.find(".img-mask").hide().removeClass("closed").removeClass("opening");

	}, 500);

	$(".main-slider-top-info-inner").removeClass("closing");

}

// Конвертор свг

function svgInline() {
	$(".svg-inline").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find("svg");
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");
        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}

function billNav() {
	var scrollPos = $(window).scrollTop();
	$("a[name]").each(function () {
		var topOffset;
		if ($('.scroll-div').css("display") == "block") {
			topOffset = $(".calendar").outerHeight() + 144;
		} else if ($('.scroll-div').css("display") == "flex") {
			topOffset = $(".calendar").outerHeight() + 151;
		} else {
			topOffset = $(".calendar").outerHeight() + 121;
		}
		// topOffset = $("header").outerHeight() + $(".calendar").outerHeight() + 70;
		console.log(topOffset);
		if (scrollPos >= $(this).offset().top - topOffset) {
			if ($(".playbill-menu").length) {
				$(".playbill-menu a").removeClass("current")
				$(".playbill-menu a[href='#" + $(this).attr("name") + "']").addClass("current");
			}
			// if ($(".anchor-links").length) {
			// 	$(".anchor-links a").removeClass("active")
			// 	$(".anchor-links a[href='#" + $(this).attr("name") + "']").addClass("active");
			// }
			// if ($(".days-menu").length) {
			// 	$(".days-menu a").removeClass("active")
			// 	$(".days-menu a[href='#" + $(this).attr("name") + "']").addClass("active");
			// }
			// if ($(".alpha-menu").length) {
			// 	$(".alpha-menu a").removeClass("active")
			// 	$(".alpha-menu a[href='#" + $(this).attr("name") + "']").addClass("active");
			// }
		}		
	});
}