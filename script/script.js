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
  
  $('.header__list_link').click(function () {
    $('.header__menu, .burger__container').removeClass('header__menu_open');
    if ($('.header__menu').hasClass('header__menu_open')) {
      body.css('overflow', 'hidden'); 
    } else {
      body.css('overflow', 'auto');
    }
  });

  // popups

  popupLinks.click(function() { 
    var popup_id = $(this).attr("href"); 
    $(popup_id).addClass('popup__open');
    $('.overlay_popup').addClass('popup__open');
    body.css('overflow', 'hidden'); 
  })
  
  $('.overlay_popup, .popup__close').click(function() { 
    $('.overlay_popup, .popup').removeClass('popup__open');
    body.css('overflow', 'auto');
  })

  // validate

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /^(\+7)?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g.test(value); 
  });
  
  $('#popup_form').validate ({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      phone: {
        required: true,
        checkMask: true
      }
    },
    messages: {
      email: {
        required: 'Поле email обязательно для заполнения',
        email: "Адрес электронной почты был введен неправильно"
      },
      name: {
        required: 'Имя обязательно должно быть заполнено',
        minlength: 'Длина имени должна быть не менее 3-х символов'
      },
      phone: {
        required: 'Номер телефона обязательно должен быть заполнен',
        checkMask: "Введите телефон в формате +7(999)999-99-99"
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert("Ваша заявка принята. В ближайшее время мы свяжемся с вами!");
    }
  });
    
  $('#popup-tel_form').validate ({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      phone: {
        required: true,
        checkMask: true
      }
    },
    messages: {
      name: {
        required: 'Имя обязательно должно быть заполнено',
        minlength: 'Длина имени должна быть не менее 3-х символов'
      },
      phone: {
        required: 'Номер телефона обязательно должен быть заполнен',
        checkMask: "Введите телефон в формате +7(999)999-99-99"
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert("Ваша заявка принята. В ближайшее время мы свяжемся с вами!");
    }
  });
  
  $('#phone, #popup-tel-phone').mask("+7(999)999-99-99", {autoclear: false});
  
});





