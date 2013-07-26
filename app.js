require('./lib/env');

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {name: "Jake"});
});

app.use(express.static(__dirname + '/public', { maxAge: 31557600000 }));
app.use(express.logger({ format: 'dev' }));
app.use(express.bodyParser());
app.use(app.router);

app.listen(process.env.PORT || 3000);