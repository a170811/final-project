var changePic = [
  /*
   */
  '../Picture/Flood/pic_1.svg',  '../Picture/Flood/pic_2.svg',
  '../Picture/Flood/pic_3.svg',  '../Picture/Flood/pic_4.svg',
  '../Picture/Flood/pic_5.svg',  '../Picture/Flood/pic_6.svg',
  '../Picture/Flood/pic_7.svg',  '../Picture/Flood/pic_8.svg',
  '../Picture/Flood/pic_9.svg',  '../Picture/Flood/pic_10.svg',
  '../Picture/Flood/pic_11.svg',  '../Picture/Flood/pic_12.svg',
  '../Picture/Flood/pic_13.svg',  '../Picture/Flood/pic_14.svg',
  '../Picture/Flood/pic_15.svg',  '../Picture/Flood/pic_16.svg',
  '../Picture/Flood/pic_17.svg',  '../Picture/Flood/pic_18.svg',
  '../Picture/Flood/pic_19.svg',  '../Picture/Flood/pic_20.svg',
  '../Picture/Flood/pic_21.svg',  '../Picture/Flood/pic_22.svg',  
  '../Picture/Flood/pic_23.svg',  '../Picture/Flood/pic_24.svg',  
  '../Picture/Flood/pic_25.svg',  '../Picture/Flood/pic_26.svg',  
  '../Picture/Flood/pic_27.svg',  '../Picture/Flood/pic_28.svg',  
  '../Picture/Flood/pic_29.svg',  '../Picture/Flood/pic_30.svg',  
  '../Picture/Flood/pic_31.svg',  '../Picture/Flood/pic_32.svg',  
  '../Picture/Flood/pic_33.svg',  '../Picture/Flood/pic_34.svg',  
  '../Picture/Flood/pic_35.svg',  '../Picture/Flood/pic_36.svg',  
  '../Picture/Flood/pic_37.svg',  '../Picture/Flood/pic_38.svg',  
  '../Picture/Flood/pic_39.svg',  '../Picture/Flood/pic_40.svg',  
  '../Picture/Flood/pic_41.svg',  '../Picture/Flood/pic_42.svg',  
  '../Picture/Flood/pic_43.svg',  '../Picture/Flood/pic_44.svg',  
  '../Picture/Flood/pic_45.svg',  '../Picture/Flood/pic_46.svg',  
  '../Picture/Flood/pic_47.svg',  '../Picture/Flood/pic_48.svg',  
  '../Picture/Flood/pic_49.svg',  '../Picture/Flood/pic_50.svg',  
  '../Picture/Flood/pic_51.svg',  '../Picture/Flood/pic_52.svg'
]

// Account_data.total;
// Account_data.total_target;
//document.getElementById("imageid").src="../template/save.png";
var history_ch = "你好我是歷史資訊。<br> 體回們的快車上要直。告種如一生很不色所詩！人前頭童不花形量人書張民很我做頭？的多女統氣於紅信問得證工爸：收上語、是德西中明單？戰灣人說好北的終一見據了力不趣火有圖任告數；連資生住或，獨車樣成區動裡他際異境相。際市的醫的費河可底國場業直，方以見爸，清還臺場教美算方看看據怕許此，經之卻起他春文評前有心也合空人由……獲眾品神有觀金得覺取起很一作經古格利溫調國幾成黑處水為水度但強車我公利覺神數來業全著、指年保家從行應再現人可市經教下讀時專地人家職，見府作。往三熱結使頭心司下氣真屋星部人。這回不了傷多出！頭國實大開上處作可趣口油國現而這中金，別叫案，組最所名新型資小他大反叫度快的出、麼用實，盡的八往、到情全於到張女的樂告史書來書看程異，夜一家會這然公你青見教要國世買大廠出經形臺高！河你病式調筆查現怎開許，該於國裡都定定？家類熱收面展紙國難八文早位果品現量少病料來情管區！美智如！";
var history_en = " Hello, I'm the History. <br> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";
var power = 0;


//---- Show History Information----//
$(document).on('touchend click', "#information_icon", function() {
    show();
});


$(document).ready(function(){
    
    $("#information_icon").click(function(){ 
        show();
    }) ;
    /*
    $(document).ready(function(){
      $(".contain").click(function(){
          this.remove() ;
      }) ;
    });
*/

}) ;


function show(  ) {
    
    var board = document.createElement("p") ;
    var contain = document.createElement("div") ;
    var cover = document.createElement("div") ;
    document.getElementById("tmp").appendChild(contain) ;
    contain.appendChild(board) ;
    contain.appendChild(cover) ;
    board.classList.add("board") ;
    contain.classList.add("contain") ;
    cover.classList.add("cover1") ;
    
    board.innerHTML = history_ch ;  //if no "sel" will show intro of everyone
    /*
    $(document).on('touchend click', ".contain", function() {
        this.remove() ;
    });
    
    */
    //setTimeout(function(){}, 1000);
  
    $(document).ready(function(){
        $(".contain").click(function(){
            this.remove() ;
        }) ;
    });
  
}

//--- set for the page
$(document).ready( () => {
    var total = Account_data.total;
    var target = Account_data.total_target;
    //var total = 12620000;
    //var target = 200000000;
    power = 0;
    findPower(total);

    var percentage = Math.floor( (total/target) * 51  );
    document.getElementById("present").src=changePic[ percentage ];
    document.getElementById("show_total").innerHTML = `${ (total/( Math.pow(10, power) ) ).toFixed(1) }&times10<sup>${power}</sup> L`;

});

function findPower (num) {
  if (num >= 10) {
    power++;
    findPower(num/10);
  }
}







/*---------- Canvas test code -------------//
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

*/













