"use strict";$(document).ready(function(){$(".slider-countable").each(function(){$(this).on("init",function(){var s=$(this),i=$(this).find(".slick-slide.slick-active").length,l=$(this).find(".slick-slide.slick-current").data("slick-index")/i+1,o=Math.round($(this).find(".slick-slide").not(".slick-cloned").length/i);s.closest(".slider-wrapper").append('<div class="slider-count"><span class="slider-count-cur">'+("0"+l).slice(-2)+'</span><span class="slider-count-sep">/</span><span class="slider-count-total">'+("0"+o).slice(-2)+"</span></div>"),1==o&&s.closest(".slider-wrapper").find(".slider-count").hide()}),$(this).on("beforeChange",function(s,i,l,o){var e=$(this),c=o/$(this).find(".slick-slide.slick-active").length+1;e.closest(".slider-wrapper").find(".slider-count-cur").html(("0"+c).slice(-2))})}),$(".main-slider-top").slick({slidesToShow:1,slidesToScroll:1,rows:0}),$(".main-slider-partners").slick({slidesToShow:6,slidesToScroll:1,rows:0}),$(".main-slider-bottom").slick({slidesToShow:2,slidesToScroll:2,rows:0}),$(".project-slider-top").slick({slidesToShow:1,slidesToScroll:1,rows:0}),$(".project-slider-bottom").slick({slidesToShow:2,slidesToScroll:2,rows:0}),$(".news-img-slider-top").slick({slidesToShow:1,slidesToScroll:1,rows:0}),$(".news-img-slider-bottom").slick({slidesToShow:2,slidesToScroll:2,rows:0}),$(".show-slider-top").slick({slidesToShow:1,slidesToScroll:1,rows:0}),$(".stage-slider-top").slick({slidesToShow:1,slidesToScroll:1,rows:0}),ymaps.ready(function(){var s=new ymaps.Map("map-1",{center:[55.76343811803522,37.60576528406144],zoom:17}),i=new ymaps.Placemark([55.76343811803522,37.60576528406144],null,{iconLayout:"default#image",iconImageHref:"./images/images/pin.svg"});s.geoObjects.add(i),s.behaviors.disable("scrollZoom");var l=new ymaps.Map("map-2",{center:[55.67402156903472,37.542329499999994],zoom:17}),o=new ymaps.Placemark([55.67402156903472,37.542329499999994],null,{iconLayout:"default#image",iconImageHref:"./images/images/pin.svg"});l.geoObjects.add(o),l.behaviors.disable("scrollZoom")}),$(".stage-history-on-top-button").click(function(){$("html, body").animate({scrollTop:0},1e3)})});