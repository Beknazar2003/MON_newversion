exports.kg_std_doo = [{
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Чуй', 'Иссык-Кол', 'Баткен', 'ОШ',
      'Таласс', 'Нарын', 'Джалал-Абад'],
      ['2020-2021', 700, 1000, 400, 500, 600, 800, 200],
      ['2019-2020', 700, 1000, 400, 500, 600, 800, 200],
    ],
    options: {
      'title': 'Countries',
    },
    containerId: 'chart'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Чуй', 'Иссык-Кол', 'Баткен', 'ОШ',
        'Таласс', 'Нарын', 'Джалал-Абад'
      ],
      ['2018-2019', 10, 24, 20, 32, 18, 5, 13],
      ['2019-2020', 16, 22, 23, 30, 16, 9, 13],
      ['2020-202', 28, 19, 29, 30, 12, 13, 13]
    ],
    options: {
      'title': "Области",
      'colors': ['#eb4034', '#ebb134', '#34abeb'],
      'legend': {
        position: 'top',
        maxLines: 3
      },
      'bar': {
        groupWidth: '75%'
      },
      'isStacked': true,
    },
    containerId: 'chart1'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Total'],
      ['2018-2019', 40],
      ['2019-2020', 95],
      ['2020-2021', 127]
    ],
    options: {
      'title': 'Сводка по регионам',
      'colors': ['#eb4034', '#ebb134', '#34abeb']
    },
    containerId: 'chart2'
  }
]