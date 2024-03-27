import React, { useState, useEffect } from "react"
import Highcharts from "highcharts"
import HighchartsBoost from "highcharts/modules/boost"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsAccessibility from "highcharts/modules/accessibility"
import HighchartsReact from "highcharts-react-official"
import "./Transients.css"

HighchartsBoost(Highcharts)
HighchartsExporting(Highcharts)
HighchartsAccessibility(Highcharts)

export const Transients = ({ data }) => {
  const [chartOptions1, setChartOptions1] = useState({})
  const [chartOptions2, setChartOptions2] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showCharts, setShowCharts] = useState(true)

  useEffect(() => {
    console.log(data, "data")

    handleChartUpdate(data.transient_boot_data)
  }, [data.transient_boot_data])

  const handleChartUpdate = (newData) => {
    console.log(newData, "newData")
    const seriesData1 = newData.slice(0, 3)
    const seriesData2 = newData.slice(3)

    setChartOptions1(createChartOptions(seriesData1, "Tension", "Volts (L-L)"))
    setChartOptions2(createChartOptions(seriesData2, "Corriente", "Amps"))
  }

  const createChartOptions = (seriesData, title, yAxisTitle) => {
    return {
      chart: {
        type: "line",
        zoomType: "x",
        spacingTop: 20,
        spacingBottom: 20,
      },
      title: {
        text: title,
        margin: 0,
        x: 30,
      },
      colors: ["#CB327D", "#60A9DA", "#B48B00"],
      xAxis: {
        type: "linear",
        pointStart: 0.001650017,
        pointInterval: 0.001650017 * 1000,
        crosshair: true,
        events: {
          setExtremes: (e) => {
            setIsLoading(true)
            const thisChart = e.target.chart

            if (e.trigger !== "syncExtremes") {
              Highcharts.charts.forEach((chart) => {
                if (chart !== thisChart) {
                  chart &&
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                      trigger: "syncExtremes",
                    })
                }
              })
            }

            setTimeout(() => {
              setIsLoading(false)
            }, 1000)
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
            },
          },
        ],
      },
      tooltip: {
        // pointFormat:
        //   '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
        valueDecimals: 2,
        // split: true,
        enabled: true,
        shared: true,
        // crosshairs: [false, true],
      },
      yAxis: {
        title: {
          text: yAxisTitle,
        },
      },
      series: seriesData,
    }
  }

  const addHighlight = (e) => {
    let point, event
    const charts = Highcharts.charts
    charts.forEach((chart) => {
      if (chart) {
        event = chart.pointer.normalize(e)
        point =
          (chart.series[0] && chart.series[0].searchPoint(event, true)) || null
        if (point) {
          point.highlight(e)
        }
      }
    })
  }

  return (
    <div
      className="transient-container"
      onMouseMove={addHighlight}
      onTouchMove={addHighlight}
      onTouchStart={addHighlight}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      {showCharts && (
        <div className="transient-container" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <HighchartsReact highcharts={Highcharts} options={chartOptions1} style={{ flex: "1" }}/>
          <HighchartsReact highcharts={Highcharts} options={chartOptions2} style={{ flex: "1" }}/>
        </div>
      )}
    </div>
  )
}
