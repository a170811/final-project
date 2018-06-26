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
            document.getElementById("hellouser").innerHTML='<img class="prop" src="https://graph.facebook.com/' + response.id + '/picture?type=large">'+username+'您好<button id="logout" type="button" onclick="logout()">登出</button>';
          });
        }
        else{
          username="guest";
          document.getElementById("hellouser").innerHTML="親愛的"+username+'您好<button id="logout" type="button" onclick="guestlogout()">登出</button>';
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

