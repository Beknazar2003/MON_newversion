google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
     ['Time', 'Total'],
     ['2018-2019', 95],
     ['2019-2020', 95],
     ['2020-2021', 98]
    ]);
    const options = {
     colors: ['brown']
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('histogram-1'));
    const chart2 = new google.visualization.ColumnChart(document.getElementById('histogram-2'));
    chart.draw(data, options);
    chart2.draw(data, options);
}