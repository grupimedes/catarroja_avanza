var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
    {
      name: "Renovación de contenedores",
      layer: contenedores,
      elements: [
        {
          label: "Finalizado",
          html: "",
          style: {
            "background-color": "#72af26",
            "border-radius": "50%",
            width: "20px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#f69730",
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
