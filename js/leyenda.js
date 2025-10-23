var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
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
  ],
  disableVisibilityControls: true,
});
map.addControl(leyenda);
