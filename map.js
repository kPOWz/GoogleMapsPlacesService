var map;

function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(41.590187,-93.611094),
    zoom: 15
  });

  
}

google.maps.event.addDomListener(window, 'load', initialize);
