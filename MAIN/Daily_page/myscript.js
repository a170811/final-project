
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
    amount = count ;
    alert("you drink "+count.toFixed(1)*1000+" c.c. water") ;
    count = 0 ;
    document.getElementById("count").innerHTML = count ;
    var board = document.getElementsByClassName('board') ;
    board[0].style.visibility = 'hidden' ;
    board[0].disabled = false ;
    
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
