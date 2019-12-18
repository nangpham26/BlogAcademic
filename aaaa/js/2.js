$(document).ready(function() {
  var swiper = new Swiper(".header-slideshow", {
    effect: "fade",
  	slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  /*var gallerybotton = new Swiper(".gallery-botton", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '#swiper_btn_next',
      prevEl: '#swiper_btn_prev',
    }, 
  });*/
});

