var leyenda = L.control.htmllegend({
  position: "topright",
  legends: [
    {
      name: "ACTUACIÓN 01: <br/>Renovación de contenedores",
      layer: actuacion01,
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
