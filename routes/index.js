const express = require('express')
const router = express.Router()
const {kg_std_doo} = require('./database/database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Дошкольное образование',
   })
})

router.get('/data', (req, res) => {
  res.send(kg_std_doo)
})

module.exports = router;
