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
        if (guestnum == 1){
          FB.api('/me?fields=friends,name,email,picture', function(response){
            username=(response.name);
            console.log(response.name);//name
            document.getElementById("hellouser").innerHTML='';
            document.getElementById("hellouser").innerHTML=`<img class="prop" src="https://graph.facebook.com/${response.id}/picture?type=large"><span>${username} 您好</span>`;
            document.getElementById("logoutword").onclick=function(){logout();};
          });
        }
        else{
          username="guest";
          document.getElementById("hellouser").innerHTML="親愛的"+username+'您好'; 
          document.getElementById("logoutword").onclick=function(){guestlogout();};
        }
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

