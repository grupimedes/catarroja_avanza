// 03. ESPACIOS PÚBLICOS

// tipos de espacios y sus iconos FontAwesome
const tiposEspacios = {
  "Villa Romana": "fa-building-columns",
  "Parques, jardines y zonas verdes": "fa-book",
  Plazas: "fa-people-group",
};

// Colores por estado
const coloresEspacios = {
  Prevista: "#14688F",
  "En ejecución": "#f5b800",
  Finalizado: "#00a34f",
};

// Función para crear icono personalizado
function crearIcono(tipo, estado) {
  return L.divIcon({
    html: `
      <div style="
        background-color: ${coloresEspacios[estado]};
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 4px rgba(0,0,0,0.4);">
        <i class="fa-solid ${tiposEspacios[tipo]} fa-lg"></i>
      </div>`,
    className: "icono-personalizado",
  });
}

// Función genérica para popups y sidebar
function popupEdificios(feature, layer) {
  const estadoPopUp =
    feature.properties.estado === "Prevista"
      ? "prevision-pophover"
      : feature.properties.estado === "En ejecución"
      ? "ejecucion-pophover"
      : feature.properties.estado === "Finalizado"
      ? "finalizado-pophover"
      : "prevision-pophover";

  layer.on("mouseover", (e) => {
    tooltipPopup = L.popup({ offset: L.point(8, -5), className: estadoPopUp });
    tooltipPopup.setContent("<b>" + feature.properties.nom + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", (e) => map.closePopup(tooltipPopup));

  layer.on("click", (e) => {
    const sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);
    const panel = document.createElement("div");
    panel.className = "leaflet-sidebar-pane";

    const header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.tipologia.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    panel.appendChild(header);

    const tabla = document.createElement("div");
    tabla.innerHTML = `
      <br/><h2>${feature.properties.nom}</h2>
      <table class='detalle'>
        <tbody>
          <tr><td>DIRECCIÓN</td><td>${feature.properties.direccion}</td></tr>
          <tr><td>ACTUACIÓN</td><td>${
            feature.properties.actuacion || infoActuacion(feature)
          }</td></tr>
          <tr><td>COMENTARIO</td><td>${
            feature.properties.comentario || infoComentario(feature)
          }</td></tr>
          <tr><td>ESTADO</td><td>${feature.properties.estado}</td></tr>
          <tr><td>ENLACE</td><td><a href="${
            feature.properties.enlace || infoEnlace(feature)
          }">Memoria técnica</a></td></tr>
        </tbody>
      </table>`;
    panel.appendChild(tabla);

    sidebar.addPanel({
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: panel,
      title: "Info ",
      position: "top",
    });
    sidebar.open("tabla");
  });
}

// Función para crear layer de un tipo y estado
function crearLayer(tipo, estado) {
  return L.geoJson(espacios, {
    pointToLayer: (feature, latlng) =>
      L.marker(latlng, { icon: crearIcono(tipo, estado) }),
    onEachFeature: popupEdificios,
    filter: (feature) =>
      feature.properties.tipologia === tipo &&
      feature.properties.estado === estado,
  });
}

// Crear layers por tipo y estado
const estadosEspacios = ["Prevista", "En ejecución", "Finalizado"];
const villaRomanaLayer = L.layerGroup(
  estadosEspacios.map((e) => crearLayer("Villa Romana", e))
);
