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
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      500:{
        slidesPerView: 2,
        spaceBetween: 10
      }
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
    breakpoints: {
      1500: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500:{
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
    
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
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500:{
        slidesPerView: 1,
        spaceBetween: 10
      }
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
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      500:{
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
});
function myFunction(x) {
  x.classList.toggle("change");
  if($('#left-top').hasClass('dis-menu')){
    var element = document.getElementById("left-top");
    element.classList.remove("dis-menu");
    document.getElementById("fix-body").style.marginLeft = 0;
  }else{
  var element = document.getElementById("left-top");
  element.classList.add("dis-menu");
  document.getElementById("fix-body").style.marginLeft = "260px";
  }
}
function discontact(){
  if($('#top-bar').hasClass('dis-contact')){
    var element = document.getElementById("top-bar");
    element.classList.remove("dis-contact");
  }else{
    var element = document.getElementById("top-bar");
    element.classList.add("dis-contact");
  }
}

