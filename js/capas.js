// Velo

var estiloVelo = {
  fillColor: "#ffffff",
  color: "#ffffff",
  weight: 0,
  opacity: 1,
  fillOpacity: 0,
};

var velo = L.geoJson(velo, { style: estiloVelo, interactive: false }).addTo(
  map
);

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
    Ejemplo.resetStyle(e.target);
  }

  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });

  layer.on("click", function (e) {
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
      "<br/><img width='100%' src='https://catarrojavanza.es/wp-content/uploads/2025/08/003b-1024x724.jpg'></img><br/>" +
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
      "<br/><a href='https://plaverdvalencia.com/documentacio/'><h1>Documentación (p. 214)</h1></a><br/><img src='js/metodo.png' width='100%'>";

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

var Ejemplo = L.geoJson(ejemplos, {
  style: estiloEjemplo,
  onEachFeature: popupEjemplo,
}).addTo(map);

// Zonas verdes

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
});

// Indicadores

function popupIndicadoreszv(feature, layer) {
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "black",
      dashArray: "",
      fillOpacity: 0.75,
    });
  }

  function resetHighlight(e) {
    indicadoreszv.resetStyle(e.target);
  }

  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });

  layer.on("click", function (e) {
    var sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);

    var tablaIndicadores = document.createElement("div");
    tablaIndicadores.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      'Indicadores <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    tablaIndicadores.appendChild(header);

    var tabla = document.createElement("tabla");
    tabla.innerHTML =
      "<br/><b>NOMBRE: </b><h2>" +
      feature.properties.especie.toUpperCase() +
      "</h2><b>CÓDIGO: </b>" +
      feature.properties.codigo +
      "<br><br><table class ='indicadores'><thead><tr><th>ID</th><th>NOMBRE</th><th>UDS</th><th>VALOR</th></tr></thead>" +
      "<tbody><tr><td>I.1</td><td>SUPERFICIE</td><td>m2</td><td>" +
      feature.properties.i1_sup +
      "</td></tr><tr><td>I.2</td><td>COMPACIDAD</td><td></td><td>" +
      feature.properties.i2_comp +
      "</td></tr><tr><td>I.3</td><td>PERMEABILIDAD DEL SUELO</td><td>%</td><td>" +
      feature.properties.i3_perm +
      "</td></tr><tr><td>I.4</td><td>PRESENCIA DE AGUA</td><td></td><td>" +
      feature.properties.i4_agua +
      "</td></tr><tr><td>IB.1</td><td>DRENAJE SOSTENIBLE</td><td></td><td>" +
      feature.properties.ib1_sud +
      "</td></tr><tr><td>I.5</td><td>DISTANCIA A OTRA ZONA VERDE MAYOR DE 1HA</td><td>m</td><td>" +
      feature.properties.i5_d1ha +
      "</td></tr><tr><td>I.6</td><td>DISTANCIA AL HÁBITAT FUENTE</td><td>m</td><td>" +
      feature.properties.i6_dhf +
      "</td></tr><tr><td>I.7</td><td>COBERTURA ARBÓREA</td><td>%</td><td>" +
      feature.properties.i7_coba +
      "</td></tr><tr><td>I.8</td><td>COBERTURA ARBUSTIVA</td><td>%</td><td>" +
      feature.properties.i8_cobb +
      "</td></tr><tr><td>I.9</td><td>COBERTURA DE PRADERA</td><td>%</td><td>" +
      feature.properties.i9_cobc +
      "</td></tr><tr><td>I.10</td><td>NDVI</td><td></td><td>" +
      feature.properties.i10_ndvi +
      "</td></tr><tr><td>I.11</td><td>DENSIDAD DE ARBOLADO</td><td>arb/ha</td><td>" +
      feature.properties.i11_darbo +
      "</td></tr><tr><td>I.12</td><td>DIVERSIDAD DE ESPECIES VEGETALES</td><td></td><td>" +
      feature.properties.i12_divv +
      "</td></tr><tr><td>I.13</td><td>PRESENCIA DE ESPECIES ARBÓREAS Y ARBUSTIVAS AUTÓCTONAS</td><td>%</td><td>" +
      feature.properties.i13_aut +
      "</td></tr><tr><td>I.14</td><td>PRESENCIA DE ESPECIES ARBÓREAS Y ARBUSTIVAS</td><td>%</td><td>" +
      feature.properties.i14_exo +
      "</td></tr><tr><td>I.15</td><td>DISTRIBUCIÓN DE LOS DIFERENTES PORTES ARBÓREOS</td><td>s</td><td>" +
      feature.properties.i15_spor +
      "</td></tr><tr><td>I.16</td><td>NÚMERO DE ÁRBOLES MONUMENTALES CATALOGADOS</td><td>n</td><td>" +
      feature.properties.i16_amon +
      "</td></tr><tr><td>I.17</td><td>ESPECIES ARBÓREAS SOMETIDAS A LIMITACIONES</td><td>%</td><td>" +
      feature.properties.i17_alim +
      "</td></tr><tr><td>I.18</td><td>EDAD FENOLÓGICA DEL ARBOLADO</td><td></td><td>" +
      feature.properties.i18_aedad +
      "</td></tr><tr><td>I.19</td><td>FIJACIÓN DE CARBONO POR PARTE DEL ARBOLADO</td><td></td><td>" +
      feature.properties.i19_afij +
      "</td></tr><tr><td>I.20</td><td>NATURALIZACIÓN</td><td>%</td><td>" +
      feature.properties.i20_nat +
      "</td></tr><tr><td>I.21</td><td>AVIFAUNA</td><td></td><td>" +
      feature.properties.i21_aves +
      "</td></tr><tr><td>I.22</td><td>GATOS</td><td></td><td>" +
      feature.properties.i22_gat +
      "</td></tr><tr><td>IB.2</td><td>ESTRUCTURAS DE FOMENTO DE LA BIODIVERSIDAD</td><td></td><td>" +
      feature.properties.ib2_biofom +
      "</td></tr><tr><td>I.23</td><td>SISTEMA DE RIEGO</td><td></td><td>" +
      feature.properties.i23_rieg +
      "</td></tr><tr><td>I.24</td><td>INSTALACIONES DE ENERGÍA RENOVABLE</td><td></td><td>" +
      feature.properties.i24_renov +
      "</td></tr><tr><td>I.25</td><td>INSTALACIONES DEPORTIVAS</td><td></td><td>" +
      feature.properties.i25_insdep +
      "</td></tr><tr><td>I.26</td><td>EQUIPAMIENTOS DEPORTIVOS</td><td></td><td>" +
      feature.properties.i26_eqdep +
      "</td></tr><tr><td>I.27</td><td>CARRIL BICI</td><td>m</td><td>" +
      feature.properties.i27_cabic +
      "</td></tr><tr><td>I.28</td><td>JUEGO INFANTIL</td><td></td><td>" +
      feature.properties.i28_jue +
      "</td></tr><tr><td>I.29</td><td>ESPARCIMIENTO CANINO</td><td></td><td>" +
      feature.properties.i29_can +
      "</td></tr><tr><td>I.30</td><td>RECURSOS DE EDUCACIÓN AMBIENTAL</td><td></td><td>" +
      feature.properties.i30_recedu +
      "</td></tr><tr><td>I.31</td><td>DOTACIONES CULTURALES</td><td></td><td>" +
      feature.properties.i31_dotc +
      "</td></tr><tr><td>I.32</td><td>SERVICIOS ADMINISTRATIVOS</td><td></td><td>" +
      feature.properties.i32_serva +
      "</td></tr><tr><td>I.33</td><td>PATRIMONIO</td><td></td><td>" +
      feature.properties.i33_patri +
      "</td></tr><tr><td>I.34</td><td>ANFITEATRO - GRADAS</td><td></td><td>" +
      feature.properties.i34_anfi +
      "</td></tr><tr><td>IB.3</td><td>HUERTOS URBANOS</td><td></td><td>" +
      feature.properties.ib3_hue +
      "</td></tr><tr><td>I.35</td><td>BAÑOS PÚBLICOS</td><td></td><td>" +
      feature.properties.i35_bany +
      "</td></tr><tr><td>I.36</td><td>BAR - CAFETERÍA</td><td></td><td>" +
      feature.properties.i36_bar +
      "</td></tr><tr><td>I.37</td><td>TERRAZA HOSTELERÍA</td><td>n/ha</td><td>" +
      feature.properties.i37_terra +
      "</td></tr><tr><td>I.38</td><td>FUENTES BEBEDERO</td><td></td><td>" +
      feature.properties.i38_fuen +
      "</td></tr><tr><td>I.39</td><td>BANCOS</td><td>n/ha</td><td>" +
      feature.properties.i39_ban +
      "</td></tr><tr><td>I.40</td><td>MESAS</td><td>n/ha</td><td>" +
      feature.properties.i40_mes +
      "</td></tr><tr><td>I.41</td><td>PAPELERAS</td><td>n/ha</td><td>" +
      feature.properties.i41_pape +
      "</td></tr><tr><td>I.42</td><td>HORARIO RESTRINGIDO</td><td></td><td>" +
      feature.properties.i42_cier +
      "</td></tr><tr><td>I.43</td><td>APARCAMIENTO BICICLETAS</td><td>n</td><td>" +
      feature.properties.i43_apabi +
      "</td></tr><tr><td>I.44</td><td>POBLACIÓN A 15. MIN A PIE</td><td>hab</td><td>" +
      feature.properties.i44_pob +
      "</td></tr><tr><td>I.45</td><td>ACCESIBILIDAD A PERSONAS CON MOVILIDAD REDUCIDA</td><td></td><td>" +
      feature.properties.i45_movr +
      "</td></tr><tr><td>I.46</td><td>ÍNDICE DE RUIDO</td><td></td><td>" +
      feature.properties.i46_rui +
      "</td></tr><tr><td>I.47</td><td>DIVERSIDAD DE PAISAJES</td><td></td><td>" +
      feature.properties.i47_divp +
      "</td></tr><tr><td>I.48</td><td>USOS IDENTIFICADOS</td><td></td><td>" +
      feature.properties.i48_usos +
      "</td></tr><tr><td>I.49</td><td>ATRIBUTOS POSITIVOS QUE DEFINEN A LA ZONA VERDE</td><td></td><td>" +
      feature.properties.i49n +
      "</td></tr><tr><td>I.50</td><td>ATRIBUTOS NEGATIVOS QUE DEFINEN A LA ZONA VERDE</td><td></td><td>" +
      feature.properties.i50n +
      "</tbody></table>";

    tablaIndicadores.appendChild(tabla);

    var metodoIndicadores = document.createElement("div");
    metodoIndicadores.className = "leaflet-sidebar-pane";

    var header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    metodoIndicadores.appendChild(header);
    header.innerHTML =
      'Metodología de cálculo de indicadores <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';

    var explicacion = document.createElement("explicacion");
    explicacion.innerHTML =
      "<br/><a href='https://plaverdvalencia.com/documentacio/'><h1>Documentación (p. 214)</h1></a><br/><img src='js/metodo.png' width='100%'>";

    metodoIndicadores.appendChild(explicacion);

    var tablaContent = {
      id: "tabla", // UID, used to access the panel
      tab: '<i class="fa fa-table"></i>', // content can be passed as HTML string,
      pane: tablaIndicadores, // DOM elements can be passed, too
      title: "Info ", // an optional pane header
      position: "top", // optional vertical alignment, defaults to 'top'
    };

    sidebar.addPanel(tablaContent);

    var metodoContent = {
      id: "metodologia", // UID, used to access the panel
      tab: '<i class="fa fa-info"></i>', // content can be passed as HTML string,
      pane: metodoIndicadores, // DOM elements can be passed, too
      title: "Info ", // an optional pane header
      position: "top", // optional vertical alignment, defaults to 'top'
    };

    sidebar.addPanel(metodoContent);
    sidebar.open("tabla");
  });
}

var estiloIndicadoreszv = {
  fillColor: "#68bba5",
  color: "#68bba5",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.5,
};

var indicadoreszv = L.geoJson(indicadoreszv, {
  style: estiloIndicadoreszv,
  onEachFeature: popupIndicadoreszv,
});
