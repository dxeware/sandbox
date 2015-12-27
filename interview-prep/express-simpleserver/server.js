var express = require('express');
var app = express();

var string =  '';
//app.use('/');
app.get('/teams', function(req, res, next) {
  string = 'Hello world';
  next();
});

app.get('/teams', function(req, res) { 
  string += '!!!!!';
  res.send('<h1>' + string + '</h1>');
});

// app.get('/teams', (req, res) => 
//    ( res.send('<h1>Hello World</h1>') )
// );

app.post('/teams', (req, res) => 
  (res.send('I received your post!!!'))
);

app.listen(3000, (resp) => (console.log("listening on port 3000")));