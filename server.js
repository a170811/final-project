#!/usr/bin/env node

const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 10059;

var data_file = './data.json';
var data = require(data_file);
//var test = 'E123456789';
//var test2 =  'data.'+test; 

//----read data.json file----//
console.log('Test: \n' + data[test] + '\n' + data.B123456789 )



//----setup body-parser for POST method, otherwise POST won't work----//
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended:true
}));
app.use( express.json() );
app.use (express.urlencoded() );


//----let server.js know where the index.html is----//
app.use(express.static(__dirname + '/MAIN'));


//----Ajax_post function----//
app.post("/ajax_data", function(req, res) {
  if ( data.hasOwnProperty(req.body.student_id) ) { 
    res.send('Student ID ' + req.body.student_id + ' is owned by ' + data[req.body.student_id]);
  }
  else {
    res.send(`Hello ${req.body.name}, your student ID is ${req.body.student_id}, Let me regist for you`);

    //----add new data into .json----//
    data[req.body.student_id] = req.body.name ;
    fs.writeFile('./id_data.json', JSON.stringify(data, null, 2));
  }

});


//----Ajax_post_search_data function----//
app.post("/ajax_data_search", function(req, res) {
  if ( data.hasOwnProperty(req.body.student_id) ) {
    res.send('Student ID ' + req.body.student_id + ' is owned by ' + data[req.body.student_id]);
  }
  else {
    res.send('Student ID '+req.body.student_id+" is not found.");
  }
});


//----let user know which port is using----//
app.listen(port, () => {
  console.log( `listening on port: ${port}` )
}


/*


//----GET method function----//

app.get('/get_data', function(req, res) {
  //console.log(req.query.Name)
  res.send(`<h1>Hello ${req.query.name}, your student ID is ${req.query.student_id}</h1>`);
});


//----POST method function----//
app.post('/post_data', function(req, res) {
  //console.log(req.query.Name)
  res.send(`<h1>Hello ${req.body.name}, your student ID is ${req.body.student_id}</h1>`);
});


*/

);
