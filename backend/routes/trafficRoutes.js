let map;

function initMap(lat, lon) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng: lon },
    zoom: 13
  });

  new google.maps.TrafficLayer().setMap(map);
}
