import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export const PercentageStackedAreaChart = ({ data }) => {
  console.log(data, "Data en BarRotor");
  
  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: "Barras de Rotor",
      align: "center",
    },
    yAxis: {
      labels: {
        format: "{value}%",
      },
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      series: {
        pointStart: 1990,
      },
      area: {
        stacking: "percent",
        marker: {
          enabled: false,
        },
      },
    }, // #61C3FE #FE8F67 #3FE693 #FE8F67 #FFD700
    colors: ["#3FE693", "#FFD700", "#FE8F67"],
    series: [
      {
        name: "Green",
        data: [
          2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4, 3.5, 3.9, 4.5,
          5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8, 10, 10, 9.8, 9.7, 9.9,
          10.3, 10.5, 10.7, 10.9,
        ],
      },
      {
        name: "Yellow",
        data: [
          5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9, 5.9, 6, 6.1,
          6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5, 5.5, 5.4, 5.2, 5.2, 5.4,
          5.3, 4.7, 5,
        ],
      },
      {
        name: "Red",
        data: [
          3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.7,
          3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3, 3.1, 3.1, 3.1, 3,
          2.9, 2.6, 2.7,
        ],
      },
    ],
  }

  return (
    <div>
      <HighchartsReact
        style="width: 100%; height: 100%; display: block;"
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}
