var leyenda = L.control.htmllegend({
  position: "bottomright",
  legends: [
    {
      name: "Zonas verdes formales",
      layer: zonasverdesF,
      elements: [
        {
          label:
            "A. Espacios periurbanos y rurales protegidos por el planeamiento territorial o urbano",
          html: "",
          style: {
            "background-color": "#84ddb8",
            width: "15px",
            height: "30px",
          },
        },
        {
          label: "B. Grandes parques y jardines de ciudad",
          html: "",
          style: {
            "background-color": "#239684",
            width: "15px",
            height: "30px",
          },
        },
        {
          label: "C. Parques de barrio",
          html: "",
          style: {
            "background-color": "#68bba5",
            width: "15px",
            height: "30px",
          },
        },
        {
          label:
            "D. Zonas verdes y jardines de equipamientos de titularidad pública",
          html: "",
          style: {
            "background-color": "#68bba5",
            width: "15px",
            height: "30px",
          },
        },
        {
          label: "E. Bulevares, grandes vías, paseos y avenidas ajardinadas",
          html: "",
          style: {
            "background-color": "#176659",
            width: "15px",
            height: "30px",
          },
        },
        {
          label:
            "F. Otros jardines, parterres, arriates y otros espacios vegetados permeables de pequeño tamaño",
          html: "",
          style: {
            "background-color": "#9fffcb",
            width: "15px",
            height: "30px",
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
