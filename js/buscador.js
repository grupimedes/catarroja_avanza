/*
// BUSCADOR DE ELEMENTOS EN CAPAS ACTIVAS

var capasBuscables = [
  centroEducativoLayer,
  centroCulturalLayer,
  centroSocioLayer,
];

// referencia al control y a la capa actualmente asignada
var currentSearchControl = null;
var currentLayerForSearch = null;

// funcion para crear un control de búsqueda apuntando a una capa concreta
function crearSearchControlParaCapa(layer) {
  return new L.Control.Search({
    layer: layer,
    collapsed: false,
    textPlaceholder: `Buscar elemento`,
    initial: false,
    propertyName: "titulo",
    marker: false,
    moveToLocation: function (latlng, title, map) {
      map.setView(latlng, 18);
    },
  });
}

// función que devuelve la capa buscable activa
function obtenerCapaActiva() {
  return capasBuscables.find((c) => c && map.hasLayer(c)) || null;
}

// actualiza el control según la capa activa
function actualizarControlBusqueda() {
  var activa = obtenerCapaActiva();
  if (activa === currentLayerForSearch) return;

  if (currentSearchControl) {
    try {
      map.removeControl(currentSearchControl);
    } catch {}
    currentSearchControl = null;
    currentLayerForSearch = null;
  }

  if (activa) {
    currentSearchControl = crearSearchControlParaCapa(activa);
    map.addControl(currentSearchControl);
    currentLayerForSearch = activa;
  }
}

// escuchar eventos del control de capas y añadidos programáticos
map.on("overlayadd overlayremove layeradd layerremove", function () {
  if (window.___search_update_timeout)
    clearTimeout(window.___search_update_timeout);
  window.___search_update_timeout = setTimeout(function () {
    actualizarControlBusqueda();
    window.___search_update_timeout = null;
  }, 50);
});

// comprobación inicial
actualizarControlBusqueda();
*/
