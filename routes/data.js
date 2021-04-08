const express = require('express')
const router = express.Router()
const {kg_std_doo} = require('./database/database')

/* GET users listing. */
router.get('/data', (req, res) => {
  res.send(kg_std_doo)
})

module.exports = router
