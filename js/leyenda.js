var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
    {
      name: "Obras en alcantarillado",
      layer: alcantarilladoLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "5px",
            width: "20px",
            height: "6px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "5px",
            width: "20px",
            height: "6px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "5px",
            width: "20px",
            height: "6px",
          },
        },
      ],
    },
    {
      name: "Renovación de contenedores",
      layer: contenedoresLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Deportivas",
      layer: deportivasLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Red de riegos",
      layer: riegoLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Eléctricas",
      layer: electricasLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Parking Plaça Major",
      layer: parkingLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Plazas, parques y jardines",
      layer: plazasParquesJardinesLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Villa Romana",
      layer: villaRomanaLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Centros educativos",
      layer: centroEducativoLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Centros culturales",
      layer: centroCulturalLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Centros sociosanitarios",
      layer: centroSocioLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
    {
      name: "Megafonía",
      layer: megafoniaLayer,
      elements: [
        {
          label: "Prevista",
          html: "",
          style: {
            "background-color": "#14688F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#F5B800",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#00A34F",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
      ],
    },
  ],
  disableVisibilityControls: true,
});
map.addControl(leyenda);
