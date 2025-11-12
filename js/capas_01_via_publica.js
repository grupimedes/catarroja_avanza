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
    fillOpacity: 0.4,
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
    const tooltipPopup = L.popup({
      offset: L.point(8, -5),
      className: estadoPopUp,
    });

    let latlng;

    if (feature.geometry.type === "Point") {
      latlng = e.target.getLatLng();
    } else if (feature.geometry.type === "LineString") {
      const coords = feature.geometry.coordinates;
      const middle = coords[Math.floor(coords.length / 2)];
      latlng = L.latLng(middle[1], middle[0]);
    } else if (feature.geometry.type === "MultiLineString") {
      const allCoords = feature.geometry.coordinates.flat();
      const middle = allCoords[Math.floor(allCoords.length / 2)];
      latlng = L.latLng(middle[1], middle[0]);
    } else if (feature.geometry.type === "Polygon") {
      const coords = feature.geometry.coordinates[0];
      const middle = coords[Math.floor(coords.length / 2)];
      latlng = L.latLng(middle[1], middle[0]);
    } else if (feature.geometry.type === "MultiPolygon") {
      const allCoords = feature.geometry.coordinates.flat(2);
      const middle = allCoords[Math.floor(allCoords.length / 2)];
      latlng = L.latLng(middle[1], middle[0]);
    }

    if (latlng) {
      tooltipPopup.setContent("<b>" + feature.properties.titulo + "</b>");
      tooltipPopup.setLatLng(latlng);
      tooltipPopup.openOn(map);
    }
  });

  layer.on("mouseout", () => map.closePopup());

  layer.on("click", () => {
    const sidebar = L.control
      .sidebar({ autopan: true, container: "sidebar", position: "left" })
      .addTo(map);
    const panel = document.createElement("div");
    panel.className = "leaflet-sidebar-pane";

    const header = document.createElement("h1");
    header.className = "leaflet-sidebar-header";
    header.innerHTML =
      feature.properties.capa.toUpperCase() +
      '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
    panel.appendChild(header);

    const tabla = document.createElement("div");
    tabla.innerHTML = `
      <br/><h2>${feature.properties.titulo || infoTitulo(feature)}</h2>
      <table class='detalle'>
        <tbody>
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
