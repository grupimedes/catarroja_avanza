// Selector capas

var baseLayers = {
  "<b>Actuación 01: Renovación de contenedores</b>": actuacion01,
  "Ejemplo polígonos": ejemplo_poli,
};

var seleccionador = new L.Control.Layers(baseLayers, null, {
  collapsed: false,
}).addTo(map);
