//GET data
const requestURL = 'http://localhost:3000/data'
let GETdata
function sendRequest(method, url) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

sendRequest('GET', requestURL)
  .then(data => {GETdata = data})
  .catch(err => console.log(err))

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

async function drawChart() {
    const data =await google.visualization.arrayToDataTable([
     ['Time', 'Total'],
     ['2018-2019', GETdata[0].value],
     ['2019-2020', GETdata[1].value],
     ['2020-2021', GETdata[2].value]
    ]);
    const options = {
     colors: ['brown']
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('histogram-1'));
    const chart2 = new google.visualization.PieChart(document.getElementById('histogram-2'));
    chart.draw(data, options);
    chart2.draw(data, options);
}