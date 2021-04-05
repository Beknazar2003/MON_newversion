google.charts.setOnLoadCallback(drawStuff)

function drawStuff() {
  const dashboard = new google.visualization.Dashboard(
    document.getElementsByClassName('card'))

  const programmaticSlider = new google.visualization.ControlWrapper({
    'controlType': 'CategoryFilter',
    'containerId': `${GETdata[2].containerId + '_control'}`,
    'options': {
      'filterColumnLabel': 'Time',
    }
  })

  const programmaticChart = new google.visualization.ChartWrapper(GETdata[2])
  dashboard.bind(programmaticSlider, programmaticChart)
  dashboard.draw(GETdata[2].dataTable)
}