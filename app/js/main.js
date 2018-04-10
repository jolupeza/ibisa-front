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
})(jQuery);

