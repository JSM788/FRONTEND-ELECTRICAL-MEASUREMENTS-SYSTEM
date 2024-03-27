import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export const MainChart = ({ data }) => {
  console.log(data, "data en mainchart")
  const options = {
    // navigation: {
    //   buttonOptions: {
    //       enabled: false,
    //   }
    // },
    title: {
      text: "Grafico Resumen",
      align: "center",
    },
    colors: ["#CB327D", "#60A9DA", "#B48B00", "#E287B9", "#8AC7E3", "#D6B667"],
    yAxis: {
      // title: {
      //   text: "Number of Employees",
      // },
    },
    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2020",
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    series: data,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
