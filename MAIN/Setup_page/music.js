var vol;
function moveFunction(){
	vol=document.getElementById("volrange").value/100;
	document.getElementById("music").volume=vol; 
}

document.getElementById("volrange").onmouseup=function(){
	vol=document.getElementById("volrange").value/100;
	document.getElementById("music").volume=vol; 
}
document.getElementById("volrange").ontouchend=function(){
	vol=document.getElementById("volrange").value/100;
	document.getElementById("music").volume=vol; 
}
var username;
var temp="";
   // FB.Event.subscribe('auth.authResponseChange', function(response){
        if (guestnum == 1){
          FB.api('/me?fields=friends,name,email,picture', function(response){
            username=(response.name);
            console.log(response.name);//name
            document.getElementById("hellouser").innerHTML="親愛的"+username+'您好<button id="logout" type="button" onclick="logout()">登出</button>';
            var frinum = (response.friends.data.length);
            for(i=0;i<frinum;i++){
              var friendid= response.friends.data[i].id;
              temp+="<br><div>"+ (response.friends.data[i].name)+'<div id="friwater'+i+'" class="friwater" style="width:'+1000/2000*60+'vw;"></div><button type="button" onclick="steal('+friendid+')">偷水</button></div>';
            }
            document.getElementById("friendlist").innerHTML=temp;
          });
        }
        else{
          username="guest";
            document.getElementById("hellouser").innerHTML="親愛的"+username+'您好<button id="logout" type="button" onclick="guestlogout()">登出</button>';
        }
     //     });
$(document).ready(function(){
  $("#reminder button").click(function(e){
      e.preventDefault();
      $.ajax({
        method: "post",
        url:"../../reminder_post",
        data:{
          time:$("#reminder input[name='rem_time']").val(),
        },
        success:function(data){
          $("#success").text(data);
        }
      })
  })
})

