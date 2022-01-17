// import { DATA, DATA_ERROR, DATA_SUCCESS } from "../actions/data";
import data from '../../assets/data.json'
console.log(data);

import initialData from '../../assets/initialData.json'

console.log("initdata", initialData);
console.log("sarpin metrikleri", initialData.teamList[0].metrics);
// initialData.teamList.forEach(function(locItem){
//                     initialData.teamList
//                 });


for (let i = 0; i < initialData.teamList.length; i++) { // loop people
    let metrics = []
    let person = initialData.teamList[i];
    
    let metricsOfThisPerson = person.metrics;
    for (let j = 0; j < metricsOfThisPerson.length; j++) { // loop metrics
        
        let dataArray = []
        for (let k = 0; k < metricsOfThisPerson[j].value.length; k++) { // loop value of metrics
            // for (let l = 0; l < person.metrics.length; l++) {
            dataArray.push({
                "x": getMonth(k),
                "y": metricsOfThisPerson[j].value[k]
            })
            // }
        }
        metrics.push({
            "name": metricsOfThisPerson[j].field_name, // Line Of Code
            "data": dataArray
        });
        console.table(metrics)
        // {
        //     "name": "Line Of Code",
        //     "data": [
        //         {
        //             "x": "January",
        //             "y": 12
        //         },
        //         {
        //             "x": "February",
        //             "y": 57
        //         }
        //     ]
        // },
        
    }
    person.metrics = calculateTotal(metrics)
}


// let datas = [];
// datas = data;

// import axios from "axios";
// axios
//           .get("../../assets/dataGeneration.js")
//           .then(response => {
//             console.log(response);
//             response.forEach(function(locItem){
//                 datas.push(locItem);
//             });

//           })
//           .catch(error => {
//             // this.errors.push(error);
//             console.log(error);
//           })
//           .finally(() => console.log("finally"));

// console.log("initdata sonra", calculateTotal(initialData.teamList[0].metrics));
const state = {
    msg: "hello vue",
    teamList: initialData.teamList
    // teamList: [
    //     {
    //         "name_surname": "Sarp Yucel",
    //         "info": "XOR Culture Member",
    //         "engineer_info": "14 Level - Python Developer",
    //         "image": "https://tse4.mm.bing.net/th?id=OIP.WSIF0y0YfMWNk6H88Sw7igHaE8&pid=Api&P=0&w=238&h=159",
    //         "metrics": datas.sarp_result
    //     }, {
    //         "name_surname": "Selami Surname",
    //         "info": "",
    //         "engineer_info": "14 Level - Python Developer",
    //         "image": "url_here",
    //         "metrics": datas.person2_result
    //     }]
};

const getters = {};

const actions = {};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};


function generate() {

    console.log("generate data and save it to data.json file")
}

console.log(generate());


function getMonth(val) {
    const month = ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"];
    return month[val];
}



function calculateTotal(series) {
    console.log(series)
  if (series === undefined) return [];

  for (var i = 0; i < series.length; i++) {
    var totalOfRow = 0;
    for (var j = 0; j < series[i].data.length; j++) {
      totalOfRow += series[i].data[j].y;
    }
    series[i].data.push({ x: "Total", y: totalOfRow });
  }
  return series;
}