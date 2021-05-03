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
  
  $('.fly-tags').removeClass('animation');
  
});

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(() => {
    document.querySelectorAll('.fly-tags').forEach((el) => {
      el.classList.remove('animation');
    });
  }, 300);
});
