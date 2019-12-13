(function($) {
  $(function() {
    // ************************************ Carousel ******************************************

    var Carousel = {
      body : $(".js-carousel"),
      context : $(".js-carouselCtx"),
      list: $(".js-carouselList"),
      itemLength : $(".js-carouselList .Carousel-content-item").length,
      currentX : 0,
      startX: 0,
      currentItem : 1,
      isScrolling : false,
      isNeedToBack : false
    }

    setUpCasousel();

    $(window).on("resize load", function() {
      carouselInit();
    });

    function setUpCasousel() {
      var realFirstItem = Carousel.list.find('.Carousel-content-item').first();
      var firstItem = realFirstItem.clone();
      var firstItemIndex = Carousel.itemLength+1;
      firstItem.attr('id',"carousel"+firstItemIndex);
      firstItem.addClass('Cloned');

      var lastItem = Carousel.list.find('.Carousel-content-item').last().clone();
      var lastItemIndex = 0;
      lastItem.attr('id',"carousel"+lastItemIndex);
      lastItem.addClass('Cloned');

      Carousel.list.append(firstItem);
      Carousel.list.prepend(lastItem);
      Carousel.list.css('left', 0 - realFirstItem.position().left);
    }

    function carouselInit() {
      var mWidth = Carousel.body.width();
      var mHeight = mWidth / 2.665;
      Carousel.context.height(mHeight);
    }

    function scrollCarousel(index) {
      Carousel.isScrolling = true;
      var carouselItem = $("#carousel" + index);
      if (carouselItem.length == 0) {
        Carousel.isScrolling = false;
        return;
      }
      if (carouselItem.hasClass('Cloned')) {
        index = carouselItem.attr('data-index');
        var realItem = $('#carousel'+index);
        Carousel.currentItem = index;
      }
      $(".Carousel-nav-item--active").removeClass("Carousel-nav-item--active");
      $(".js-carouselNavItem[data-index=" + index + "]").addClass(
        "Carousel-nav-item--active"
      );
      Carousel.list.animate(
        {
          left: 0 - carouselItem.position().left
        },
        400,
        function() {
          if (carouselItem.hasClass('Cloned')) {
            Carousel.list.css('left',0 - realItem.position().left);
          }
          Carousel.isScrolling = false;
        }
      );
    }

    $(".js-carouselList img").on("mousedown", function(e) {
      e.preventDefault();
    });

    $(".js-carouselList").on("mousedown", function(e) {
      Carousel.currentX = e.pageX;
      Carousel.startX = Carousel.currentX;
      window.addEventListener("mousemove", carouselGrabbing);
      window.addEventListener("mouseup", carouselStop);
    });

    function carouselGrabbing(e) {
      Carousel.isNeedToBack = true;
      var distanceX = e.pageX - Carousel.currentX;
      Carousel.currentX = e.pageX;
      Carousel.list.css({
        left: Carousel.list.position().left + distanceX
      });
      if (e.pageX - Carousel.startX >= 50) {
        Carousel.isNeedToBack = false;
        Carousel.currentItem--;
        scrollCarousel(Carousel.currentItem);
        window.removeEventListener("mousemove", carouselGrabbing);
        window.removeEventListener("mouseup", carouselStop);
      } else if (Carousel.startX - e.pageX >= 50) {
        Carousel.isNeedToBack = false;
        Carousel.currentItem++;
        scrollCarousel(Carousel.currentItem);
        window.removeEventListener("mousemove", carouselGrabbing);
        window.removeEventListener("mouseup", carouselStop);
      }
    }

    function carouselStop(e) {
      window.removeEventListener("mousemove", carouselGrabbing);
      window.removeEventListener("mouseup", carouselStop);
      if (Carousel.isNeedToBack) {
        var carouselItem = $("#carousel" + Carousel.currentItem);
        Carousel.list.animate(
          {
            left: 0 - carouselItem.position().left
          },
          400,
          function() {
            Carousel.isScrolling = false;
          }
        );
      }
    }

    $(".js-locationBtn").click(function() {
      var mParent = $(this).parent();
      mParent.toggleClass("Menu-branch-search-location--active");
    });

    $(".js-locationOption").click(function() {
      var mLocation = $(this)
        .find("span")
        .text();
      var locationBtn = $(".js-locationBtn");
      locationBtn.text(mLocation);
      locationBtn.parent().removeClass("Menu-branch-search-location--active");
    });

    $(".js-navHamburger").click(function() {
      $(".js-nav").toggleClass("Nav--active");
      if ($(".js-nav").hasClass("Nav--active")) {
        $("body").addClass("Noscroll");
      } else {
        $("body").removeClass("Noscroll");
      }
    });

    $(".js-carouselNavItem").click(function() {
      if ($(this).hasClass("Carousel-nav-item--active")) {
        return;
      }
      var index = $(this).attr("data-index");
      Carousel.currentItem = index;
      scrollCarousel(Carousel.currentItem);
    });

    $(".js-carouselBtn").click(function() {
      if (Carousel.isScrolling) {
        return;
      }
      if ($(this).hasClass("Carousel-content__btn--right")) {
        Carousel.currentItem++;
      } else {
        Carousel.currentItem--;
      }
      scrollCarousel(Carousel.currentItem);
    });

    // ************************************ Product ******************************************
    var isGiftScrolling = false;
    $('.js-productGiftBtn').click(function(){
      if (isGiftScrolling) {
        return;
      }
      isGiftScrolling = true;
      var parent = $(this).parent();
      if (parent.hasClass('Product-content-item-gift--active')) {
        parent.removeClass('Product-content-item-gift--active');
        setTimeout(function () {
          parent.find('.Product-content-item-gift-detail').hide();
          isGiftScrolling = false;
        }, 500);
      } else {
        parent.find('.Product-content-item-gift-detail').show();
        setTimeout(function () {
          parent.addClass('Product-content-item-gift--active');
          isGiftScrolling = false;
        }, 20);
      }
    })

    $('.js-productCartBtn').click(function(){
      var cartNum = $('.js-cartView').attr('data-count');
      cartNum++;
      $('.js-cartView').attr('data-count',cartNum++)
    });

    setTimeout(function () {
      $('.js-cart').removeClass('Cart--disable');
    }, 1000);
  });
})(jQuery);
