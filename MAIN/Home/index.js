$(document).on('touchstart mousedown', ".JUMP", function() {
    //event.preventDefault();
        
    var pageNum = parseInt(this.dataset.pageadd);
    if( pageNum == 1){  //daily
      $(this).find(".front").css({"bottom": "-1vh","left": "1.5vw"});
    }
    else if( pageNum == 2){ //Record
      $(this).find(".front").css({"bottom": "-0.8vh","left": "auto", "right": "-1vw"});
    }
    else if( pageNum == 3){ //Flooding
      $(this).find(".front").css({"bottom": "-0.95vh","left": "auto", "right": "-1vw"});
    }
      //$(this).find(".front").css({"bottom": "1","left": "0"});
    //$(this).find(".front").addClass("");
    
});
$(document).on('touchend mouseup', ".JUMP", function() {
    event.preventDefault();
    
    var pageNum = parseInt(this.dataset.pageadd);
    if( pageNum == 1){  //daily
      $(this).find(".front").css({"bottom": "0px","left": "0px"});
    }
    else if( pageNum == 2){ //Record
      $(this).find(".front").css({"bottom": "0px","left": "auto", "right": "0"});
    }
    else if( pageNum == 3){ //Flooding
      $(this).find(".front").css({"bottom": "0px","left": "auto", "right": "0px"});
    }
    
    //$(this).find(".front").css({"bottom": "0px","left": "0px"});
    //console.log(this);
});

$(document).ready(function(){
    if( Account_data.target == 0 ) {
        $('#setting_board').animate( { left : '0' } , 200) ;
    }
    var target = $("#setting_board input[name='target']") ;
    var lasting_time = $("#setting_board input[name='lasting_time']") ;
    $("#send_target").click((e)=>{
        e.preventDefault() ;
        if( target.val()!=0 && lasting_time.val()!=0 ) {
            target_water( target.val() , lasting_time.val() ) ;    
            $('#setting_board').animate( { bottom : '100vh' } , 200) ;
        }
    }) ;

}) ;
function steal(stealwho){
  steal_water( stealwho , ()=>{
    showfriend();
  } )
}
function showfriend(){
	var username;
	var temp="";
  document.getElementById("friendboard").style.visibility = 'visible' ;
		if (guestnum == 1){
        FB.api('/me?fields=friends,name,email,picture', function(response){
        username=(response.name);
        var frinum = (response.friends.data.length);
        var friendid = new Array(frinum);
		//temp+="<br><div>"+'<img src="https://graph.facebook.com/' + response.id + '/picture">'+ username+friendwater[i]+'<div id="friwater'+i+'" class="friwater" style="width:'+friendwater[i]/2000*60+'vw;"></div></div>';
        for(j=0;j<frinum;j++){
              friendid[j] = response.friends.data[j].id;
            }
            get_total_water(friendid, (data)=>{
				var friendwater =  data;
				for(i=0;i<frinum;i++){
					temp+="<br><div>"+'<img src="https://graph.facebook.com/' + response.friends.data[i].id + '/picture">'+ (response.friends.data[i].name)+friendwater[i]+'<div id="friwater'+i+'" class="friwater" style="width:'+friendwater[i]/2000*60+'vw;"></div><button type="button" onclick="steal('+friendid[i]+')">偷水</button></div>';
					document.getElementById("friendlist").innerHTML=temp;
				}
            })
          });
        }
        else{
          document.getElementById("friendlist").innerHTML='guest沒朋友啦 去登入FB<button id="logout" type="button" onclick="guestlogout()">用FB登入</button>';
        }
}
function closefriend(){
  document.getElementById('friendboard').style.visibility = 'hidden' ;	
}
