import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import CylinderModule from 'highcharts/modules/cylinder';

Highcharts3D(Highcharts);
CylinderModule(Highcharts);

export const CylinderChart = ({data}) => {
  // console.log([data[0].value1], "data.value1");
  const options = {
    chart: {
      type: 'cylinder',
      options3d: {
        enabled: false,
        alpha: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Cilindro'
    },
    xAxis: {

      // title: {
      //   text: 'Age groups'
      // },
      labels: {
        skew3d: true
      }
    },
    yAxis: {
      title: {
        margin: 20,
        text: 'Valores'
      },
      labels: {
        skew3d: true
      }
    },
    // tooltip: {
    //   headerFormat: '<b>Age: {point.x}</b><br>'
    // },
    plotOptions: {
      series: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      data: [data[0].value1],
      // data: [],
    }]
  }

  return (
    <div className='h-full'>
      <HighchartsReact className='h-full' highcharts={Highcharts} options={options} />
    </div>
  );
};

