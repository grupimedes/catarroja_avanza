// 06. PAI

const capaGeneralPAI = "06. PAI";

// Colores por estado
const coloresPAI = {
  Prevista: "#413A3C",
  "Obra iniciada": "#115A7D",
  "En ejecución": "#AA2C2D",
  Finalizado: "#2E8B57",
};

// Icono para puntos
function crearIconoPAI(estado) {
  return L.divIcon({
    html: `
      <div style="
        background-color: ${coloresPAI[estado] || "#666"};
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 4px rgba(0,0,0,0.4);">
        <i class="fa-solid fa-location-dot fa-lg"></i>
      </div>`,
    className: "icono-personalizado",
  });
}

function obtenerEstadoPAI(feature) {
  const propiedades = feature.properties || {};

  return propiedades.estado;
}

// Estilo de polígonos
function estiloPoligonoPAI(feature) {
  const estado = obtenerEstadoPAI(feature);

  return {
    color: coloresPAI[estado] || "#666",
    weight: 2,
    fillColor: coloresPAI[estado] || "#666",
    fillOpacity: 0.3,
  };
}

// Popup y sidebar
function popupPAI(feature, layer) {
  const estado = obtenerEstadoPAI(feature);
  const estadoPopUp =
    estado === "Prevista"
      ? "prevision-pophover"
      : estado === "Obra iniciada"
        ? "obrasiniciadas-pophover"
        : estado === "En ejecución"
          ? "enejecucion-pophover"
          : estado === "Finalizado"
            ? "finalizado-pophover"
            : "prevision-pophover";

  layer.on("mouseover", (e) => {
    const tooltip = L.popup({
      offset: L.point(8, -5),
      className: estadoPopUp,
    });

    tooltip.setContent(`<b>${feature.properties.titulo}</b>`);
    const latLng =
      e.latlng ||
      (e.target.getLatLng
        ? e.target.getLatLng()
        : e.target.getBounds().getCenter());
    tooltip.setLatLng(latLng);
    tooltip.openOn(map);
  });

  layer.on("mouseout", () => map.closePopup());

  layer.on("click", () => {
    const panel = document.getElementById("tabla");
    const tituloCapa =
      feature.properties.capa || feature.properties.grupo || capaGeneralPAI;

    panel.innerHTML = `
      <h1 class="leaflet-sidebar-header">
        ${tituloCapa.toUpperCase()}
        <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>
      </h1><br/>
      <h2>${feature.properties.titulo}</h2>
      <table class="detalle"><tbody>
        ${getProp(feature, "equip", "EQUIPAMIENTO")}
        ${getProp(feature, "direccion", "DIRECCIÓN")}
        ${getProp(feature, "actuacion", "ACTUACIÓN")}
        ${getProp(feature, "masinfo", "MÁS INFORMACIÓN")}
        ${getProp(feature, "val_inv", "VALORACIÓN DE LA INVERSIÓN")}
        ${getProp(feature, "subv_apro", "SUBVENCIÓN APROBADA")}
        ${getProp(feature, "estado", "ESTADO")}
        ${getProp(feature, "fecha_prev", "FECHA PREVISTA")}
        ${getProp(feature, "enlace", "ENLACE")}
        ${getProp(feature, "enlace_2", "ENLACE 2")}
      </tbody></table>
    `;

    sidebar.open("tabla");
  });
}

function perteneceACapaPAI(feature, capa) {
  const propiedades = feature.properties || {};

  if (capa === capaGeneralPAI) {
    return (
      propiedades.grupo === capaGeneralPAI ||
      propiedades.capa === capaGeneralPAI
    );
  }

  return propiedades.capa === capa;
}

function crearGeoJsonPAI(fuenteGeoJSON, capa, estado) {
  return L.geoJson(fuenteGeoJSON, {
    pointToLayer: (feature, latlng) =>
      feature.geometry.type === "Point"
        ? L.marker(latlng, { icon: crearIconoPAI(estado) })
        : null,

    style: (feature) => {
      if (
        feature.geometry.type === "Polygon" ||
        feature.geometry.type === "MultiPolygon"
      ) {
        return estiloPoligonoPAI(feature);
      }
    },

    onEachFeature: popupPAI,

    filter: (feature) =>
      perteneceACapaPAI(feature, capa) && obtenerEstadoPAI(feature) === estado,
  });
}

// Crear layer para una subcapa y un estado
function crearLayerPAI(capa, estado) {
  return L.layerGroup([
    crearGeoJsonPAI(pai, capa, estado),
    crearGeoJsonPAI(pai_p, capa, estado),
  ]);
}

// Crear layers por tipo y estado
const estadosPAI = ["Prevista", "Obra iniciada", "En ejecución", "Finalizado"];

const paiLayer = L.layerGroup(
  estadosPAI.map((e) => crearLayerPAI(capaGeneralPAI, e)),
);

const pai1Layer = L.layerGroup(
  estadosPAI.map((e) =>
    crearLayerPAI(
      "P1. Reconstrucción y refuerzo de la resiliencia del sistema urbano habitacional afectado por la DANA",
      e,
    ),
  ),
);

const pai3Layer = L.layerGroup(
  estadosPAI.map((e) =>
    crearLayerPAI(
      "P3. Catarroja Verde: Proyecto de reconstrucción del espacio público afectado por la DANA, incorporando soluciones basadas en la naturaleza",
      e,
    ),
  ),
);

const pai4Layer = L.layerGroup(
  estadosPAI.map((e) =>
    crearLayerPAI(
      "P4. Sistemas de protección ciudadana y servicios públicos para la gestión de emergencias",
      e,
    ),
  ),
);
