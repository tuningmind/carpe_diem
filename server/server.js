var express = require('express')
var expressapp = express()
var port = process.env.PORT || 3000;
var path = require('path');


var www = path.join(__dirname, '../');
expressapp.use(express.static(www));


expressapp.listen(port, function () {
  console.log('Listening on port', port)
})
