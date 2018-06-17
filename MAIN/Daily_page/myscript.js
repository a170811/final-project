
//var amount = 0 ;
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

        //amount = count ;
        drinking_water( count*1000 ) ;
        show_text(count) ;
        count = 0 ;
        document.getElementById("count").innerHTML = count ;
        var board = document.getElementsByClassName('board') ;
        board[0].style.visibility = 'hidden' ;
        board[0].disabled = false ;
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
    var whale = $("#whale_container > img:nth-of-type(2)") ;
    var whale_height = whale.width()*0.62 ;
    if(a==1) {

        var cul = ( 1-(Account_data.today/Account_data.target) )*whale_height ;
        if(cul<0) cul=0 ;
        $(".whale:last-of-type").animate( {opacity : 1 },2000 ) ;
        $(".whale:first-of-type").animate( {opacity : 0 } , 1200 ) ;
        whale.css("clip" , `rect(${cul}px , auto , auto, auto )`) ;

    }
    else if(a==0) { //show bone
        $(".whale:last-of-type").animate( {opacity : 0 } , 1200 ) ;
        $(".whale:first-of-type").animate( {opacity : 1 } , 2000 ) ;
    }
} 
$(document).ready(function(){

    $("#title > span > span").html(Account_data.target) ;
    //console.log(Account_data.ID+" taaaa") ;
    if(Account_data.today == 0 ) {
        switch_whale(0) ;
    }
    else switch_whale(1) ;

});

/*
$.get("../Daily_page/data.txt" , function(data){
    console.log(Account_data.ID+" taaaa") ;
    var day = JSON.parse(data) ;
    var d = new Date() ;
    if(amount == 0 ) {
        var n = d.getDate() ;
        if(day[n-1] == 0 ) {
            switch_whale(0) ;
        }
    }
}) ;
*/

function show_text( show ) {
    var div_text = $("#show_text") ;
    show *=1000 ;
    $( "#show_text > h2" ).html( "you drink " + show.toFixed(0) + "c.c. water" ) ;
    $( div_text ).animate( {opacity : 1 } , 1200 , function(){
        $(div_text).animate( { opacity : 0} , 200 ) ;
    } ) ;
}
