google.charts.load('current', {'packages':['corechart', 'controls']})
google.charts.setOnLoadCallback(drawStuff)

function drawStuff() {

  const dashboard = new google.visualization.Dashboard(
    document.getElementById('programmatic_dashboard_div'))

  // We omit "var" so that programmaticSlider is visible to changeRange.
  const programmaticSlider = new google.visualization.ControlWrapper({
    'controlType': 'CategoryFilter',
    'containerId': 'programmatic_control_div',
    'options': {
      'filterColumnLabel': 'Time',
    }
  })

  const programmaticChart  = new google.visualization.ChartWrapper({
    'chartType': 'ColumnChart',
    'containerId': 'programmatic_chart_div',
    'options': {
      'width': 300,
      'height': 300,
      'legend': 'none',
      'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
      'pieSliceText': 'value'
    }
  })

  const data = google.visualization.arrayToDataTable([
  ['Time', 'Total'],
  ['2018-2019', 40],
  ['2019-2020', 95],
  ['2020-2021', 127]
 ])

  dashboard.bind(programmaticSlider, programmaticChart)
  dashboard.draw(data)
}