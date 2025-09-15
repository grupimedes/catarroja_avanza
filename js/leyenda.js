var leyenda = L.control.htmllegend({
  position: "bottomright",
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
            width: "15px",
            height: "20px",
          },
        },
        {
          label: "En ejecución",
          html: "",
          style: {
            "background-color": "#f69730",
            width: "15px",
            height: "20px",
          },
        },
      ],
    },
  ],
  collapseSimple: true,
  disableVisibilityControls: true,
  detectStretched: true,
});
map.addControl(leyenda);
