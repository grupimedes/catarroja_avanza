const estadosLeyenda = [
  {
    label: "Prevista",
    color: "#14688F",
  },
    {
    label: "En ejecución",
    color: "#F5B800",
  },
  {
    label: "Obras iniciadas",
    color: "#85CC85",
  },
  {
    label: "Finalizado",
    color: "#00A34F",
  },
];

const estilosLeyenda = {
  linea: {
    "border-radius": "5px",
    width: "20px",
    height: "6px",
  },
  punto: {
    "border-radius": "50%",
    width: "20px",
    height: "20px",
  },
  poligono: {
    width: "20px",
    height: "20px",
  },
};

function crearElementosLeyenda(tipo) {
  return estadosLeyenda.map((estado) => ({
    label: estado.label,
    html: "",
    style: Object.assign(
      {
        "background-color": estado.color,
      },
      estilosLeyenda[tipo],
    ),
  }));
}

var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
    {
      name: "Obras en alcantarillado",
      layer: alcantarilladoLayer,
      elements: crearElementosLeyenda("linea"),
    },
    {
      name: "Renovación de contenedores",
      layer: contenedoresLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Reurbanización",
      layer: reurbanizacionLayer,
      elements: crearElementosLeyenda("poligono"),
    },
    {
      name: "Deportivas",
      layer: deportivasLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Eléctricas",
      layer: electricasLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Alumbrado",
      layer: alumbradoLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Red de riegos",
      layer: riegoLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Port de Catarroja",
      layer: portLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Parking Plaça Major",
      layer: parkingLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Plazas, parques y jardines",
      layer: plazasParquesJardinesLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Villa Romana",
      layer: villaRomanaLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Centros educativos",
      layer: centroEducativoLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Centros culturales",
      layer: centroCulturalLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Centros sociosanitarios",
      layer: centroSocioLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Megafonía",
      layer: megafoniaLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "Centro de emergencias",
      layer: centroEmergenciasLayer,
      elements: crearElementosLeyenda("punto"),
    },
    {
      name: "P1. Infraestructura habitacional y social resiliente",
      layer: pai1Layer,
      elements: crearElementosLeyenda("poligono"),
    },
    {
      name: "P3. Catarroja Verde: Resiliencia Climática y soluciones basadas en la naturaleza",
      layer: pai3Layer,
      elements: crearElementosLeyenda("poligono"),
    },
  ],
  disableVisibilityControls: true,
});
map.addControl(leyenda);
