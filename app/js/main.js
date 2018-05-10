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
  let $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      enabledArrowTop();

      checkScrollHeader();
    });

    $window.on('resize', () => {
      enabledArrowTop();
    });

    checkSidebarSubmenu();

    checkScrollHeader();

    enabledArrowTop();

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

    $('.js-sidebar-toggle').on('click', function () {
      var $this = $(this),
          sidebar = $('.Sidebar');

      if (sidebar.hasClass('active')) {
        sidebar.removeClass('active');
      } else {
        sidebar.addClass('active');
      }
    });

    $('.Goto').on('click', (e) => {
      e.preventDefault();

      let $this = $(e.target),
          href = $this.attr('href');

      $('html, body').stop().animate({
        scrollTop: $(href).offset().top - 100
      }, 600);
    });

    $('.Header__list__toggle').on('click', (e) => {
      let $this = $(e.target),
          submenu = $this.next().next('.sub-menu');

      if ($this.hasClass('icon-keyboard_arrow_down')) {
        $this.removeClass('icon-keyboard_arrow_down').addClass('icon-keyboard_arrow_up');

        submenu.addClass('active');
      } else {
        $this.addClass('icon-keyboard_arrow_down').removeClass('icon-keyboard_arrow_up');

        submenu.removeClass('active');
      }
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

  let enabledArrowTop = () => {
    let arrow = $('.ArrowTop');

    if (window.matchMedia("(min-width: 992px)").matches) {
      if ( $window.scrollTop() > 150 ) {
        arrow.fadeIn();
      } else {
        arrow.fadeOut();
      }
    }
  }

  let checkSidebarSubmenu = () => {
    let sidebar = $('.Sidebar'),
        menu = sidebar.find('.Header__list'),
        liSubmenu = menu.find('li.menu-item-has-children');

    liSubmenu.each((index, element) => {
      let li = $(element);

      li.prepend('<i class="icon-keyboard_arrow_down Header__list__toggle"></i>');
    });
  }
})(jQuery);

