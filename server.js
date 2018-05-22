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


//---- Page --> Number ----//
//    Home      = 0
//    Daily     = 1
//    Record    = 2
//    Flooding  = 3
//    Setup     = 4
//    About us  = 5
//

var page_num = 1;


//---- html files ----//
var txt_files = [
  './MAIN/Home/pageHTML.txt' 

];
var PageTxt = [page_num];


//---- css files ----//
var css_files = [
  './MAIN/Home/index.css' 

];
var PageCss = [page_num];



//---- js files ----//
var js_files = [
  './MAIN/Home/index.js' 

];
var PageJs = [page_num];



for ( var  i=0; i < page_num; i++ ) {

  //---- read html ----//
  fs.readFile( txt_files[i], encode, (err, data) => {
    PageTxt[i] = data;
    //console.log( PageTxt[i] );
    //console.log( PageTxt[i] );
  });

  //---- read css ----//
  fs.readFile( css_files[i], encode, (err, data) => {
    PageCss[i] = data;
    //console.log( PageCss[i] );
    //console.log( data );
  });

  //---- read js ----//
  fs.readFile( js_files[i], encode, (err, data) => {
    PageJs[i] = data;
    //console.log( PageJs[i] );
    //console.log( data );
  });

};


//----read data.json file----//
//console.log('Test: \n' + data['admin'] )

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
  //console.log ( data.hasOwnProperty('admin') );
  if ( data.hasOwnProperty(req.body.user) ) { 
    //console.log ( req.body.password);
    if ( data[req.body.user] == req.body.password ) {
      //---- send Home page to MAIN_Page #refresh ----//
      console.log( `correct password` );
      res.send( packUp( 1 ) );
      //console.log ( packUp( 1 ) );
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


//---- package the content ----//
function packUp( chosen ) {
  var tmp;
  tmp = '<style>\n' + PageCss[chosen] + '</style>\n' + '<script>\n' + PageJs[chosen] + '</script>\n' + PageTxt[chosen];
  //tmp = '<style>\n #Login {opacity: 0;}  #refresh { opacity: 0.5; background-color: black;}\n' + PageCss[chosen] + '</style>\n' + '<script>\n $("#Login_block :input").prop("disabled",true);\n ' + PageJs[chosen] + '</script>\n' + PageTxt[chosen];
  
  return tmp;
}


//----let user know which port is using----//
app.listen(port, () => {
  console.log( `listening on port: ${port}` )
});

