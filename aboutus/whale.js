var t=0;
var x=0;
var y=0;
var angle=0;
setInterval(function(){
  t+=0.01;
  x=30*Math.cos(t);
  y=30*Math.sin(t);
  angle=-(t-(Math.PI/2))
  $("#whale").css("right",((x-45)*(($(window).width())/100)));
  $("#whale").css("top",(y*(($(window).width())/100)));
  $("#whale").css("transform","rotate("+angle+"rad)");
},30);
