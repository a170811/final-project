var t=0;
var x=0;
var y=0;
var y_square;
var dir=0;
setInterval(function(){
  if(t==0){
    dir=1;
  }
  if(x==(2*Math.PI)){
    dir=0;
  }
  if(dir){
    t+=0.01;
  }
  else{
    t-=0.01;
  }
  x=Math.cos(t);
  y=Math.sin(t);
  $("#whale").css("right",(x*(($(window).width())/20)));
  $("#whale").css("top",(y*(($(window).width())/20)));
},30);
