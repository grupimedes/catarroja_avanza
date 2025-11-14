// 01. VÍA PÚBLICA

// Capas y sus iconos FontAwesome
const capasViapublica = {
  Contenedores: "fa-trash",
};

// Colores por estado
const coloresViapublica = {
  Prevista: "#14688F",
  "En ejecución": "#f5b800",
  Finalizado: "#00a34f",
};

// Función para crear icono personalizado (para puntos)
function crearIcono(capa, estado) {
  return L.divIcon({
    html: `
      <div style="
        background-color: ${coloresViapublica[estado]};
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 4px rgba(0,0,0,0.4);">
        <i class="fa-solid ${capasViapublica[capa]} fa-lg"></i>
      </div>`,
    className: "icono-personalizado",
  });
}

// Función para el estilo de polígonos
function estiloPoligono(feature) {
  const estado = feature.properties.estado;
  return {
    color: coloresViapublica[estado],
    weight: 2,
    fillColor: coloresViapublica[estado],
    fillOpacity: 0.3,
  };
}

// Función genérica para popups y sidebar
function popupViapublica(feature, layer) {
  const estadoPopUp =
    feature.properties.estado === "Prevista"
      ? "prevision-pophover"
      : feature.properties.estado === "En ejecución"
      ? "enejecucion-pophover"
      : feature.properties.estado === "Finalizado"
      ? "finalizado-pophover"
      : "prevision-pophover";

  layer.on("mouseover", (e) => {
    const tooltip = L.popup({ offset: L.point(8, -5), className: estadoPopUp });
    tooltip.setContent("<b>" + feature.properties.titulo + "</b>");
    tooltip.setLatLng(e.target.getLatLng());
    tooltip.openOn(map);
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
                ${getProp(feature, "enlace_2", "ENLACE 2")}
            </tbody></table>
        `;

    sidebar.open("tabla");
  });
}

// Función para crear layer según tipo y estado
function crearLayer(capa, estado) {
  let fuenteGeoJSON;

  if (capa === "Alcantarillado") fuenteGeoJSON = viapublica_l;
  else if (capa === "Reurbanización") fuenteGeoJSON = viapublica_p;
  else fuenteGeoJSON = viapublica;

  return L.geoJson(fuenteGeoJSON, {
    pointToLayer: (feature, latlng) =>
      feature.geometry.type === "Point"
        ? L.marker(latlng, { icon: crearIcono(capa, estado) })
        : null,

    style: (feature) => {
      if (feature.geometry.type === "MultiLineString") {
        return {
          color: coloresViapublica[estado],
          weight: 6,
          opacity: 0.8,
        };
      } else if (
        feature.geometry.type === "Polygon" ||
        feature.geometry.type === "MultiPolygon"
      ) {
        return estiloPoligono(feature);
      }
    },

    onEachFeature: popupViapublica,

    filter: (feature) =>
      feature.properties.capa === capa && feature.properties.estado === estado,
  });
}

// Crear layers por capa y estado
const estadosViapublica = ["Prevista", "En ejecución", "Finalizado"];

const contenedoresLayer = L.layerGroup(
  estadosViapublica.map((e) => crearLayer("Contenedores", e))
);

const alcantarilladoLayer = L.layerGroup(
  estadosViapublica.map((e) => crearLayer("Alcantarillado", e))
);

const reurbanizacionLayer = L.layerGroup(
  estadosViapublica.map((e) => crearLayer("Reurbanización", e))
);
