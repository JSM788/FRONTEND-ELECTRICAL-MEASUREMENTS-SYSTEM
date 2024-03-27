import { useRef, useEffect } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const LineChart = ({ data }) => {
  // const chartRef = useRef(null);

  // useEffect(() => 
  //   const chart = chartRef.current.chart;

  //   const handleResize = () => {
  //     if (chart) {
  //       chart.reflow();
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Tendencia",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '100%', flex: 1 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
