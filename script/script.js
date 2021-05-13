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



$(document).ready(function(){

  var body = $('body');
  var popupLinks = $('.popup_link');

  // Tags animation

  $('.fly-tags').removeClass('animation');

  // Mobile menu

  $('.header__burger').click(function (e) {
    $('.header__menu, .burger__container').toggleClass('header__menu_open');
    if ($('.header__menu').hasClass('header__menu_open')) {
      body.css('overflow', 'hidden'); 
    } else {
      body.css('overflow', 'auto');
    }
    return false;
  });  

  // popups

  popupLinks.click(function() { 
    var popup_id = $(this).attr("href"); 
    $(popup_id).show(); 
    $('.overlay_popup').show(); 
  })
  
  $('.overlay_popup, .popup__close, .contact__form_send').click(function() { 
    $('.overlay_popup, .popup').hide();
  })

});





