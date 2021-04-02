//GET data
const requestURL = 'http://localhost:3000/data'

sendRequest('GET', requestURL)
  .then(data => {
    google.charts.load('49')
    google.charts.setOnLoadCallback(drawVisualization) 

      function drawVisualization() {
        data.forEach(element => {
          const wrapper = new google.visualization.ChartWrapper(element)
          const para = document.createElement("div")
          para.setAttribute("id", element.containerId)
          para.setAttribute("class", "card")
          
          const elem = document.getElementById("kg_std_doo")
          elem.appendChild(para);
          wrapper.draw()
        }) 
      }
  })
  .catch(err => console.log(err))