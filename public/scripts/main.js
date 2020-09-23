$(document).ready(function () {

	stickyBlocks();

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
		//fixedCalendar();
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

	// function fixedCalendar() {
	//   let scrollPos = $(window).scrollTop(),
	//     headerHeight = $(".header").outerHeight(),
	//     calendarPos = $(".calendar").offset().top,
	//     offsetPos = calendarPos - headerHeight;
	//   console.log(offsetPos, scrollPos, calendarPos);
	//   if (scrollPos >= offsetPos) {
	//     if (!$(".calendar").hasClass("fixed")) {
	//       $(".calendar").addClass("fixed");
	//       $(".calendar").css({
	//         top: headerHeight,
	//       });
	//     }
	//   } else {
	//     if ($(".calendar").hasClass("fixed")) {
	//       $(".calendar").removeClass("fixed");
	//       $(".calendar").css({
	//         top: "auto",
	//       });
	//     }
	//   }
	// }

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

	$(".main-slider-top").on("init", function () {

		$(".slider-wrapper-mt").append('<div class="slick-arrow-fake slick-prev-fake"></div>');
		$(".slider-wrapper-mt").append('<div class="slick-arrow-fake slick-next-fake"></div>');

		$(".main-slider-top-img").each(function () {

			$(this).append('<div class="img-mask"></div>');

		});

	});

	$(".main-slider-top").on("afterChange", function(event, slick, currentSlide){

		mainPicIn(currentSlide);

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
