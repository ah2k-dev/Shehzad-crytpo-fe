import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const state = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35 ,134]
    }],
    options: {
        chart: {
          height: 240,
          type: "area",
  
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
          
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [100, 100, 100],
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
          },
        },
        colors: ["#F98107" ],
      xaxis: {
        categories: ['Home', 'About', 'Shop',"Product"],
      },
    },
  };

  return (
    <div>
        <p className='font-bold'>Google Analytics</p>
      <div id="chart" className=' text-white'>
        <ReactApexChart 
          options={state.options} 
          series={state.series} 
          type="line" 
          height={350} 
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};


export default LineChart