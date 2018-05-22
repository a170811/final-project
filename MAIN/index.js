var ready_flag = 0;





//---- start the function when web start ----//
$(document).ready(function () {
  //$("#Login_block").hide();
  //$("#Login_block :input").attr('disabled','disabled');;
  $("#Login_block :input").prop("disabled",true);
  checkOnLine(); 
      
  $('#Login button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        user: $('#ajax_form input[name=user]').val(),
        password: $('#ajax_form input[name=password]').val()
      },
      url: '/login',
      success: function(data) {
        $("#refresh").html(data);
      }
    });
    $("#refresh").append($("<div></div>")).addClass("cover");
    $("#PS").text('Loading...');
  });

  $('#ajax_search button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        student_id: $('#ajax_search input[name=student_id]').val()
      },
      url: '/ajax_data_search',
      success: function(data) {
        $('#ajax_output').html(data);
      }
    });
    $('#ajax_output').html('loading...');
  });
});



function checkOnLine(){   
    if (typeof(navigator.onLine)!="undefined"){
      setTimeout(() => checkHandler(), 3000)
         
    }else{   
        $("#refresh").text("你的瀏覽器不支援偵測是否online");   
    }   
}   
function checkHandler(){   
    var status=navigator.onLine;   
    if(status){   
      //$("#refresh").text("online");   
      ready_flag = 1;
      //$("#Login_block").hide().fadeIn(400);
      $("#Login_block").animate({
        top: '54vh',
        opacity: '1'
      }, 1000);
      $("#Login_block :input").prop("disabled",false);
      $("#Icon").animate({
        top: '-5.5vh',
        opacity: '1'
      }, 1000);
      $("#Word").animate({
        top: '-10.5vh',
        opacity: '0'
      }, 1000);
    }else{   
      //$("#refresh").text("offline");
      $("#refresh").append($("<div></div>").css({"position": "fixed", "top": "39vh", "left": "15vw", "width": "70vw","height":"16vh", "textAlign": "center", "background-color": "black", "opacity": "0.6", "border-radius": "5vw" }).hide().fadeIn(600));
      $("#refresh").append($("<p></p>").text("Please connect to Internet").css({"position": "fixed", "top": "40vh", "left": "15vw", "width": "70vw","font-size": "4vh", "font-weight": "bold", "color": "white", "textAlign": "center", "opacity": "0"}).animate({opacity: '1'}, 1000));
        
    }   
}

