#!/usr/bin/env node

const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 10056;

var data_file = './id_data.json';
var data = require(data_file);
var test = 'E123456789';
var test2 =  'data.'+test; 




//----database test----//
//----connect to database----//
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "uidd2018_groupF",
  password: "group_f@uidd2018"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



//----setup body-parser for POST method, otherwise POST won't work----//
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended:true
}));
app.use( express.json() );
app.use (express.urlencoded() );


//----let server.js know where the index.html is----//
app.use(express.static(__dirname + '/public'));

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
});
