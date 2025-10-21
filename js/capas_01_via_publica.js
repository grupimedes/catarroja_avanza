// 01: VÍA PÚBLICA

// ALCANTARILLADO

// SEÑALIZACIONES

// CONTENEDORES

// Radio del punto de los contenedores variable en función del zoom

// Radio variable según zoom
function getRadius() {
  return map.getZoom() * 0.5;
}

// Colores por estado de contenedores
const coloresContenedores = {
  Finalizado: "#00A34F",
  "En ejecución": "#F5B800",
};

// Función genérica de popup
function popupContenedores(feature, layer) {
  const colorEstado =
    coloresContenedores[feature.properties.estado] || "#14688F";

  layer.bindPopup(`
    <h1 style="color: ${colorEstado}">${feature.properties.estado.toUpperCase()}</h1>
    <br/>Dirección: ${feature.properties.direccion}
    <br/>Tipología: ${feature.properties.tipologia}
    <br/>Capacidad: ${feature.properties.capacidad}
  `);

  layer.on("mouseover", (e) => {
    tooltipPopup = L.popup({
      className: `${feature.properties.estado
        .toLowerCase()
        .replace(" ", "-")}-pophover`,
    });
    tooltipPopup.setContent("<b>" + feature.properties.direccion + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", (e) => map.closePopup(tooltipPopup));
}

// Función genérica de estilo
function estiloContenedores(feature) {
  const color = coloresContenedores[feature.properties.estado] || "#14688F";
  return {
    radius: getRadius(),
    fillColor: color,
    color: color,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9,
  };
}

// Función para crear layer por estado
function crearLayerContenedores(estado) {
  return L.geoJson(contenedores, {
    pointToLayer: (feature, latlng) =>
      L.circleMarker(latlng, estiloContenedores(feature)),
    style: estiloContenedores,
    onEachFeature: popupContenedores,
    filter: (feature) => feature.properties.estado === estado,
  });
}

// Crear layers por estado
const contenedoresFinalizado = crearLayerContenedores("Finalizado");
const contenedoresEjecucion = crearLayerContenedores("En ejecución");

// Agrupar todos los contenedores
const contenedoresLayer = L.layerGroup([
  contenedoresFinalizado,
  contenedoresEjecucion,
]).addTo(map);

/* EJEMPLO POLIS

function popupEjemplo(feature, layer) {
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",

      fillOpacity: 0.75,
    });
  }

  function resetHighlight(e) {
    ejemplo.resetStyle(e.target);
  }

  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });

  layer.on("click", function (e) {
    map.fitBounds(layer.getBounds());

  });
}

function getColorTipo(d) {
  return d == "A" ? "#ac2c2d" : d == "B" ? "#125B7D" : "#692228";
}

function estiloEjemplo(feature) {
  return {
    fillColor: getColorTipo(feature.properties.tipo),
    weight: 0,
    color: "black",
    fillOpacity: 0.8,
  };
}

var ejemplo_poli = L.geoJson(ejemplos, {
  style: estiloEjemplo,
  onEachFeature: popupEjemplo,
});*/
