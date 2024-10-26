// import Chart from "chart.js";

var bienx = ["thu2", "thu3", "thu4", "thu5"]
var bieny = [2, 5, 8, 3]
var CHART = document.getElementById("lineChart").getContext('2d')
console.log(CHART);
var lineChart = new Chart(CHART, {
    type: "line",
    data: {
        labels: bienx,
        datasets: [{
            label: 'name_data',
            data: bieny
        }]
    }
})
console.log(lineChart);