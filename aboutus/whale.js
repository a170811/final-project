var t1=0;
var t2=-0.5;
var x=0;
var y=0;
var angle=0;
setInterval(function(){
  t1+=0.01;
  x=35*Math.cos(t1);
  y=35*Math.sin(t1);
  angle=-(t1-(Math.PI/2))
  $("#whale1").css("right",((x-70)*(($(window).width())/100)));
  $("#whale1").css("top",((y-10)*(($(window).width())/100)));
  $("#whale1").css("transform","rotate("+angle+"rad)");
 },35);
setInterval(function(){
  t2-=0.01;
  x=30*Math.cos(t2);
  y=30*Math.sin(t2);
  angle=-(t2+(Math.PI/2))
  $("#whale2").css("right",((x+50)*(($(window).width())/100)));
  $("#whale2").css("top",((y+10)*(($(window).width())/100)));
  $("#whale2").css("transform","rotate("+angle+"rad)");
 },30);
