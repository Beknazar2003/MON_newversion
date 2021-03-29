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
  .then(data => {
    GETdata = data
    google.charts.load('49');
    google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        GETdata.forEach(element => {
          const wrapper = new google.visualization.ChartWrapper(element);
          const para = document.createElement("div");
          para.setAttribute("id", element.containerId)
          para.setAttribute("class", "card")
          
          const elem = document.getElementById("kg_std_doo");
          elem.appendChild(para);
          wrapper.draw();
        });
        

        
      }
  })
  .catch(err => console.log(err))