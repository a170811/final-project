#!/usr/bin/env node

//-------- include the stuff we need into server --------//
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 10053;


///------------- Setup https connection ---------///
const options = 
{
    ca: fs.readFileSync('/home/uidd2018/ssl/ca_bundle.crt'),
    cert: fs.readFileSync('/home/uidd2018/ssl/certificate.crt'),
    key: fs.readFileSync('/home/uidd2018/ssl/private.key')
}
https.createServer(options, app).listen(port, () => console.log(`listen on port:`+ port));


///------------ load in User test data, can be removed -------//
const bodyParser = require('body-parser');
var data_file = './data.json';
var data = require(data_file);


/**************************************************
 *                                                *
 *      Start up Firebase for sending message     *
 *                                                *
 **************************************************/


///---------- Setup firebase admin inorder to send notification to user ---------///
var admin = require("firebase-admin");

var serviceAccount = require("./uidd2018-groupf-firebase-adminsdk-8cze1-83b0154802.json");

//console.log(serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uidd2018-groupf.firebaseio.com"
});


///------- Setup notification type and the text inside ------///
var payload = {
  notification: {
    title: "Lim Dea",
    body: "Gin lim Dea la, va tree da o"
  },
  data: {   ///---- able to sent the data to the app from background ----///
    account: "Savings",
    balance: "$3020.25"
  }
};


///---------- store registrationToken, for knowing where to send --------//
var registrationToken = null;

///------ Message option setup -------///
var messageOptions = {
  contentAvailable: true,
  mutableContent: true,
  timeToLive: 60*60*24
};


///------- send notification to the client -------//

setInterval(function() {
if(registrationToken != null) {
admin.messaging().send(payload)
  .then(function(response) {
      console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
      console.log("Error sending message:", error);
  });
}

}, 5000);


if(registrationToken != null) {
admin.messaging().send(payload)
  .then(function(response) {
      console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
      console.log("Error sending message:", error);
  });
}

///------ get regist token, and store it for later send messaging                         NOT YET!!!
app.post("/post_user_token", function(req, res) {
  console.log ( req.body.user_token );
  registrationToken = JSON.stringify( req.body.user_token );
  
  /*
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
  */

});









/****************************
 *                          *
 *      End of Firebase     *
 *                          *
 ****************************/

///------- Setup code type ------///
var encode = "utf8";


///----------- setup mySQL ----------------/// 
var mysql = require("mysql") ;
var database_info = require('./database.js') ;
var con = mysql.createConnection( database_info ) ;
con.connect(function(err){
    if (err) throw err ;
}) ;


//----  Page --> Number ----//
//      Home      = 0
//      Daily     = 1
//      Record    = 2
//      Flooding  = 3
//      Setup     = 4
//      About us  = 5
//      Login     = 6
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


//---------- load all the pages into server for jumping -------//
for ( var  i=0; i < page_num; i++ ) {
  PageTxt[i] = fs.readFileSync(txt_files[i], encode);
  PageCss[i] = fs.readFileSync(css_files[i], encode);
  if (i!=3 && i!=6){
    PageJs[i] = fs.readFileSync(js_files[i], encode);
  }
};


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
  res.send( packUp( req.body.call_page ) );
});


//---- package the content ----//
function packUp( chosen ) {
  var tmp;
  tmp = '<style>\n' + PageCss[chosen] + '</style>\n' + '<script>\n' + PageJs[chosen] + '</script>\n' + PageTxt[chosen];
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
    var this_month = req.body._this_month ;
    var today_date = this_month.split("-") ; //[year] [month] [date] [num_of_date]
    console.log(`ID:${_id} , name:${_name} login`) ;
    var sql = " SELECT * FROM data WHERE ID = " + _id ;
    con.query( sql , (err , result)=>{
        if (err) throw err ;
        if ( result.length > 0 ) { //registed
            
            sql = `SELECT water FROM daily_water WHERE ID=${_id} and year=${today_date[0]} and month=${today_date[1]}` ;
            con.query( sql , (err , result1)=>{ 
                if (err) throw err ;
                if ( result1[0]=="" ) { //new month ------> might error

                    var array = new Array( parseInt(today_date[3]) ).fill(0) ;
                    var input_string = array.join('-') ;
                    sql = `INSERT INTO daily_water ( ID , year , month , water ) VALUES ( ${_id} , ${today_date[0]} , ${today_date[1]} , '${input_string}' )` ;
                    con.query( sql , (err , result2)=>{
                        if (err) throw err ;
                        result[0].today = 0 ;
                        result[0].steal = 0 ;
                        res.send(JSON.stringify(result[0])) ;
                    }) ;
                    
                }
                else {
                    var array = result1[0].water.split('-') ;
                    result[0].today = parseInt(array[ parseInt(today_date[2])-1 ]) ;
                    res.send(JSON.stringify( result[0] )) ;
                }
            }) ;
        }
        else { //not registed
            var sql = `INSERT INTO data ( ID , name , total ) VALUES ( ${_id} , '${_name}' , 0 )` ;
            con.query( sql , (err , result)=>{
                if (err) throw err ;

                var array = new Array( parseInt(today_date[3]) ).fill(0) ;
                var input_string = array.join('-') ;
                sql = `INSERT INTO daily_water ( ID , year , month , water ) VALUES ( ${_id} , ${today_date[0]} , ${today_date[1]} , '${input_string}' )` ;
                con.query( sql , (err , result2)=>{
                    if (err) throw err ;
                }) ;

                sql = " SELECT * FROM data WHERE ID = " + _id ;
                con.query( sql , (err , result)=>{
                    if (err) throw err ;
                    result[0].today = 0 ;
                    res.send(JSON.stringify(result[0])) ;
                });
            }) ;
        }
    }) ;

}) ; 

app.post( "/save_target_water" , (req , res)=>{
    var _id = req.body._id ;
    var water = req.body._target_water ;
    var lasting_time = req.body._lasting_time ;
    var total_target = water*lasting_time ;
    var sql = `UPDATE data SET target=${water} , lasting_time=${lasting_time} , total_target=${total_target} WHERE ID = ${_id} ` ;
    con.query( sql , (err , result )=>{
        if (err) throw err ;
        res.send("success") ;
    }) ;
}) ;

app.post( "/drinking_water" , (req , res)=>{
    var _id = req.body._id ;
    var drinking_water = req.body._drinking_water ;
    var total_water = req.body._total_water ;
    var this_month = req.body._this_month ;
    var today_date = this_month.split("-") ; //[year] [month] [date] [num_of_date]
    var sql = `SELECT water From daily_water WHERE ID = ${_id} and year = ${today_date[0]} and month = ${today_date[1]}` ;
    con.query( sql , (err,result)=>{
        if (err) throw err ;

        sql = `UPDATE data SET total = ${total_water} WHERE ID = ${_id}` ;
        con.query( sql , (err , result1)=>{
            if(err) throw err ;

            var str_tmp = result[0].water ; 
            var array = str_tmp.split('-') ;
            array[ parseInt(today_date[2])-1 ] = drinking_water ;
            var input_string = array.join('-') ;
            sql = `UPDATE daily_water SET water = '${input_string}' WHERE ID = ${_id} and year = ${today_date[0]} and month = ${today_date[1]}` ;
            con.query( sql , (err , result)=>{
                if(err) throw err ;
                res.send('success') ;
            } ) ;

        }) ;
    }) ;
}) ;

app.post("/month_water" , (req , res)=>{
    
    var _id = req.body._id ;
    var this_month = req.body._this_month ;
    var today_date = this_month.split('-') ;
    var sql = `SELECT * FROM daily_water WHERE ID=${_id} and year=${today_date[0]} and month=${today_date[1]}` ;
        con.query( sql , (err,result)=>{
            if(err) throw err ;
            if( result.length>0 ) {
                var ret = result[0].water.split('-').map((item)=>{
                    return parseInt(item) ;
                }) ;
                res.send( ret ) ;
            }
            else {
                res.send( "" ) ;
            }
        }) ;
}) ;

app.post("/notification_time" , (req , res)=>{
    
    var _id = req.body._id ;
    var notification_time = req.body._notification_time ;
    var sql = `UPDATE data SET notification_time = ${notification_time} WHERE ID=${_id}` ;
    con.query( sql , ( err, result )=>{
        if (err) throw err ;
        res.send( result.affectedRows + " record(s) updated" ) ;
    } ) ;

} ) ;

app.post("/get_total_water" , (req , res)=>{

    var id_string = req.body._target ;
    var ret_array = [] ;
    var sql = `SELECT total FROM data WHERE ID IN ( ${id_string} )` ;
    con.query( sql , (err , result)=>{
        if(err) throw err ;
        result.map( (x)=>{
            ret_array.push( x.total ) ;    
        } ) ;
        res.send( ret_array ) ;
    }) ;
} );
