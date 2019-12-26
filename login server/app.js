var express = require('express');
var app = new express();
var router = require('./route/user');

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/users', router);// 将路由注册到/users的路径下

var port = process.env.PORT || 3000;

app.listen(port);
console.log('app is listening on port: ' + port);
