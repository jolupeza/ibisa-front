function initMap() {
  if (!infoMaps.length) {
    return false;
  }

  let mapCoord = {lat: infoMaps[0].lat, lng: infoMaps[0].long},
      options = {
        zoom: 16,
        center: mapCoord,
        scrollwheel: false,
      };

  infoMaps[0].map = new google.maps.Map(document.getElementById(infoMaps[0].id), options);

  infoMaps[0].marker = new google.maps.Marker({
    position: mapCoord,
    map: infoMaps[0].map,
    title: 'Bellas Islas'
  });

  infoMaps[0].load = true;
}

;(function ($) {
  let $window = $(window);

  $(function () {
    $window.on('resize', () => {
      if (infoMaps.length) {

        infoMaps.forEach((info) => {
          if ( ! $.isEmptyObject(info.map) ) {
            google.maps.event.trigger(info.map, "resize");
            info.map.setCenter({lat: info.lat, lng: info.long});
          }
        });
      }
    });
  });
})(jQuery);
