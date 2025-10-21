var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
    {
      name: "Renovación de contenedores",
      layer: contenedores,
      elements: [
        {
          label: "En previsión",
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
      layer: centroEducativo,
      elements: [
        {
          label: "En previsión",
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
      layer: centroCultural,
      elements: [
        {
          label: "En previsión",
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
      layer: centroSocio,
      elements: [
        {
          label: "En previsión",
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
