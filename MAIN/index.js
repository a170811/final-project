var ready_flag = 0;
var Account_data ;
//Account_data (ID , name , target , today , total , notification_time , lasting_time , 
// total_target , steal_cd )

//---- start the function when web start ----//

var messaging = null; // later use in firebase message

$(document).ready(function () {



/******************************
 *                            *
 *      Login Animation       *
 *                            *
 ******************************/
  
  $("#Login_block").animate({
        top: '54vh',
        opacity: '1'
      }, 1000);
      $("#Login_block").prop("disabled",false);
      $("#Icon").animate({
        top: '-5.5vh',
        opacity: '1'
      }, 1000);
      $("#Word").animate({
        top: '-10.5vh',
        opacity: '0'
      }, 1000);
      $("#loginbutton").animate({
        top: '-3vh'
      },1500);
});


$(document).on('touchend click', ".JUMP", function() {
    event.preventDefault();
    var pageNum = parseInt(this.dataset.pageadd);
    JumpPage(pageNum);
});





function checkOnLine(){   
    if (typeof(navigator.onLine)!="undefined"){
      setTimeout(() => checkHandler(), 1000)
         
    }else{   
        $("#refresh").text("你的瀏覽器不支援偵測是否online");   
    }   
} 



function checkHandler(){   
    var status=navigator.onLine;   
    if(status){   
      //$("#refresh").text("online");   
      ready_flag = 1;
      JumpPage(0);
      console.log("imin");


      
    }else{   
      //$("#refresh").text("offline");
      $("#refresh").append($("<div></div>").css({"position": "fixed", "top": "39vh", "left": "15vw", "width": "70vw","height":"16vh", "textAlign": "center", "background-color": "black", "opacity": "0.6", "border-radius": "5vw" }).hide().fadeIn(600));
      $("#refresh").append($("<p></p>").text("Please connect to Internet").css({"position": "fixed", "top": "40vh", "left": "15vw", "width": "70vw","font-size": "4vh", "font-weight": "bold", "color": "white", "textAlign": "center", "opacity": "0"}).animate({opacity: '1'}, 1000)); 
    }   
}


function JumpPage(pageNum) {
  var success=0;
  var online = navigator.onLine;
  var url = chooseUrl(pageNum, online);
  var method = chooseMethod(online);
  var data = chooseData(pageNum, online);
  console.log(data);
  //if(navigator.online) {
  
  $.ajax({
    method: method,
    //data: data, 
    data: {
      call_page: pageNum
      //call_page: $(this).getAttribute("data-page-add").val()
    },
//    data,
    //url: '/jump_to',
    url: url,
    success: function(data) {
      success = 1;
      $("#UNIQUE").clearQueue();
      //$("#prevIcon").clearQueue();
      $("#UNIQUE").animate({
        opacity: '0'
      }, 500);
      $("#UNIQUE").queue(function() {
      $("#prevIcon").fadeOut(500);
        $("#UNIQUE").html(data);
        $(this).dequeue();
      });
      $("#UNIQUE").queue(function() {
        $("#prevIcon").removeClass("hideGoHome");
        $("#prevIcon").removeClass("showGoHome");
        $("#prevIcon").removeClass("showGoHome2");
        if ( pageNum==2 ) {
          $("#prevIcon").addClass("showGoHome2");
        }
        else if( pageNum!=0 && pageNum!=1 && pageNum!=5 ) {
          $("#prevIcon").addClass("showGoHome");
        }
        else {
          $("#prevIcon").addClass("hideGoHome");
        }
        $("#UNIQUE").animate({
          opacity: '1'
        }, 500);
        $("#prevIcon").fadeIn(500);
        $("#UNIQUE").dequeue();
      });
        
      $("#cover").removeClass("cover");
      $("#PS").text('');
    }
  });
  setTimeout(() => {
    if( !success ) {
      $("#cover").addClass("cover");
      $("#PS").text('Loading...');
    }
  }, 500);
}
function chooseData(pageNum, online) {
  if(online)
    return `'call_page': '${pageNum}'`;
    //return `data:{call_page:${pageNum}}`;
  else
    return '';
}
function chooseMethod(online) {
  if(online)
    return 'POST';
  else
    return 'GET';
}
function chooseUrl(pageNum, online) {
      if(online) {
         return '/jump_to';
      }
      else{
        if(pageNum == 0)
           return '/Home/pageHTML.txt';
        else if(pageNum == 1)
           return '/Daily_page/pageHTML.txt';
        else if(pageNum == 2)
           return '/Record_page/pageHTML.txt';
        else if(pageNum == 3)
           return '/Flodding_page/pageHTML.txt';
        else if(pageNum == 4)
           return '/Setup_page/pageHTML.txt';
        else if(pageNum == 5)
           return '/Aboutus/pageHTML.txt';
        else if(pageNum == 6)
           return '/pageHTML.txt';
        else
           return '//pageHTML.txt';
      }
}



//FB
var guestnum=1;
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
	
	if(response.status === 'connected'){
		console.log('connected');
	}
	else{
		console.log('user not authorized');
	}
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}
  
window.fbAsyncInit = function() {
  FB.init({
    appId: '171183780224399',
	cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
  
 // FB.getLoginStatus(function(response) {
 //     statusChangeCallback(response);
 //   });
	
FB.Event.subscribe('auth.authResponseChange', function(response){
    if (response.status === 'connected'){
        JumpPage(0);

        console.log('authResponse changed to connected');
        console.log(response.authResponse.accessToken); 
        console.log(response.authResponse.userID);//id
        var id = response.authResponse.userID;
        //console.log(response.authReaponse.use)
        FB.api('/me', function(response){
/*
			var testing = function(id) {
				return new Promise(function(resolve , reject){
            		account_data( id , response.name ) ;
					resolve(Account_data) ;
				}) ;
			}
			testing(id).then(function(value){
				//target_water(100) ;
				console.log(value) ;
			}).then( function(value) {
					console.log(Account_data.ID) ;
					console.log(Account_data.name);//name
					console.log(Account_data.target) ;
					console(value) ;
				}
			)
*/

            account_data( id , response.name ) ;
            /*
            account_data( id , response.name , ()=>{
                steal_water( 1203611163114575 , ()=>{
                    console.log(`my water now = ${Account_data.total}`) ;
                } ) ;
            }) ;
            */
            /*
            var id_array = [ 12345 , 67890 ] ;
            account_data( id , response.name , ()=>{  //這個是account_data的callback,可給可不給
                get_total_water( id_array , (data)=>{ //這個是get_total_water的callback 回傳值在data裡
                    console.log("testing here:") ;
                    console.log(data) ;
                } ) ;
            }) ;
            good() ;
            function good() {
                setTimeout( function(){ 
					console.log(Account_data) ;
				} , 3000) ;
            }
            */
        });
       
        FB.api('/me?fields=friends,name,email,picture', function(response){
           // console.log("名字:"+response.friends.data[0].name);
            //console.log("這是大頭貼:https://graph.facebook.com/"+response.id+"/picture?type=large"); 
            console.log(response.friends.data[0]);
           // console.log(response.friends.Array);
            //console.log(response.friends.data.length);
            }
        );
      

        //window.top.location = 'Home/';
    }
});

	
	
  //get friends
  /*FB.api('/me/friends?limit=99',function(response){
	var result_holder = document.getElementById('friend_list');
	var friend_data = response.data.sort(sortMethod);
	var results = '';
	for(var i = 0; i< friend_data.length; i++){
		result += '<div><img src="https://graph.facebook.com/' + friend_data[i].id + '/picture">' +'</div';
	}
	
	//display friends
	result_holder.innerHTML = results;
	});*/
};

function logout(){
  FB.logout(function(response) {
    window.top.location = '';
  });
}
function guestlogout(){
  window.top.location='';
}
function guest(){
  JumpPage(0);
  guestnum=0;
}

function login() {
	FB.login(function(response) {
        // handle the response
        statusChangeCallback(response);
        document.getElementById('music').play();
        document.getElementById('music').loop = true;
        //console.log(response.authReaponse.use)
        console.log("Response goes here!");
        if (response.authResponse) {
             //同意授權並且登入執行這段
        }
        else { 
            alert("須同意應用程式才能進入此頁面");//不同意此應用程式
        }
	}, {scope: ['email','user_friends']});            
}

//================================database=================================

//save account data
function account_data( _id , _name , func ) {

    $.post( "save_account_data" , {
        _id : _id , 
        _name : _name ,
        _this_month : date_string() 
        } , (data , status)=>{
            Account_data = JSON.parse(data) ;
            console.log("login "+status) ;
            console.log( data ) ;
            if (typeof func == 'function')
                func() ;
        }
    ) ;
}

function target_water( _target , _lasting_time ,  func ) {
    Account_data.target = _target ;
    $.post( "save_target_water" , {
        _id : Account_data.ID , 
        _target_water : _target ,
        _lasting_time : _lasting_time 
        } , (data,status)=>{
            console.log(data) ;
            if (typeof func == 'function')
                func() ;
        }
    ) ;
}

function drinking_water( _amount ,func ) {
	Account_data.today += _amount ;
    Account_data.total += _amount ;

	$.post( "drinking_water" , {
		_id : Account_data.ID , 
		_drinking_water : Account_data.today ,
        _total_water : Account_data.total , 
        _this_month : date_string() 
	}, (data,status)=>{
        console.log(data) ;
        if (typeof func == 'function')
            func() ;
        }
    ) ;
    /*testing
    month_water( (data)=>{
        alert( data ) ;
    }) ;
    */
}

function month_water( year , month , func ) { //if data not exist , data = "
    
	$.post( "month_water" , {
		_id : Account_data.ID , 
        _this_month : date_string(year , month) 
	}, (data,status)=>{
        console.log(data) ;
        if (typeof func == 'function')
            func( data ) ;
        }
    ) ;

}

function set_notification_time( value , func ) {

    Account_data.notification_time = value ;
    $.post( "notification_time" , {
        _id : Account_data.ID , 
        _notification_time : value 
    } , ( data , status )=>{
        if (typeof func =='function') {
            func() ;
        }
    } ) ;
}

function get_total_water( target_id , func ) {
    var id_string = target_id.join(',') ;
    $.post( "get_total_water" , {
        _target : id_string 
    } , ( data , status )=>{
        if (typeof func =='function') {
            func( data ) ;
        }
    }) ;
}

function steal_water( target_id , func ) {
    Account_data.steal_cd = 1 ;
    $.post('steal_water' , {
        _my_id : Account_data.ID , 
        _target_id : target_id  , 
        _amount : Account_data.today*0.1 , 
        _my_total : Account_data.total 
    } , (data , status)=>{
        Account_data.total = data.id1[1] ;
        //console.log( data.id1 ) ;
        //console.log( data.id2 ) ;
        if (typeof func =='function') {
            func( ) ;
        }
    }) ;
}

function date_string( a = 0 , b = 0 ) {
    if (a==0||b==0) { //today's year-month-date-num_of_days
        var d = new Date() ;
        var thisMonth = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-` ;
        d = new Date( d.getFullYear() , d.getMonth()+1 , 0 ) ;
        thisMonth += d.getDate() ;
        return thisMonth ;
    }
    else {
        var thisMonth = `${a}-${b}` ;
        return thisMonth ;
    }
}

