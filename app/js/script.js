"use strict";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  if (playerInfoList.length) {
    for (var i = 0; i < playerInfoList.length; i++) {
      players[i] = createPlayer(playerInfoList[i]);
    }
  }
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.idPlayer, {
    height: playerInfo.height,
    width: playerInfo.width,
    videoId: playerInfo.videoId,
    playerVars: {
      'rel': 0
    },
    events: {
      //'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideoPlayer(player) {
  player.stopVideo();
}

function stopVideo() {
  player.stopVideo();
}

function loadVideoPlayer(player, id) {
  player.loadVideo(id);
}

function loadVideo(id) {
  player.loadVideoById(id);
}

function resizeVideoPlayer(player, width, height) {
  player.setSize(width, height);
}

function resizeVideo(width, height) {
  player.setSize(width, height);
}

;(function ($) {
  $(function () {});
})(jQuery);
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

      if ($(this).scrollTop() > 150) {
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

      $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $('.element-animate').hover(function () {
      var $this = $(this),
          animation = $this.data('animation'),
          parent = $this.parent();

      parent.addClass('animated ' + animation);
    }, function () {
      var $this = $(this),
          animation = $this.data('animation'),
          parent = $this.parent();

      parent.removeClass('animated ' + animation);
    });

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

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  function checkScrollHeader() {
    var minScroll = 50,
        header = $('.Header');

    if ($window.scrollTop() > minScroll) {
      header.addClass('Header--scroll');
    } else {
      header.removeClass('Header--scroll');
    }
  }

  function loadMultipleCarousel(item, event) {
    var $e = $(event.relatedTarget),
        idx = $e.index(),
        itemsPerSlide = item,
        totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
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

  function activateMultipleCarousel() {
    var carousel = $('.Carousel--multiple'),
        idCarousel = carousel.attr('id'),
        numSlides = carousel.data('numslides'),
        totalSlides = carousel.find('.carousel-item').length;

    if (totalSlides > numSlides) {
      $('#' + idCarousel).carousel({
        interval: 4000
      });
    }
  }
})(jQuery);
//# sourceMappingURL=script.js.map
