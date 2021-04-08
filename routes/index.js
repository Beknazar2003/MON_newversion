const express = require('express')
const router = express.Router()


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Дошкольное образование',
  })
})
router.get('/test', (req, res) => {
  res.render('test')
})

module.exports = router