const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Дошкольное образование',
   })
})

router.get('/data', (req, res) => {
  const data = [
    {
      type: 'PieChart',
      values: [
      ['Time', 'Total'],
      ['2018-2019', 40],
      ['2019-2020', 95],
      ['2020-2021', 127]
     ],
      options: {
      title: "Сводка по регионам",
        colors: ['#eb4034','#ebb134','#34abeb']
      }
    },
    {
      type: 'ColumnChart',
      values: [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ],
      options: {
        title: "Сводка по регионам",
        colors: ['#eb4034','#ebb134','#34abeb'],
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      }
    }
  ]
  res.send(data)
})

module.exports = router;
