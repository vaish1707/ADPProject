var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var battleRouter = require('./routes/battleRouter');
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'battledb'
});


app.use('/battle',battleRouter);


app.listen(3000,function(){
	console.log('Server is running on port 3000');
});