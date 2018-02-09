var express = require('express');
var pug = require('pug');
var path = require('path');

var listings = require('./routes/listings.js');
var order = require('./routes/order.js');
var title = require('./routes/title.js');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', title.index);
app.get('/order', order.index);
app.get('/listings', listings.index);

app.listen(3000);