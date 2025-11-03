// Estilo puntos

function estiloSinDatos(feature, layer) {
  return {
    radius: "0px",
    fillColor: "#c8102e",
    color: "#c8102e",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };
}

// Puntos

var sinDatos = L.geoJson(sindatos, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloSinDatos);
  },
  style: estiloSinDatos,
});
