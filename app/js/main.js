"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      var arrow = $('.ArrowTop');

      if ( $(this).scrollTop() > 150 ) {
        arrow.fadeIn();
      } else {
        arrow.fadeOut();
      }

      checkScrollHeader();
    });

    checkScrollHeader();

    activateMultipleCarousel();

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({scrollTop: 0}, 800);
    });

    $('.element-animate').hover(
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();

        parent.addClass('animated ' + animation);
      },
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();

        parent.removeClass('animated ' + animation);
      }
    );

    $('#carousel-team').on('slide.bs.carousel', function (e) {
      loadMultipleCarousel(3, e);
    });

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  function checkScrollHeader () {
    var minScroll = 50,
        header = $('.Header');

    if ($window.scrollTop() > minScroll) {
      header.addClass('Header--scroll');
    } else {
      header.removeClass('Header--scroll');
    }
  }

  function loadMultipleCarousel (item, event) {
    var $e = $(event.relatedTarget),
        idx = $e.index(),
        itemsPerSlide = item,
        totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        if (event.direction == "left") {
          $('.carousel-item').eq(i).appendTo('.carousel-inner');
        } else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner');
        }
      }
    }
  }

  function activateMultipleCarousel () {
    var carousel = $('.Carousel--multiple'),
        idCarousel = carousel.attr('id'),
        numSlides = carousel.data('numslides'),
        totalSlides = carousel.find('.carousel-item').length;

    if (totalSlides > numSlides) {
      $('#'+idCarousel).carousel({
        interval: 4000
      });
    }
  }
})(jQuery);

