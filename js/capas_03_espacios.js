// 03. ESPACIOS PÚBLICOS

//  capas que forman el grupo y sus iconos FontAwesome
const capasEspacios = {
  "Plazas, parques y jardines": "fa-leaf",
  "Villa Romana": "fa-building-columns",
};

// Colores por estado
const coloresEspacios = {
  Prevista: "#14688F",
  "En ejecución": "#f5b800",
  Finalizado: "#00a34f",
};

// Función para crear icono personalizado
function crearIcono(capa, estado) {
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
        <i class="fa-solid ${capasEspacios[capa]} fa-lg"></i>
      </div>`,
    className: "icono-personalizado",
  });
}

// Función genérica para popups y sidebar
function popupEspacios(feature, layer) {
  const estadoPopUp =
    feature.properties.estado === "Prevista"
      ? "prevision-pophover"
      : feature.properties.estado === "En ejecución"
      ? "enejecucion-pophover"
      : feature.properties.estado === "Finalizado"
      ? "finalizado-pophover"
      : "prevision-pophover";

  layer.on("mouseover", (e) => {
    tooltipPopup = L.popup({ offset: L.point(8, -5), className: estadoPopUp });
    tooltipPopup.setContent("<b>" + feature.properties.titulo + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", () => map.closePopup());

  layer.on("click", () => {
    const panel = document.getElementById("tabla");

    panel.innerHTML = `
            <h1 class="leaflet-sidebar-header">
                ${feature.properties.capa.toUpperCase()}
                <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>
            </h1>
            <br/><h2>${feature.properties.titulo}</h2>
            <table class="detalle"><tbody>
                ${getProp(feature, "equip", "EQUIPAMIENTO")}
                ${getProp(feature, "direccion", "DIRECCIÓN")}
                ${getProp(feature, "actuacion", "ACTUACIÓN")}
                ${getProp(feature, "masinfo", "MÁS INFORMACIÓN")}
                ${getProp(feature, "val_dany", "VALORACIÓN DE DAÑOS")}
                ${getProp(feature, "subv_apro", "SUBVENCIÓN APROBADA")}
                ${getProp(feature, "estado_d", "ESTADO")}
                ${getProp(feature, "fecha_prev", "FECHA PREVISTA")}
                ${getProp(feature, "enlace", "ENLACE")}
            </tbody></table>
        `;

    sidebar.open("tabla");
  });
}

// Función para crear layer de un tipo y estado
function crearLayer(capa, estado) {
  return L.geoJson(espacios, {
    pointToLayer: (feature, latlng) =>
      L.marker(latlng, { icon: crearIcono(capa, estado) }),
    onEachFeature: popupEspacios,
    filter: (feature) =>
      feature.properties.capa === capa && feature.properties.estado === estado,
  });
}

// Crear layers por capa y estado
const estadosEspacios = ["Prevista", "En ejecución", "Finalizado"];
const plazasParquesJardinesLayer = L.layerGroup(
  estadosEspacios.map((e) => crearLayer("Plazas, parques y jardines", e))
);
const villaRomanaLayer = L.layerGroup(
  estadosEspacios.map((e) => crearLayer("Villa Romana", e))
);
