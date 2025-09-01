// Selector capas

var overlayMaps = {
  Ejemplo: Ejemplo,
  "<b>Zonas Verdes</b>": zonasverdesF,
  Indicadores: indicadoreszv,
};

var seleccionador = new L.Control.Layers(null, overlayMaps, {
  collapsed: false,
}).addTo(map);
