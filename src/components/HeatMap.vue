<template>
  <div class="hello">
    <!-- <div v-for="item in totalTeamMetrics" :key="item.name"> -->
      <h3>Metrics of {{ name }}</h3>
      <div id="chart">
        <apexchart
          type="heatmap"
          height="500"
          width="400"
          :options="chartOptions"
          :series="metrics"
        ></apexchart>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

// Vue.component('apexchart', VueApexCharts)

// export default {
//   name: 'HeatMap',
//   data: () => ({
//     options: {
//       chart: {
//         id: 'vuechart-example'
//       },
//       xaxis: {
//         categories: [
//          "Jan",
//          "Feb",
//          "Mar",
//          "Apr",
//          "May",
//          "Jun",
//          "Jul",
//          "Aug",
//          "Sep",
//          "Oct",
//          "Nov",
//          "Dec"
//         ]
//       }
//     },
//     series: [{
//       name: 'series-1',
//       data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
//     }]
//   })
// }

// import teamSerries from "../assets/data.json";

export default {
  name: "HeatMap",
  data: () => ({
    // totalTeamMetrics: [
    //   {
    //     name: "Sarp",
    //     result: calculateTotal(teamSerries.sarp_result),
    //   },
    //   {
    //     name: "Person",
    //     result: calculateTotal(teamSerries.result),
    //   },
    // ],
    // totalTeamMetrics: [
    //   {
    //     name: "Sarp",
    //     result: calculateTotal(metrics),
    //   }
    // ],
    chartOptions: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        heatmap: {
          radius: 100,
          enableShades: false,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: "#e4717a",
              },
              {
                from: 51,
                to: 70,
                color: "#ffdead",
              },
              {
                from: 71,
                to: 100,
                color: "#00E396",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"],
        },
      },
      xaxis: {
        type: "category",
      }
    },
  }),
  props:{
    name: String,
    metrics: Array
  },
};

// function generateData(count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//       var x = (i + 1).toString();
//       var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//       series.push({
//         x: x,
//         y: y
//       });
//       i++;
//     }

//     console.log(series)
//     return series;
//   }

// function calculateTotal(series) {
//     console.log(series)
//   if (series === undefined) return [];

//   for (var i = 0; i < series.length; i++) {
//     var totalOfRow = 0;
//     for (var j = 0; j < series[i].data.length; j++) {
//       totalOfRow += series[i].data[j].y;
//     }
//     series[i].data.push({ x: "Total", y: totalOfRow });
//   }
//   return series;
// }
</script>