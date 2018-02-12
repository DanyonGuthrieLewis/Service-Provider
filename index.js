var express = require('express');
var pug = require('pug');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

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

var urlencodedParser = bodyParser.urlencoded({extended:true});

app.post('/submitted', urlencodedParser, function(req, res){
    var order = {
        name: req.body.name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        service1: req.body.service1,
        service2: req.body.service2,
        service3: req.body.service3,
        service3: req.body.service4,
        service3: req.body.service5,
        service3: req.body.service6,
        service3: req.body.service7,
        service3: req.body.service8
    }
    res.render('submitted');
    var test = [];
    test.push(req.body.name);
    test.push(req.body.address);
    test.push(req.body.phone_number);
    test.push(req.body.service1);
    test.push(req.body.service2);
    test.push(req.body.service3);
    test.push(req.body.service4);
    test.push(req.body.service5);
    test.push(req.body.service6);
    test.push(req.body.service7);
    test.push(req.body.service8);

    fs.writeFile('test.txt', test.join("\r\n"));
});

app.listen(3000);