"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){if(playerInfoList.length)for(var e=0;e<playerInfoList.length;e++)players[e]=createPlayer(playerInfoList[e])}function createPlayer(e){return new YT.Player(e.idPlayer,{height:e.height,width:e.width,videoId:e.videoId,playerVars:{rel:0},events:{}})}function onPlayerReady(e){e.target.playVideo()}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var done=!1;function onPlayerStateChange(e){e.data!=YT.PlayerState.PLAYING||done||(setTimeout(stopVideo,6e3),done=!0)}function stopVideoPlayer(e){e.stopVideo()}function stopVideo(){player.stopVideo()}function loadVideoPlayer(e,a){e.loadVideo(a)}function loadVideo(e){player.loadVideoById(e)}function resizeVideoPlayer(e,a,o){e.setSize(a,o)}function resizeVideo(e,a){player.setSize(e,a)}function initMap(){if(!infoMaps.length)return!1;var e={lat:infoMaps[0].lat,lng:infoMaps[0].long},a={zoom:16,center:e,scrollwheel:!1};infoMaps[0].map=new google.maps.Map(document.getElementById(infoMaps[0].id),a),infoMaps[0].marker=new google.maps.Marker({position:e,map:infoMaps[0].map,title:"Bellas Islas"}),infoMaps[0].load=!0}jQuery(function(){}),function(a){var e=a(window);a(function(){e.on("resize",function(){infoMaps.length&&infoMaps.forEach(function(e){a.isEmptyObject(e.map)||(google.maps.event.trigger(e.map,"resize"),e.map.setCenter({lat:e.lat,lng:e.long}))})})})}(jQuery),function(s){var t=s(window);function n(){var e=s(".Header");50<t.scrollTop()?e.addClass("Header--scroll"):e.removeClass("Header--scroll")}s(function(){var e,a,o;t.on("scroll",function(){i(),n()}),t.on("resize",function(){i()}),r(),n(),i(),e=s(".Carousel--multiple"),a=e.attr("id"),o=e.data("numslides"),e.find(".carousel-item").length>o&&s("#"+a).carousel({interval:4e3}),s(".ArrowTop").on("click",function(e){e.preventDefault(),s("html, body").animate({scrollTop:0},800)}),s(".element-animate").hover(function(){var e=s(this),a=e.data("animation");e.parent().addClass("animated "+a)},function(){var e=s(this),a=e.data("animation");e.parent().removeClass("animated "+a)}),s("#carousel-team").on("slide.bs.carousel",function(e){!function(e,a){var o=s(a.relatedTarget).index(),t=e,n=s(".carousel-item").length;if(n-(t-1)<=o)for(var i=t-(n-o),r=0;r<i;r++)"left"==a.direction?s(".carousel-item").eq(r).appendTo(".carousel-inner"):s(".carousel-item").eq(0).appendTo(".carousel-inner")}(3,e)}),s(".js-sidebar-toggle").on("click",function(){s(this);var e=s(".Sidebar");e.hasClass("active")?e.removeClass("active"):e.addClass("active")}),s(".Goto").on("click",function(e){e.preventDefault();var a=s(e.target).attr("href");s("html, body").stop().animate({scrollTop:s(a).offset().top-100},600)}),s(".Header__list__toggle").on("click",function(e){var a=s(e.target),o=a.next().next(".sub-menu");a.hasClass("icon-keyboard_arrow_down")?(a.removeClass("icon-keyboard_arrow_down").addClass("icon-keyboard_arrow_up"),o.addClass("active")):(a.addClass("icon-keyboard_arrow_down").removeClass("icon-keyboard_arrow_up"),o.removeClass("active"))})});var i=function(){var e=s(".ArrowTop");window.matchMedia("(min-width: 992px)").matches&&(150<t.scrollTop()?e.fadeIn():e.fadeOut())},r=function(){s(".Sidebar").find(".Header__list").find("li.menu-item-has-children").each(function(e,a){s(a).prepend('<i class="icon-keyboard_arrow_down Header__list__toggle"></i>')})}}(jQuery);