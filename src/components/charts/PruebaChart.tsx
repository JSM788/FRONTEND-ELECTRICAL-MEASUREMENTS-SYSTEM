import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PruebaChart = ({checkboxNames, data}) => {
  
  console.log(checkboxNames, "checkboxNames")


  const [chartData, setChartData] = useState([]);
  console.log(chartData, "chartData")


  useEffect(() => {
    if (checkboxNames.length > 0) {
    console.log(data, " data aca")
    const newcheckboxNames = checkboxNames.map(letra => letra.toLowerCase());
    console.log(newcheckboxNames, "newcheckboxNames")

    const filteredData = data.filter((item) => newcheckboxNames.includes(item.name));
    console.log(filteredData, "filteredData")

    setChartData(filteredData)
    }
  }, [checkboxNames]);

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
    series: chartData,
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PruebaChart;
