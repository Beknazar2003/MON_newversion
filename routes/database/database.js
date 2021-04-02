exports.kg_std_doo = [
    {
      chartType: 'ColumnChart',
      dataTable: [['', 'Germany', 'USA', 'Brazil', 'Canada', 'France', 'RU'],
                  ['', 700, 1000, 400, 500, 600, 800]],
      options: {
        'title': 'Countries',
      },
      containerId: 'chart'
    },
    {
      chartType: 'ColumnChart',
      dataTable: [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ],
      options: {
        'title': "Сводка по регионам",
        'colors': ['#eb4034','#ebb134','#34abeb'],
        'legend': { position: 'top', maxLines: 3 },
        'bar': { groupWidth: '75%' },
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
        'colors': ['#eb4034','#ebb134','#34abeb']
      },
      containerId: 'chart2'
    }
  ]