var intro = {
    b0:"蘇品潔<br><br>在地台南人,競技啦啦隊員,成大歷史三年級,愛練習的狂熱份子,呼吸都會<b>胖</b>的偽三層!" , 
    b1:"鄭翔升<br><br>工設系研究所,喜歡打排球唱歌畫畫,一個生在台南但不了解台南的人..." ,  
    b2:"HiHi, 我是王昶文<br><br>電機系<b>臭魯蛇</b>但我不宅！！！<br>語言專長：垃圾話",
    b3:"林泓鈞<br><br>喜歡打羽球,也蠻喜歡寫code的,因為我希望以後可以讓電腦幫我工作,我就可以偷懶,所以讓我們一起變強吧！",
    b4:"伍怡歡<br><br>人生彷彿只剩下吃,也因為吃,愛上了歷史,雖然除了吃沒有別的特長,不過會盡全力完成被交代的事情,耶伊ヽ(●´∀`●)ﾉ",
    b5:"張奇心 JACKIE<br><br>我叫奇心,來自澳門,是環工系的學生。我喜歡享受食物、旅行、運動和閱讀,很喜歡跟人聊天交流生活趣事。",
    b6:"魏名駿<br><br>為快樂而活,NCKUEE 109,土生土長沙漠桃園人,熱愛美食-\>#G哥美食地圖系列,曾經興趣是跑活動,現在是耍廢邊緣人",
    b7:"蘇品潔<br><br>在地台南人,競技啦啦隊員,成大歷史三年級,愛練習的狂熱份子,呼吸都會<b>胖</b>的偽三層!",
    b8:"鄭翔升<br><br>工設系研究所,喜歡打排球唱歌畫畫,一個生在台南但不了解台南的人...",
    b9:"HiHi, 我是王昶文<br><br>電機系<b>臭魯蛇</b>但我不宅！！！<br>語言專長：垃圾話",
    b10:"林泓鈞<br><br>喜歡打羽球，也蠻喜歡寫code的，因為我希望以後可以讓電腦幫我工作，我就可以偷懶，所以讓我們一起變強吧！",
    b11:"伍怡歡<br><br>人生彷彿只剩下吃,也因為吃,愛上了歷史,雖然除了吃沒有別的特長,不過會盡全力完成被交代的事情,耶伊ヽ(●´∀`●)ﾉ",
    b12:"張奇心 JACKIE<br><br>我叫奇心,來自澳門,是環工系的學生。我喜歡享受食物、旅行、運動和閱讀,也很喜歡跟人聊天交流生活趣事。",
    b13:"魏名駿<br><br>為快樂而活,NCKUEE 109,土生土長沙漠桃園人,熱愛美食-\>#G哥美食地圖系列,曾經興趣是跑活動,現在是耍廢邊緣人"
}

//var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];
var img = ['001.png', '002.png', '003.png', '004.png', '005.png', '006.png', '007.png'] ;
var bubble_num = 14;
var bubble_img = "bubble3.svg";
var container=[bubble_num], bubble_ly, shadow_ly;
var picture_ly;
var Radius, Position, Destination;
var move = [bubble_num];
var count = 0;
var Long_Unit = 'vw';
var Short_Unit = 'vh';
var Screen_Longer_length = screen.width;
var Screen_Shorter_length = screen.height;
if (screen.width < screen.height) {
  Long_Unit = 'vh';
  Short_Unit = 'vw';
  Screen_Longer_length = screen.height;
  Screen_Shorter_length = screen.width;
}


function Bubble() {
  //--------basic variables----------
  Radius = 20;
  Position = { x: Math.random() * 80 + 1, y: Math.floor(Math.random() * 8)*20 + 100 };
  Destination = { x: Position.x, y: -10-2*Radius } ;
  this.Id = count;         // the owner of the bubble, from 0~6, initial = 0
  //count ++;
  //-----------create object for the bubble-------------
  container[count] = document.createElement( 'div' );        //where all the stuff goes       

  bubble_ly = document.createElement( 'div' );     //to create an element for bubble in body   //important!!
  picture_ly = document.createElement( 'div' );     //same as the one above, except this one is for picture
  shadow_ly = document.createElement( 'div' );     //same as the one above, except this one create the shadow_ly
  
  //----------include all the stuff into container, and include container into body
  document.body.appendChild( container[count] );
  
  container[count].appendChild( shadow_ly );          // place the element into the document // important!!!
  container[count].appendChild( picture_ly );          // place the element into the document // important!!!
  container[count].appendChild( bubble_ly );          // place the element into the document // important!!!
  
  //------set container-----
  container[count].style.position= 'absolute';
  //container.style.top= '60vh';
  //container.style.right= '80vw';
  //container.style.width = Radius+2+'vw';
  //container.style.height = Radius+2+'vw';

  //----------set bubble-----
  bubble_ly.classList.add("bubble") ;
  bubble_ly.style.position= 'absolute';
  bubble_ly.style.top= '0vw';
  bubble_ly.style.right= '0vw';

  //bubble_ly.style.width = Radius+'vw';
  //bubble_ly.style.height = Radius+'vw';
  bubble_ly.style.borderRadius = '50%';

  bubble_ly.style.background = 'url(' + bubble_img + ')';
  //me.style.background.size = '100%';
  
  //--------set picture-----
  picture_ly.style.position = 'absolute';
  picture_ly.style.top= '0.2vw';
  picture_ly.style.right= '0.2vw';
  picture_ly.style.position = 'center';

  //picture_ly.style.width = Radius-0.05+'vw';
  //picture_ly.style.height = Radius-0.05+'vw';
  picture_ly.style.borderRadius = '50%';

  //picture_ly.style.background = '#ffffff';
  //me.style.display= "block";

  //--------set shadow-----
  shadow_ly.style.position= 'absolute';
  shadow_ly.style.top= '0.1vw';
  shadow_ly.style.right= '0.1vw';

  //shadow_ly.style.width = Radius+0.5+'vw';
  //shadow_ly.style.height = Radius+0.5+'vw';
  shadow_ly.style.borderRadius = '50%';

  //shadow_ly.style.background = '#222222';
  //shadow_ly.style.opacity = 0.5;


  this.init();

};

Object.assign( Bubble.prototype, {
    
  constructor: Bubble,

  init: function() {
    this.setRadius();
    this.setPosition();
    this.setShadow();
    this.setID(count);
    this.setBG( img[count % 7] );
  },


  setPosition: function( x = Position.x, y = Position.y ) {       //set the starting point
    Position.x = x;
    Position.y = y;
    container[this.Id].style.top= Position.y + 'vh';
    container[this.Id].style.right= Position.x + 'vw';
  },
  
  setRadius: function( R = Radius ) {            //set the radius of the bubble
    Radius = R;

    container[this.Id].style.width = Radius+2+Short_Unit;
    container[this.Id].style.height = Radius+2+Short_Unit;
    bubble_ly.style.width = Radius+Short_Unit;
    bubble_ly.style.height = Radius+Short_Unit;
    picture_ly.style.width = Radius-0.5+Short_Unit;
    picture_ly.style.height = Radius-0.5+Short_Unit;
    shadow_ly.style.width = Radius+0.3+Short_Unit;
    shadow_ly.style.height = Radius+0.3+Short_Unit;
  },

  setShadow: function( c = '#333333' ) {        // set up the shadow, initial color = #333333
    shadow_ly.style.background = c;
    shadow_ly.style.opacity = 0.5;
    shadow_ly.classList.add("shadow") ;
  },

  setID: function( id = 0 ) {         //set ID, initial = 0
    bubble_ly.setAttribute("id","b"+id ) ;
    //this.Id = id ;
    //container.name = id;
  },

  setBG: function( pic = '' ) {        // setup background, initial = NULL (haven't test yet)
    picture_ly.style.background = 'url(' + pic + ')';
    picture_ly.style.backgroundPosition = 'center top';
    picture_ly.style.overflow = 'hidden';
    picture_ly.style.backgroundSize = 'cover';
  },

  startMoving: function( speed = 0.1, y = Destination.y, x = Destination.x ) {    //the destination of the bubble
    var me = this;
    Destination.x = x;
    Destination.y = y;
    var K = Screen_Shorter_length/1600;
    var tmp_pos = Position.y;
    var delay = Math.floor( ( Math.random() * 2000) + 500 );    //random a delay time
    var tmp = me.Id;
    move[count] = setInterval(frame, 100);
    count ++;

    function frame() {
      //var K = Short_Unit/Long_Unit;
      if (tmp_pos <= y) {
        //clearInterval(move);
        Position.x = Math.random() * 65 + 6;
        me.setPosition( Position.x, 105 );
        tmp_pos = Position.y;
        setTimeout( function(){}, delay);
      }   
      else {
        tmp_pos -= K;
        container[me.Id].style.top= tmp_pos + 'vh';  
      }
    }
  },

  restart: function(delay = 0) {
    this.setPosition();
  }
});

function show( id = "" ) {
    
    var board = document.createElement("p") ;
    var contain = document.createElement("div") ;
    document.body.appendChild(contain) ;
    contain.appendChild(board) ;
    board.classList.add("board") ;
    contain.classList.add("contain") ;
    board.innerHTML = intro[id] ;

    $(document).ready(function(){
        $(".contain").click(function(){
            this.remove() ;
        }) ;
    });
}

$(document).ready(function(){
    $(".bubble").click(function(){ 
        //alert(this.getAttribute("id")) ;
        show(this.getAttribute("id")); 
    }) ;
}) ;



/*------------works the same as the functions above, save as backup
var Bubble = function() {
    bubble_ly = document.createElement( 'div' );
    this.Radius = '10';
    var radius = 10;
    this.Position = {x:20, y:20} ;
    this.Destination = {x:20, y:20} ;
    this.Color = 0 ;        // initial color = black
    this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
    //this.style.left = this.position.x+'px';     //bug
    //this.style.top = this.position.y+'px';      //bug
    document.body.appendChild( bubble_ly );
  };
//bject.defineProperty( Bubble, 'id', 1 );
  Bubble.prototype.init = function() {
    //var me = this;
    var rad = this.Radius;
    //var me = this;
    this.style.width = rad;
    //this.style.width = this.Radius;
    this.style.height = this.Radius;
    this.style.background = "black";
  };
*/
//-------------setup function name by yourself
/*
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.BUBBLE = {})));
}(this, (function (exports) { 'use strict';
  function Bubble() {
    Object.defineProperty( this, 'id', 1 );
    this.Radius = 10;
    this.Position = {x:20, y:20} ;
    this.Destination = {x:20, y:20} ;
    this.Color = 0 ;        // initial color = black
    this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
    //this.style.left = this.position.x+'px';     //bug
    //this.style.top = this.position.y+'px';      //bug
  };
//Object.defineProperty( Bubble, 'id', 1 );
  Bubble.prototype.init = function() {
    this.style.width = this.Radius;
    this.style.height = this.Radius;
    this.style.background = "black";
  };
})));
*/
