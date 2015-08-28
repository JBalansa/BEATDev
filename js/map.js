function initialize() {
  var myLatlng = new google.maps.LatLng(37.302496, -120.486198);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    scrollwheel: false,
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);