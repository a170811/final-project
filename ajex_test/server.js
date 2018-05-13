#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 10055
const bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended:true
}));
app.use( express.json() );
app.use (express.urlencoded() );


app.use(express.static(__dirname + '/public'));

app.get('/get_data', function(req, res) {
  //console.log(req.query.Name)
  res.send(`<h1>Hello ${req.query.name}, your student ID is ${req.query.student_id}</h1>`);
});

app.post('/post_data', function(req, res) {
  console.log(req.query.Name)
  res.send(`<h1>Hello ${req.body.name}, your student ID is ${req.body.student_id}</h1>`);
});

app.post("ajax.php", function(req, res) {
  res.send(`Hello ${req.query.name}, your student ID is ${req.query.student_id}`)
});

app.listen(port, () => {
  console.log( `listening on port: ${port}` )
});


