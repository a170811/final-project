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
            var friendid = new Array(frinum);
            for(j=0;j<frinum;j++){
              friendid[j] = response.friends.data[j].id;
            }
            get_total_water(friendid, (data)=>{
              var friendwater =  data;
             
             for(i=0;i<frinum;i++){  
                temp+="<br><div>"+'<img src="https://graph.facebook.com/' + response.friends.data[i].id + '/picture">'+ (response.friends.data[i].name)+friendwater[i]+'<div id="friwater'+i+'" class="friwater" style="width:'+friendwater[i]/2000*60+'vw;"></div><button type="button" onclick="steal('+friendid+')">偷水</button></div>';
                document.getElementById("friendlist").innerHTML=temp;
             }
            })
          });
        }
        else{
          username="guest";
          document.getElementById("hellouser").innerHTML="親愛的"+username+'您好<button id="logout" type="button" onclick="guestlogout()">登出</button>';
          document.getElementById("friendlist").innerHTML='guest沒朋友啦 去登入FB<button id="logout" type="button" onclick="guestlogout()">用FB登入</button>';
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

