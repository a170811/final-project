var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
var pointNum =1024;

/*
var getPixelRatio = function(context) {
  var backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;
   return (window.devicePixelRatio || 1) / backingStore;
};

//调用
var ratio = getPixelRatio(cxt);
*/
newmap = new Image();
newmap.src="https://i.imgur.com/SYv9Mtt.jpg";
 
cxt.moveTo(0, 0);
for (var i = 0; i < 2048; i++) {
  var tmp = func(i);
  cxt.lineTo(i, tmp);
}

cxt.lineTo(1400, 1400);
cxt.lineTo(1400, 0);
cxt.closePath();
cxt.clip();
//cxt.fillStyle="#FF0000";
//cxt.fillRect(0,0,1400,1400);
cxt.drawImage(newmap,0,0, 1400, 1400)
function func(i) {
  return -6*0.0001*Math.pow(i, 2)+ 1.838*Math.pow(i, 1);
}






var test












