#!/usr/bin/env node

const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 10059;

const options = 
{
    ca: fs.readFileSync('/home/uidd2018/ssl/ca_bundle.crt'),
    cert: fs.readFileSync('/home/uidd2018/ssl/certificate.crt'),
    key: fs.readFileSync('/home/uidd2018/ssl/private.key')
}
https.createServer(options, app).listen(port, () => console.log(`listen on port:`+ port));
const bodyParser = require('body-parser');
var data_file = './data.json';
var data = require(data_file);

var encode = "utf8";

var mysql = require("mysql") ;
var con = mysql.createConnection({
    host : 'localhost' ,
    user : 'uidd2018_groupF' ,
    password : 'group_f@uidd2018' ,
    database : 'uidd2018_groupF'
}) ;
con.connect(function(err){
    if (err) throw err ;
}) ;


//---- Page --> Number ----//
//    Home      = 0
//    Daily     = 1
//    Record    = 2
//    Flooding  = 3
//    Setup     = 4
//    About us  = 5
//    Login     = 6
//

var page_num = 7;


//---- html files ----//
var txt_files = [
  './MAIN/Home/pageHTML.txt', 
  './MAIN/Daily_page/pageHTML.txt',
  './MAIN/Record_page/pageHTML.txt',
  './MAIN/Flooding_page/pageHTML.txt',
  './MAIN/Setup_page/pageHTML.txt',
  './MAIN/Aboutus/pageHTML.txt',
  './MAIN/pageHTML.txt'

];
var PageTxt = [page_num];


//---- css files ----//
var css_files = [
  './MAIN/Home/index.css' ,
  './MAIN/Daily_page/index.css',
  './MAIN/Record_page/index.css',
  './MAIN/Flooding_page/index.css',
  './MAIN/Setup_page/index.css',
  './MAIN/Aboutus/index.css',
  './MAIN/index.css'

];
var PageCss = [page_num];



//---- js files ----//
var js_files = [
  './MAIN/Home/index.js',
  './MAIN/Daily_page/myscript.js',
  './MAIN/Record_page/calendar.js',
  './MAIN/Flooding_page/index.js',
  './MAIN/Setup_page/music.js',
  './MAIN/Aboutus/index.js',
  './MAIN/index.js'

];
var PageJs = [page_num];



for ( var  i=0; i < page_num; i++ ) {
  PageTxt[i] = fs.readFileSync(txt_files[i], encode);
  PageCss[i] = fs.readFileSync(css_files[i], encode);
  //if (i!=0 && i!=3 && i!=4 && i!=6){
  if (i!=3 && i!=6){
    PageJs[i] = fs.readFileSync(js_files[i], encode);
  }
  /*
  //---- read html ----//
  fs.readFile( txt_files[i], encode, (err, data) => {

    PageTxt[i] = data;
    console.log(PageTxt.length);
    //console.log( PageTxt[i] );
    //console.log( "--------------------------" );
    //console.log( data );
  });

  //---- read css ----//
  fs.readFile( css_files[i], encode, (err, data) => {
    PageCss[i] = data;
    //console.log( PageCss[i] );
    //console.log( data );
  });

  //---- read js ----//
  if ( i != 6 ) {
    
    fs.readFile( js_files[i], encode, (err, data) => {
      PageJs[i] = data;
      //console.log( PageJs[i] );
      //console.log( data );
    });
  }
  */

};
//for (var i=0; i<7; i++)
//console.log( PageTxt[0] );

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
  // console.log ( data.hasOwnProperty('admin') );
  if ( data.hasOwnProperty(req.body.user) ) { 
    //console.log ( req.body.password);
    if ( data[req.body.user] == req.body.password ) {
      //---- send Home page to MAIN_Page #refresh ----//
      console.log( `correct password` );
      res.send( packUp( 0 ) );
      //console.log ( packUp( 0 ) );
      //console.log( PageTxt[0] );
    }
  }
  else {
    res.send( `${req.body.user} is not registed, please regist first` );
  }

});


//----jump_to function: use to jump between the pages----//
app.post("/jump_to", function(req, res) {
  //console.log( `JUMP` );
  res.send( packUp( req.body.call_page ) );




  /*
  if ( data.hasOwnProperty(req.body.student_id) ) {
    res.send('Student ID ' + req.body.student_id + ' is owned by ' + data[req.body.student_id]);
  }
  else {
    res.send('Student ID '+req.body.student_id+" is not found.");
  }
  */
});


//---- package the content ----//
function packUp( chosen ) {
  var tmp;
  tmp = '<style>\n' + PageCss[chosen] + '</style>\n' + '<script>\n' + PageJs[chosen] + '</script>\n' + PageTxt[chosen];
  //tmp = '<style>\n #Login {opacity: 0;}  #refresh { opacity: 0.5; background-color: black;}\n' + PageCss[chosen] + '</style>\n' + '<script>\n $("#Login_block :input").prop("disabled",true);\n ' + PageJs[chosen] + '</script>\n' + PageTxt[chosen];
  
  return tmp;
}


//----let user know which port is using----//
/*app.listen(port, () => {
  console.log( `listening on port: ${port}` )
});*/


//Setup Reminder
const urlencodedParser=bodyParser.urlencoded({extended:true});
app.post('/reminder_post',urlencodedParser,function(req,res){
    res.send(`Hello`+req.body.time);
})

//--------------save login data------------------//
app.post( "/save_account_data" ,( req , res )=>{
    var _id = req.body._id ;
    var _name = req.body._name ;
    console.log(`ID:${_id} , name:${_name}`) ;
    var sql = " SELECT * FROM data WHERE ID = " + _id ;
    con.query( sql , (err , result)=>{
        if (err) throw err ;
        if ( result.length > 0 ) {
            res.send(JSON.stringify(result[0])) ;
        }
        else {
            var sql = `INSERT INTO data ( ID , name , target , today ) VALUES ( ${_id} , '${_name}' , 0 , 0 )` ;
            con.query( sql , (err , result)=>{
                if (err) throw err ;
                res.send(JSON.stringify(result[0])) ;
            }) ;
        }
    }) ;

}) ; 

app.post( "/save_target_water" , (req , res)=>{
    var water = req.body._target_water ;
    var sql = "UPDATE data SET target = ''"
}) ;
/*
app.post("/getdata" , (reg , res)=>{

}) ;
*/
