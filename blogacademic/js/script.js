$(document).ready(function() {
  var headerslideshow = new Swiper(".header-slideshow", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var gallerybutton = new Swiper(".gallery-button", {
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
    
  });
  var latestnews = new Swiper(".latest-news", {
    navigation: {
      nextEl: ".late-next",
      prevEl: ".late-prev"
    },
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
  });
  var events = new Swiper(".events", {
    navigation: {
      nextEl: ".event-next",
      prevEl: ".event-prev"
    },
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
  var partners = new Swiper(".partners", {
    navigation: {
      nextEl: ".partners-next",
      prevEl: ".partners-prev"
    },
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
});
