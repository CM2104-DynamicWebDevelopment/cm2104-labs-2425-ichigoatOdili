var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
   });

   app.get('/add', function(req, res){
    var x = req.query.x;
    var y = req.query.y;
    res.send("x + y="+(x+y));
   });

   app.get('/calc', function(req, res){
    var X = parseFloat(req.query.X);
    var Y = parseFloat(req.query.Y);
    const operator = req.query.operator; 

    if(isNaN(X) || isNaN(Y)) {
        return res.status(400).send('Invalid number provided');
     }

     let result;

     switch(operator) {
        case 'add':
            result= X + Y;
            break;
        case 'multiply':
            result= X * Y;
            break;
        case 'subtract':
            result = X - Y;
            break;
        case 'divide':
            result = Y !== 0 ? X / Y: 'Error: Division by zero';
            break;    
         
        default:
            return res.status(400).send('Invalid operator. Use add, suntrsct, multiply, divide.');    


     }
   })
app.listen(8080);