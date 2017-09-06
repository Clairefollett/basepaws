// load the things we need
var path = require('path');
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//getting the image files
app.use(express.static(path.join(__dirname, 'public')));

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
	res.render('pages/product');
});

app.listen(8084);
console.log('8084 is the magic port');