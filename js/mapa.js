// Mapa base

var esquinaizq = L.latLng(39.45242591061197, -0.4809699258979035);
var esquinader = L.latLng(39.34377947502236, -0.239906378932543);

var bounds = L.latLngBounds(esquinaizq, esquinader);

var map = L.map("map", {
  attributionControl: true,
  fullscreenControl: true,
  maxBounds: bounds,
}).setView([39.400412463222494, -0.39934490710677306], 15);

var simple = L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/cmf0z178x01k701qw157p0wb6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    minZoom: 14,
    maxZoom: 20,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  }
).addTo(map);
