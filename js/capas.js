// Actuación 01: Renovación de contenedores

// Radio del punto de los contenedores variable en función del zoom

function getRadius() {
  const zoom = map.getZoom();
  return zoom * 0.5;
}

// Finalizado

function popupFinalizado(feature, layer) {
  layer.bindPopup(
    "<h1 style='color: #72af26'>" +
      feature.properties.estado.toUpperCase() +
      "</h1><br/>Dirección: " +
      feature.properties.direccion +
      "<br/>Tipología: " +
      feature.properties.tipologia +
      "</b><br/>Capacidad: " +
      feature.properties.capacidad
  );

  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      className: "finalizado-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.direccion + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });
}

function estiloFinalizado(feature, layer) {
  return {
    radius: getRadius(),
    fillColor: "#72af26",
    color: "#72af26",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9,
  };
}

var finalizado = L.geoJson(contenedores, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloFinalizado);
  },
  style: estiloFinalizado,
  onEachFeature: popupFinalizado,
  filter: function (feature, layer) {
    return feature.properties.estado == "Finalizado";
  },
}).addTo(map);

// En ejecución

function popupEjecucion(feature, layer) {
  layer.bindPopup(
    "<h1 style='color: #f69730'>" +
      feature.properties.estado.toUpperCase() +
      "</h1><br/>Dirección: " +
      feature.properties.direccion +
      "<br/>Tipología: " +
      feature.properties.tipologia +
      "</b><br/>Capacidad: " +
      feature.properties.capacidad
  );

  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      className: "ejecucion-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.direccion + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });
}

function estiloEjecucion(feature, layer) {
  return {
    radius: getRadius(),
    fillColor: "#f69730",
    color: "#f69730",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9,
  };
}

var ejecucion = L.geoJson(contenedores, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloEjecucion);
  },
  style: estiloEjecucion,
  onEachFeature: popupEjecucion,
  filter: function (feature, layer) {
    return feature.properties.estado == "En ejecución";
  },
}).addTo(map);

// Grupo

var actuacion01 = L.layerGroup([finalizado, ejecucion]).addTo(map);

// Ejemplo

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

    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaEjemplo = document.createElement("div");
    tablaEjemplo.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      'Ejemplo <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjemplo.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.id +
      "</h2><b>CÓDIGO: </b>" +
      feature.properties.tipo +
      "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ySx_VDknnn4?si=0kPjKmMQGylF-shi' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></tbody></table>";

    tablaEjemplo.appendChild(tabla);

    var metodoEjemplo = document.createElement("div");
    metodoEjemplo.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoEjemplo.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Ejemplo <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoEjemplo.appendChild(explicacion);

    var tablaContent = {
      id: "tabla", // UID, used to access the panel
      tab: '<i class="fa fa-table"></i>', // content can be passed as HTML string,
      pane: tablaEjemplo, // DOM elements can be passed, too
      title: "Info ", // an optional pane header
      position: "top", // optional vertical alignment, defaults to 'top'
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia", // UID, used to access the panel
      tab: '<i class="fa fa-info"></i>', // content can be passed as HTML string,
      pane: metodoEjemplo, // DOM elements can be passed, too
      title: "Info ", // an optional pane header
      position: "top", // optional vertical alignment, defaults to 'top'
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

function getColorTipo(d) {
  return d == "A" ? "#ac2c2d" : d == "B" ? "#125b7e" : "#692228";
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
});

/* Zonas verdes

// Formales

function getColorFFamilia(d) {
  return d == "A"
    ? "#84ddb8"
    : d == "B"
    ? "#239684"
    : d == "C"
    ? "#68bba5"
    : d == "D"
    ? "#68bba5"
    : d == "E"
    ? "#176659"
    : d == "F"
    ? "#9fffcb"
    : "#e8e8e8";
}

function estiloFFamilia(feature) {
  return {
    fillColor: getColorFFamilia(feature.properties.familia),
    weight: 0,
    color: "black",
    fillOpacity: 0.8,
  };
}

function popupZVF(feature, layer) {
  layer.bindPopup(
    "Familia: <b>" +
      feature.properties.familia +
      "</b>" +
      "<br/>Nombre: <b>" +
      feature.properties.especie +
      "</b>"
  );

  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      fillOpacity: 1,
    });
  }

  function resetHighlight(e) {
    zonasverdesF.resetStyle(e.target);
  }

  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}

var zonasverdesF = L.geoJson(zonasverdes, {
  style: estiloFFamilia,
  onEachFeature: popupZVF,
  filter: function (feature, layer) {
    return feature.properties.orden == "F";
  },
});*/
