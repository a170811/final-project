#!/usr/bin/env node

const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 10059;

var data_file = './data.json';
var data = require(data_file);

var encode = "utf8";
var page_num = 6;
var page_files[page_num] = {
  '../Home/index.html' 

};
var PageTxt[page_num] = {};

for ( int i=0, i<page_num, i++ ) {
  fs.readFile( page_files[i], encode, (err, PageTxt[i]){
    console.log( PageTxt[i] );
  });
};



//var test = 'E123456789';
//var test2 =  'data.'+test; 

//----read data.json file----//
//console.log('Test: \n' + data[test] + '\n' + data.B123456789 )



//----setup body-parser for POST method, otherwise POST won't work----//
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended:true
}));
app.use( express.json() );
app.use (express.urlencoded() );


//----let server.js know where the index.html is----//
app.use(express.static(__dirname + '/MAIN'));


//---- login function ----//
app.post("/login", function(req, res) {
  if ( data.hasOwnProperty(req.body.uesr) ) { 
    if ( data[req.body.user] == req.body.password ) {
      //---- send Home page to MAIN_Page #refresh ----//
      console.log( `correct password` );
    }
  }
  else {
    res.send( `${req.body.user} is not registed, please regist first` );
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

