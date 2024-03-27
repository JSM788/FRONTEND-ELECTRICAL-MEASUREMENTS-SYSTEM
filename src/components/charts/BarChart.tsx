import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export const BarChart = ({data}) => {
  console.log(data, "data en barchart");

  const options = {
      chart: {
        type: "column",
        zoomType: "x",
        maxHeight: '100%',
      },
      title: {
        text: "Armónicos",
        align: "center",
      },
      // subtitle: {
      //   text:
      //     'Source: <a target="_blank" ' +
      //     'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      //   align: "left",
      // },
      xAxis: {
        categories: data.categories,
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
      },
      responsive: {
        rules: [{
            condition: {
                maxWidth: '100%', // Máximo ancho relativo al contenedor
                maxHeight: '100%' // Máxima altura relativa al contenedor
            },
            chartOptions: {
                chart: {
                    width: '100%', // Ancho del gráfico relativo al contenedor
                    height: '100%' // Altura del gráfico relativa al contenedor
                },
                legend: {
                    enabled: false // Opciones específicas para cuando el ancho o la altura sea menor que maxWidth o maxHeight
                }
            }
        }]
    },
      yAxis: {
        min: 0,
        title: {
          text: "Valores",
        },
      },
      // tooltip: {
      //   valueSuffix: " (1000 MT)",
      // },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: data,
  }

  return (
    <>
      <div className="h-full flex-1">
        <HighchartsReact highcharts={Highcharts} options={options}  />
      </div>
    </>
  )
}
