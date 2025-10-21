// 04: EDIFICIOS PÚBLICOS

// CENTROS EDUCATIVOS

// En previsión

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
      'Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaPrevision.appendChild(tabla);

    var metodoPrevision = document.createElement("div");
    metodoPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoPrevision.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoPrevision.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroEducativoPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      feature.properties.estado == "En previsión"
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
      'Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaEjecucion.appendChild(tabla);

    var metodoEjecucion = document.createElement("div");
    metodoEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoEjecucion.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoEjecucion.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroEducativoEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaFinalizado.appendChild(tabla);

    var metodoFinalizado = document.createElement("div");
    metodoFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoFinalizado.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoFinalizado.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroEducativoFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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

// En previsión

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
      'Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaPrevision.appendChild(tabla);

    var metodoPrevision = document.createElement("div");
    metodoPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoPrevision.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoPrevision.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroCulturalPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      feature.properties.estado == "En previsión"
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
      'Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaEjecucion.appendChild(tabla);

    var metodoEjecucion = document.createElement("div");
    metodoEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoEjecucion.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoEjecucion.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroCulturalEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      'Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaFinalizado.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaFinalizado.appendChild(tabla);

    var metodoFinalizado = document.createElement("div");
    metodoFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoFinalizado.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoFinalizado.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroCulturalFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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

// En previsión

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
      'Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaPrevision.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaPrevision.appendChild(tabla);

    var metodoPrevision = document.createElement("div");
    metodoPrevision.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoPrevision.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Prevision <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoPrevision.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoPrevision,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroSocioPrevision = L.divIcon({
  html: `
    <div style="
      background-color: #14688F;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      feature.properties.estado == "En previsión"
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
      'Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaEjecucion.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaEjecucion.appendChild(tabla);

    var metodoEjecucion = document.createElement("div");
    metodoEjecucion.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoEjecucion.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Ejecucion <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoEjecucion.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoEjecucion,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroSocioEjecucion = L.divIcon({
  html: `
    <div style="
      background-color: #f5b800;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
      'Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaFinalizado.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.nom +
      "</h2><b>DIRECCIÓN: </b>" +
      feature.properties.direccion;

    tablaFinalizado.appendChild(tabla);

    var metodoFinalizado = document.createElement("div");
    metodoFinalizado.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoFinalizado.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de Finalizado <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://catarrojavanza.es/'><h1>Más información</h1></a><br/>";

    metodoFinalizado.appendChild(explicacion);

    var tablaContent = {
      id: "tabla",
      tab: '<i class="fa fa-table"></i>',
      pane: tablaFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia",
      tab: '<i class="fa fa-info"></i>',
      pane: metodoFinalizado,
      title: "Info ",
      position: "top",
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var iconoCentroSocioFinalizado = L.divIcon({
  html: `
    <div style="
      background-color: #00a34f;
      color: white;
      width: 30px;
      height: 30px;
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
  iconSize: [30, 30],
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
