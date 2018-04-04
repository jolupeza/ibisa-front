"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

$(function () {
  var $window = $(window),
      $document = $(document);

  $window.on('scroll', function (ev) {
    var arrow = $('.ArrowTop');

    if ( $(this).scrollTop() > 150 ) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  });

  $('.ArrowTop').on('click', function (ev) {
    ev.preventDefault();

    $('html, body').animate({scrollTop: 0}, 800);
  });

  //$document.on('ready', function () {
  //});

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
