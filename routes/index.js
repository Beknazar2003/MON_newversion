const express = require('express')
const router = express.Router()
const {kg_std_doo} = require('./database/database')
const data = require('./database/data.json')

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Дошкольное образование',
  })
})

router.get('/data', (req, res) => {
  res.send(kg_std_doo)
})
router.get('/test', (req, res) => {
  res.render('test')
})

module.exports = router;