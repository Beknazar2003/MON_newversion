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

function dataCharts(){
  return chart = new google.visualization.PieChart(document.getElementById(GETdata.title))
  
}

sendRequest('GET', requestURL)
  .then(data => {
    GETdata = data
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        const chart = new google.visualization.PieChart(document.getElementById('histogram-3'));
        chart.draw(google.visualization.arrayToDataTable(GETdata[0].values),GETdata[0].options)
    }
  })
  .catch(err => console.log(err))




