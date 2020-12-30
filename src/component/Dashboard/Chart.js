import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import './Dashboard.css';

class PopCharts extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006]
        }
      },
      series: [{
        name: 'series-1',
        data: [5, 10, 30, 22, 43, 9, 32]
      }]
    }
  }

  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" width={300} height={320} />
    )
  }
}

export default PopCharts


// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class Charts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           width: "100%",
//           height: 380,
//           type: "bar"
//         },
//         plotOptions: {
//           bar: {
//             horizontal: true
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           width: 1,
//           colors: ["#fff"]
//         },
//         series: [
//           {
//             data: [44, 55, 41, 64, 22, 43, 21]
//           },
//           {
//             data: [53, 32, 33, 52, 13, 44, 32]
//           },
//           {
//             data: [4, 35, 42, 34, 62, 43, 21]
//           }
//         ],
//         xaxis: {
//           categories: [
//             "Korea",
//             "Canada",
//             "Poland",
//             "Italy",
//             "France",
//             "Japan",
//             "China"
//           ]
//         },
//         legend: {
//           position: "right",
//           verticalAlign: "top",
//           containerMargin: {
//             left: 35,
//             right: 60
//           }
//         },
//         responsive: [
//           {
//             breakpoint: 1000,
//             options: {
//               plotOptions: {
//                 bar: {
//                   horizontal: false
//                 }
//               },
//               legend: {
//                 position: "bottom"
//               }
//             }
//           }
//         ]
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.options.series}
//               type="bar"
//               // width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Charts;
