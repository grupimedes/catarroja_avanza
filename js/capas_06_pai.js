// 06. PAI

// Colores por estado
const coloresPAI = {
  Prevista: "#14688F",
  "En ejecución": "#f5b800",
  Finalizado: "#00a34f",
};

// Estilo de polígonos
function estiloPoligono(feature) {
  const estado = feature.properties.estado;

  return {
    color: coloresPAI[estado] || "#666",
    weight: 2,
    fillColor: coloresPAI[estado] || "#666",
    fillOpacity: 0.3,
  };
}

// Popup y sidebar
function popupPAI(feature, layer) {
  const estadoPopUp =
    feature.properties.estado === "Prevista"
      ? "prevision-pophover"
      : feature.properties.estado === "En ejecución"
        ? "enejecucion-pophover"
        : feature.properties.estado === "Finalizado"
          ? "finalizado-pophover"
          : "prevision-pophover";

  layer.on("mouseover", (e) => {
    const tooltip = L.popup({
      offset: L.point(8, -5),
      className: estadoPopUp,
    });

    tooltip.setContent(`<b>${feature.properties.titulo}</b>`);
    tooltip.setLatLng(e.latlng);
    tooltip.openOn(map);
  });

  layer.on("mouseout", () => map.closePopup());

  layer.on("click", () => {
    const panel = document.getElementById("tabla");

    panel.innerHTML = `
      <h1 class="leaflet-sidebar-header">
        ${feature.properties.capa.toUpperCase()}
        <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>
      </h1><br/>
      <h2>${feature.properties.titulo}</h2>
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
        ${getProp(feature, "enlace_2", "ENLACE 2")}
      </tbody></table>
    `;

    sidebar.open("tabla");
  });
}

// Crear layer para una subcapa y un estado
function crearLayer(capa, estado) {
  return L.geoJson(pai_p, {
    style: estiloPoligono,
    onEachFeature: popupPAI,
    filter: (feature) =>
      feature.properties.capa === capa && feature.properties.estado === estado,
  });
}

// Estados

// Crear layers por tipo y estado
const estadosPAI = ["Prevista", "En ejecución", "Finalizado"];
const pai1Layer = L.layerGroup(
  estadosPAI.map((e) =>
    crearLayer("P1. Infraestructura habitacional y social resiliente", e),
  ),
);

const pai3Layer = L.layerGroup(
  estadosPAI.map((e) =>
    crearLayer(
      "P3. Catarroja Verde: Resiliencia Climática y soluciones basadas en la naturaleza",
      e,
    ),
  ),
);
