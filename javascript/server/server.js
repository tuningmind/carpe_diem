var express = require('express')
var expressapp = express()
var port = process.env.PORT || 3000;
var path = require('path');


// expressapp.get('/', function(req, res) {
//   var homepage = path.join(__dirname, '/../carpe_diem.html');
//   console.log(homepage);
//   res.sendFile(homepage);
// });

var www = path.join(__dirname, '../');
expressapp.use(express.static(www));


expressapp.listen(port, function () {
  console.log('Listening on port', port)
})
