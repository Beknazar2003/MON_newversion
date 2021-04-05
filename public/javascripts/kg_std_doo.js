google.charts.setOnLoadCallback(drawVisualization)

function drawVisualization() {
  GETdata.forEach(element => {
    const wrapper = new google.visualization.ChartWrapper(element)
    const para = document.createElement("div")

    para.setAttribute("id", element.containerId)
    para.setAttribute("class", "card")

    const elem = document.getElementById("kg_std_doo")
    elem.appendChild(para);
    wrapper.draw()
  })
}