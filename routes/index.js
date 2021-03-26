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
    {value: 95},
    {value: 95},
    {value: 98}
  ]
  res.send(data)
})

module.exports = router;
