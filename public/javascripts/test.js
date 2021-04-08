google.charts.setOnLoadCallback(drawStuff)

function drawStuff() {
  GETdata.forEach(element => {
    const controlWrap = document.createElement("div")
    const chartWrap = document.createElement("div")
    const dashboardWrap = document.createElement("div")
    controlWrap.setAttribute("id", `${element.containerId + '_control'}`)
    chartWrap.setAttribute("id", element.containerId)
    dashboardWrap.setAttribute("id", `${element.containerId + '_dashboard'}`)
    dashboardWrap.setAttribute("class", 'card')

    const elem = document.getElementById("kg_std_doo")
    elem.appendChild(dashboardWrap)
    dashboardWrap.appendChild(controlWrap)
    dashboardWrap.appendChild(chartWrap)
    const dashboard = new google.visualization.Dashboard(
      document.getElementById("kg_std_doo"))

    const programmaticSlider = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': `${element.containerId + '_control'}`,
      'options': {
        'filterColumnIndex': 0,
        'ui': {
          'labelStacking': 'vertical',
          'label': 'Time Filter',
          'allowTyping': false,
          'allowMultiple': false
        }
      }
    })

    const programmaticChart = new google.visualization.ChartWrapper(element)
    dashboard.bind(programmaticSlider, programmaticChart)
    dashboard.draw(element.dataTable)
    
  })

}