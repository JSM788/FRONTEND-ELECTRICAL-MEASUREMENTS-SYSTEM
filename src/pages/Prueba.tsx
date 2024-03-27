import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"

export const Prueba = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
       <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
          <div style={{display: "flex"}}>
            <EngineeringOutlinedIcon />

          </div>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>
   
  );
}





// import Highcharts from "highcharts"
// import HighchartsReact from "highcharts-react-official"
// import HighchartsPictorial from "highcharts/modules/pictorial"
// import HighchartsExporting from "highcharts/modules/exporting"
// import HighchartsAccessibility from "highcharts/modules/accessibility"

// HighchartsPictorial(Highcharts)
// HighchartsExporting(Highcharts)
// HighchartsAccessibility(Highcharts)

// export const Prueba = () => {
//   const options = {
//     chart: {
//       type: "pictorial",
//     },

//     title: {
//       text: "Composition of the human body",
//     },

//     accessibility: {
//       screenReaderSection: {
//         beforeChartFormat:
//           "<{headingTagName}>{chartTitle}</{headingTagName}><p>{typeDescription}</p><p>{chartLongdesc}</p>",
//       },
//       point: {
//         valueDescriptionFormat: "{value}.",
//       },
//       series: {
//         descriptionFormat: "",
//       },
//       landmarkVerbosity: "one",
//     },

//     xAxis: {
//       categories: ["Woman", "Man"],
//       lineWidth: 0,
//       opposite: true,
//     },

//     yAxis: {
//       visible: false,
//       stackShadow: {
//         enabled: true,
//       },
//       max: 100,
//     },

//     legend: {
//       itemMarginTop: 15,
//       itemMarginBottom: 15,
//       layout: "vertical",
//       padding: 0,
//       verticalAlign: "middle",
//       align: "center",
//       margin: 0,
//     },

//     tooltip: {
//       headerFormat: "",
//     },

//     plotOptions: {
//       series: {
//         pointPadding: 0,
//         groupPadding: 0,
//         dataLabels: {
//           enabled: true,
//           align: "center",
//           format: "{y} %",
//         },
//         stacking: "normal",
//         paths: [
//           {
//             definition:
//               "M41.6222 1.31021C29.5948 2.41643 20.3563 4.13453 13.7343 6.49582C5.98945 9.25745 1.82349 12.8989 0.960512 17.4702C0.480256 20.3502 0.160085 92.5102 0.160085 177.63L0 332.51L4.16222 336.35C15.5283 346.91 56.9904 353.15 84.2049 348.19C97.492 345.95 112.7 340.67 117.503 336.99L121.665 333.79L122.903 174.11C123.982 27.781 127.474 13.5843 117.294 8.65018C114.919 7.49931 112.234 6.15018 107.734 5.15018C103.234 4.15018 92.5085 2.40502 81.8974 1.31021C70.8958 0.17512 61.4123 -0.257049 58.2343 0.150177C57.4338 0.150177 49.1462 0.510211 41.6222 1.31021Z M43.0436 0.696434C21.5092 2.7564 4.18449 8.30245 1.91771 14.007C0.460493 18.1269 0.784318 36.825 2.56536 39.9942C3.37492 41.5787 8.23231 44.5895 13.4135 46.9663C41.4244 59.1676 86.2743 59.0092 113.961 46.491L124 41.8957V27.7929C124 13.0562 123.352 11.3132 115.095 7.19324C104.409 1.80564 66.359 -1.52199 43.0436 0.696434Z",
//           },
//         ],
//       },
//     },

//     series: [
//       {
//         name: "Other",
//         data: [25, 25],
//       },
//       {
//         name: "Essential Fat",
//         data: [12, 3],
//       },
//       {
//         name: "Non-Essential Fat",
//         data: [15, 12],
//       },
//       {
//         name: "Muscle Tissue",
//         data: [36, 45],
//       },
//     ],

//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             legend: {
//               padding: 8,
//               margin: 12,
//               itemMarginTop: 0,
//               itemMarginBottom: 0,
//               verticalAlign: "bottom",
//               layout: "horizontal",
//             },
//           },
//         },
//         {
//           condition: {
//             maxWidth: 400,
//           },
//           chartOptions: {
//             legend: {
//               layout: "vertical",
//             },
//           },
//         },
//       ],
//     },
//   }

//   return (
//     <div className="h-full">
//       <HighchartsReact
//         className="h-full"
//         highcharts={Highcharts}
//         options={options}
//       />
//     </div>
//   )
// }
