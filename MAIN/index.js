var ready_flag = 0;





//---- start the function when web start ----//
$(document).ready(function () {

  //--------- LOGIN Function ---------//
    //$("#Login_block").hide();
    //$("#Login_block :input").attr('disabled','disabled');;
  $("#Login_block :input").prop("disabled",true);
  $("#prevIcon").addClass("hideGoHome");
  checkOnLine(); 
      
  $('#Login button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        user: $('#Login input[name=user]').val(),
        password: $('#Login input[name=password]').val()
      },
      url: '/login',
      success: function(data) {
        $("#UNIQUE").html(data);
        $("#cover").removeClass("cover");
        $("#PS").text('');
      }
    });
    $("#cover").addClass("cover");
    $("#PS").text('Loading...');
  });

  //-------- JUMP Function --------//
  /*
  $(".JUMP").click(function() {//all class in html
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        //call_page: $('.JUMP').getAttribute("data-page-add").val()
        call_page:parseInt(this.dataset.page-add)
      },
      url: '/jump_to',
      success: function(data) {
        $('body').html(data);
      }
    });
    $("body").append($("<div></div>")).addClass("cover");
    $("body").append($("<h1></h1>")).addClass("PS").text('Loading...');
  });
  */
});


$(document).on('touchend click', ".JUMP", function() {
    event.preventDefault();
    var pageNum = parseInt(this.dataset.pageadd);
    JumpPage(pageNum);
    /*
    $.ajax({
      method: "POST",
      data: {
        //call_page: $(this).getAttribute("data-page-add").val()
        call_page:parseInt(this.dataset.pageadd)
      },
      url: '/jump_to',
      success: function(data) {
        $("#UNIQUE").html(data);
        $("#cover").removeClass("cover");
        $("#PS").text('');
        if( pageNum!=0 && pageNum!=5 ) {
          $("#prevIcon").removeClass("hideGoHome");
          $("#prevIcon").addClass("showGoHome");
        }
        else {
          $("#prevIcon").removeClass("showGoHome");
          $("#prevIcon").addClass("hideGoHome");
        }
        //$('body').html(data);
      }
    });
    $("#cover").addClass("cover");
    $("#PS").text('Loading...');
    */
    //$("body").append($("<div></div>")).addClass("cover");
    //$("body").append($("<h1></h1>")).addClass("PS").text('Loading...');
    //alert( "hi" );

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


      /*
      var pageNum = 0;
      $.ajax({
      method: "POST",
      data: {
        //call_page: $(this).getAttribute("data-page-add").val()
        call_page:0
      },
      url: '/jump_to',
      success: function(data) {
        $("#UNIQUE").html(data);
        $("#cover").removeClass("cover");
        $("#PS").text('');
        if( pageNum!=0 && pageNum!=5 ) {
          $("#prevIcon").removeClass("hideGoHome");
          $("#prevIcon").addClass("showGoHome");
        }
        else {
          $("#prevIcon").removeClass("showGoHome");
          $("#prevIcon").addClass("hideGoHome");
        }
        //$('body').html(data);
      }
      $("#cover").addClass("cover");
      $("#PS").text('Loading...');

      */
    }else{   
      //$("#refresh").text("offline");
      $("#refresh").append($("<div></div>").css({"position": "fixed", "top": "39vh", "left": "15vw", "width": "70vw","height":"16vh", "textAlign": "center", "background-color": "black", "opacity": "0.6", "border-radius": "5vw" }).hide().fadeIn(600));
      $("#refresh").append($("<p></p>").text("Please connect to Internet").css({"position": "fixed", "top": "40vh", "left": "15vw", "width": "70vw","font-size": "4vh", "font-weight": "bold", "color": "white", "textAlign": "center", "opacity": "0"}).animate({opacity: '1'}, 1000)); 
    }   
}


function JumpPage(pageNum) {
  var success=0;
  $.ajax({
    method: "POST",
    data: {
      //call_page: $(this).getAttribute("data-page-add").val()
      call_page:pageNum
    },
    url: '/jump_to',
    success: function(data) {
      success = 1;
      $("#UNIQUE").animate({
        opacity: '0'
      }, 1000);
      $("#prevIcon").fadeOut(1000);
      $("#UNIQUE").queue(function() {
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
        else if( pageNum!=0 && pageNum!=5 ) {
          $("#prevIcon").addClass("showGoHome");
        }
        else {
          $("#prevIcon").addClass("hideGoHome");
        }
        $("#UNIQUE").animate({
          opacity: '1'
        }, 1000);
        $("#prevIcon").fadeIn(1000);
        $("#UNIQUE").dequeue();
      });
        
      $("#cover").removeClass("cover");
      $("#PS").text('');
        
        
        /*
        $("#UNIQUE").animate({
          opacity: '0'
        }, 1000);
        $("#UNIQUE").html(data);
        $("#UNIQUE").animate({
          opacity: '1'
        }, 1000);
        $("#cover").removeClass("cover");
        $("#PS").text('');
        if( pageNum!=0 && pageNum!=5 ) {
          $("#prevIcon").removeClass("hideGoHome");
          $("#prevIcon").addClass("showGoHome");
        }
        else {
          $("#prevIcon").removeClass("showGoHome");
          $("#prevIcon").addClass("hideGoHome");
        }
        */
        //$('body').html(data);
    }
  });
  setTimeout(() => {
    if( !success ) {
      $("#cover").addClass("cover");
      $("#PS").text('Loading...');
    }
  }, 500);
}







/*---   with login animation
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
*/
