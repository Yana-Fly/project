// Swiper settings 

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
})

// Tags animation

$(document).ready(function(){
  $('.fly-tags').removeClass('animation');
});

// Mobile menu

$(function () {
  $(".header__burger").click(function (e) {
    $(".header__menu, .burger__container").toggleClass("header__menu_open");
    if ($(".header__menu").hasClass("header__menu_open")) {
      $("body").css("overflow", "hidden"); 
    } else {
      $("body").css("overflow", "auto");
    }
    return false;
  });  
});

