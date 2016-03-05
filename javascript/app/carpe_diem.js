var express = require('express')
var app = express()

module.exports = {
  app.get('/', function(req, res) {
    res.send('Seize the day')
  })

  app.listen('3000', function () {
    console.log('Listening on port 3000')
  }

  function carpe_diem() {
    document.getElementById('content').innerHTML = 
      "shows up in the browser"
    console.log("show this in console")
  }
}


