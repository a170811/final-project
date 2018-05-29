
var amount = 0 ;
var count = 0 ;
function click_record() {
    var board = document.getElementsByClassName('board') ;
    board[0].style.visibility = 'visible' ;
    board[0].disabled = true ;
}

function click_cancel() {
    var board = document.getElementsByClassName('board') ;
    board[0].style.visibility = 'hidden' ;
    board[0].disabled = false ;
    count = 0 ;
    document.getElementById("count").innerHTML = count ;
}

function click_comfirm() {
    if(count!=0) {

        amount = count ;
        alert("you drink "+count.toFixed(1)*1000+" c.c. water") ;
        count = 0 ;
        document.getElementById("count").innerHTML = count ;
        var board = document.getElementsByClassName('board') ;
        board[0].style.visibility = 'hidden' ;
        board[0].disabled = false ;
        //document.getElementById("whale").setAttribute('src' , './../Picture/whale.svg') ;
        switch_whale(1) ;
    }
} 

function b1() {
    count+=0.1 ;
    document.getElementById("count").innerHTML = count.toFixed(1) ;
}
function b2() {
    count+=0.5 ;
    document.getElementById("count").innerHTML = count.toFixed(1) ;
}
function b3() {
    count+=1 ;
    document.getElementById("count").innerHTML = count.toFixed(1) ;
}

function switch_whale( a ) {
    if(a==1) {
        $(".whale:last-of-type").animate( {opacity : 1 },2000 ) ;
        $(".whale:first-of-type").animate( {opacity : 0 } , 1200 ) ;

    }
    else if(a==0) {
        $(".whale:last-of-type").animate( {opacity : 0 } , 1200 ) ;
        $(".whale:first-of-type").animate( {opacity : 1 } , 2000 ) ;
    }
} 

$.get("data.txt" , function(data){
    var day = JSON.parse(data) ;
    var d = new Date() ;
    if(amount == 0 ) {
        var n = d.getDate() ;
        if(day[n-1] == 0 && day[n-2] == 0) {
            switch_whale(0) ;
        }
    }
}) ;

