// 04: EDIFICIOS PÚBLICOS

// CENTROS EDUCATIVOS

// Prevista

function popupCentroEducativoPrevision(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "prevision-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaPrevision = document.createElement("div");
    tablaPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      infoActuacion(feature) +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      infoComentario(feature) +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      infoEnlace(feature) +
      "'></a></td></tr></tbody></table>";

    tablaPrevision.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);
    sidebar.open("tabla");
  });
}

var iconoCentroEducativoPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-graduation-cap fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroEducativoPrevision = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroEducativoPrevision,
    });
  },
  onEachFeature: popupCentroEducativoPrevision,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros educativos" &&
      feature.properties.estado == "Prevista"
    );
  },
});

// En ejecución

function popupCentroEducativoEjecucion(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "ejecucion-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaEjecucion = document.createElement("div");
    tablaEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaEjecucion.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    sidebar.open("tabla");
  });
}

var iconoCentroEducativoEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-graduation-cap fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroEducativoEjecucion = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroEducativoEjecucion,
    });
  },
  onEachFeature: popupCentroEducativoEjecucion,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros educativos" &&
      feature.properties.estado == "En ejecución"
    );
  },
});

// Finalizado

function popupCentroEducativoFinalizado(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "finalizado-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaFinalizado = document.createElement("div");
    tablaFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      'Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaFinalizado.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaFinalizado.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);
    sidebar.open("tabla");
  });
}

var iconoCentroEducativoFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-graduation-cap fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroEducativoFinalizado = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroEducativoFinalizado,
    });
  },
  onEachFeature: popupCentroEducativoFinalizado,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros educativos" &&
      feature.properties.estado == "Finalizado"
    );
  },
});

// Agrupacion

var centroEducativo = L.layerGroup([
  centroEducativoPrevision,
  centroEducativoEjecucion,
  centroEducativoFinalizado,
]).addTo(map);

// CENTROS CULTURALES

// Prevista

function popupCentroCulturalPrevision(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "prevision-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaPrevision = document.createElement("div");
    tablaPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";
    tablaPrevision.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);
    sidebar.open("tabla");
  });
}

var iconoCentroCulturalPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-book fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroCulturalPrevision = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroCulturalPrevision,
    });
  },
  onEachFeature: popupCentroCulturalPrevision,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros culturales" &&
      feature.properties.estado == "Prevista"
    );
  },
});

// En ejecución

function popupCentroCulturalEjecucion(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "ejecucion-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaEjecucion = document.createElement("div");
    tablaEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaEjecucion.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    sidebar.open("tabla");
  });
}

var iconoCentroCulturalEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-book fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroCulturalEjecucion = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroCulturalEjecucion,
    });
  },
  onEachFeature: popupCentroCulturalEjecucion,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros culturales" &&
      feature.properties.estado == "En ejecución"
    );
  },
});

// Finalizado

function popupCentroCulturalFinalizado(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "finalizado-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaFinalizado = document.createElement("div");
    tablaFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaFinalizado.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaFinalizado.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    sidebar.open("tabla");
  });
}

var iconoCentroCulturalFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-book fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroCulturalFinalizado = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroCulturalFinalizado,
    });
  },
  onEachFeature: popupCentroCulturalFinalizado,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros culturales" &&
      feature.properties.estado == "Finalizado"
    );
  },
});

// Agrupacion

var centroCultural = L.layerGroup([
  centroCulturalPrevision,
  centroCulturalEjecucion,
  centroCulturalFinalizado,
]);

// CENTROS SOCIOSANITARIOS

// Prevista

function popupCentroSocioPrevision(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "prevision-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaPrevision = document.createElement("div");
    tablaPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaPrevision.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);
    sidebar.open("tabla");
  });
}

var iconoCentroSocioPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-people-group fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroSocioPrevision = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroSocioPrevision,
    });
  },
  onEachFeature: popupCentroSocioPrevision,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros sociosanitarios" &&
      feature.properties.estado == "Prevista"
    );
  },
});

// En ejecución

function popupCentroSocioEjecucion(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "ejecucion-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaEjecucion = document.createElement("div");
    tablaEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaEjecucion.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    sidebar.open("tabla");
  });
}

var iconoCentroSocioEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-people-group fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroSocioEjecucion = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroSocioEjecucion,
    });
  },
  onEachFeature: popupCentroSocioEjecucion,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros sociosanitarios" &&
      feature.properties.estado == "En ejecución"
    );
  },
});

// Finalizado

function popupCentroSocioFinalizado(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, -15),
      className: "finalizado-pophover",
    });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaFinalizado = document.createElement("div");
    tablaFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaFinalizado.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><h2>" +
      feature.properties.nom +
      "<br><br><table class ='detalle'>" +
      "<tbody><tr><td>DIRECCIÓN</td><td>" +
      feature.properties.direccion +
      "</td></tr><tr><td>ACTUACIÓN</td><td>" +
      feature.properties.actuacion +
      "</td></tr><tr><td>COMENTARIO</td><td>" +
      feature.properties.comentario +
      "</td></tr><tr><td>ESTADO</td><td>" +
      feature.properties.estado +
      "</td></tr><tr><td>ENLACE</td><td><a href='" +
      feature.properties.enlace +
      "'></a></td></tr></tbody></table>";

    tablaFinalizado.appendChild(tabla);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    sidebar.open("tabla");
  });
}

var iconoCentroSocioFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    ">
      <i class="fa-solid fa-people-group fa-lg"></i>
    </div>
  `,
  className: "icono-personalizado",
});

var centroSocioFinalizado = L.geoJson(edificios, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: iconoCentroSocioFinalizado,
    });
  },
  onEachFeature: popupCentroSocioFinalizado,
  filter: function (feature, layer) {
    return (
      feature.properties.tipologia == "Centros sociosanitarios" &&
      feature.properties.estado == "Finalizado"
    );
  },
});

// Agrupacion

var centroSocio = L.layerGroup([
  centroSocioPrevision,
  centroSocioEjecucion,
  centroSocioFinalizado,
]);
