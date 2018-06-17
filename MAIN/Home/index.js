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
