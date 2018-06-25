var intro = {
    b0:"<h3>蘇品潔</h3>在地台南人,競技啦啦隊員,成大歷史三年級,愛練習的狂熱份子,呼吸都會<b>胖</b>的偽三層!" , 
    b1:"<h3>鄭翔升</h3>工設系研究所,喜歡打排球唱歌畫畫,一個生在台南但不了解台南的人..." ,  
    b2:"<h3>HiHi, 我是王昶文</h3>電機系<b>臭魯蛇</b>但我不宅！！！<br>語言專長：垃圾話",
    b3:"<h3>林泓鈞</h3>喜歡打羽球,也蠻喜歡寫code的,因為我希望以後可以讓電腦幫我工作,我就可以偷懶,所以讓我們一起變強吧！",
    b4:"<h3>伍怡歡</h3>人生彷彿只剩下吃,也因為吃,愛上了歷史,雖然除了吃沒有別的特長,不過會盡全力完成被交代的事情,耶伊ヽ(●´∀`●)ﾉ",
    b5:"<h3>張奇心 JACKIE</h3>我叫奇心,來自澳門,是環工系的學生。我喜歡享受食物、旅行、運動和閱讀,很喜歡跟人聊天交流生活趣事。",
    b6:"<h3>魏名駿</h3>為快樂而活,NCKUEE 109,土生土長沙漠桃園人,熱愛美食-\>#G哥美食地圖系列,曾經興趣是跑活動,現在是耍廢邊緣人",
    b7:"<h3>蘇品潔</h3>在地台南人,競技啦啦隊員,成大歷史三年級,愛練習的狂熱份子,呼吸都會<b>胖</b>的偽三層!",
    b8:"<h3>鄭翔升</h3>工設系研究所,喜歡打排球唱歌畫畫,一個生在台南但不了解台南的人...",
    b9:"<h3>HiHi, 我是王昶文</h3>電機系<b>臭魯蛇</b>但我不宅！！！<br>語言專長：垃圾話",
    b10:"<h3>林泓鈞</h3>喜歡打羽球，也蠻喜歡寫code的，因為我希望以後可以讓電腦幫我工作，我就可以偷懶，所以讓我們一起變強吧！",
    b11:"<h3>伍怡歡</h3>人生彷彿只剩下吃,也因為吃,愛上了歷史,雖然除了吃沒有別的特長,不過會盡全力完成被交代的事情,耶伊ヽ(●´∀`●)ﾉ",
    b12:"<h3>張奇心 JACKIE</h3>我叫奇心,來自澳門,是環工系的學生。我喜歡享受食物、旅行、運動和閱讀,也很喜歡跟人聊天交流生活趣事。",
    b13:"<h3>魏名駿</h3>為快樂而活,NCKUEE 109,土生土長沙漠桃園人,熱愛美食-\>#G哥美食地圖系列,曾經興趣是跑活動,現在是耍廢邊緣人",
    b14:"<h2>別讓鯨魚擱淺了！</h2><em>我們這組所要製作的東西，是一款能記錄喝水的app。</em><p>作為台南在地大學都知曉台南曾在兩百多年前於現今赤崁樓到安平區域有一片內海。</p><p>於是，我們以台江作為主軸，利用累積每天喝水量的方式去使台江內海再現，以達到記錄每天喝水之目標。</p><p>又因台南沿岸有許多鯤鯓，而鯤鯓遠看就像是隻鯨魚於海上浮出身背，台江內海儼然成了一個棲息「鯨魚」的巢穴，遂因而有了<b>「海翁窟」</b>的別稱。</p><p>於是，我們以這概去發想，輔以鯨魚作為app的特色，使得app能在乏味的日常紀錄中，增添了趣意及挑戰。</p>" ,
    b15:"Hello<br>there's a suprise for you<br>click me one time<br>and you'll find out<br><br><br><br><br><br><br>I'm just kidding~~~^^" 
}

//var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];
var img = ['../Aboutus/001.png', '../Aboutus/002.png', '../Aboutus/003.png', '../Aboutus/004.png', '../Aboutus/005.png', '../Aboutus/006.png', '../Aboutus/007.png'] ;
var bubble_num = 14;
var bubble_img = "../Aboutus/bubble3.svg";
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
  Position = { x: Math.random() * 80 + 1, y: Math.floor(Math.random() * 8)*20  };
  Destination = { x: Position.x, y: -10-2*Radius } ;
  this.Id = count;         // the owner of the bubble, from 0~6, initial = 0
  //count ++;
  //-----------create object for the bubble-------------
  container[count] = document.createElement( 'div' );        //where all the stuff goes       

  bubble_ly = document.createElement( 'div' );     //to create an element for bubble in body   //important!!
  picture_ly = document.createElement( 'div' );     //same as the one above, except this one is for picture
  shadow_ly = document.createElement( 'div' );     //same as the one above, except this one create the shadow_ly
  
  //----------include all the stuff into container, and include container into body
  document.getElementById("COVER").appendChild( container[count] );
  
  container[count].appendChild( shadow_ly );          // place the element into the document // important!!!
  container[count].appendChild( picture_ly );          // place the element into the document // important!!!
  container[count].appendChild( bubble_ly );          // place the element into the document // important!!!
  
  //------set container-----
  container[count].style.position= 'absolute';

  //----------set bubble-----
  bubble_ly.classList.add("bubble") ;
  bubble_ly.style.position= 'absolute';
  bubble_ly.style.top= '0vw';
  bubble_ly.style.right= '0vw';

  bubble_ly.style.borderRadius = '50%';

  bubble_ly.style.background = 'url(' + bubble_img + ')';
  
  //--------set picture-----
  picture_ly.style.position = 'absolute';
  picture_ly.style.top= '0.2vw';
  picture_ly.style.right= '0.2vw';
  picture_ly.style.position = 'center';

  picture_ly.style.borderRadius = '50%';

  //--------set shadow-----
  shadow_ly.style.position= 'absolute';
  shadow_ly.style.top= '0.1vw';
  shadow_ly.style.right= '0.1vw';

  shadow_ly.style.borderRadius = '50%';

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
    //shadow_ly.style.background = c;
    //shadow_ly.style.opacity = 0.5;
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
    picture_ly.style.opacity = 0.5;
  },

  startMoving: function( y = Destination.y, x = Destination.x ) {    //the destination of the bubble
    var me = this;
    Destination.x = x;
    Destination.y = y;
    var K = ( 115 + 2*Radius )/2000;
    var tmp_pos = Position.y;
    //var delay = Math.floor( ( Math.random() * 2000) + 500 );    //random a delay time
    var tmp = me.Id;
    move[count] = setInterval(frame, 15);
    count ++;

    function frame() {
      //var K = Short_Unit/Long_Unit;
      if (tmp_pos <= y) {
        //clearInterval(move);
        Position.x = Math.random() * 65 + 6;
        container[me.Id].style.opacity = 0;
        //setTimeout( function(){}, delay);
        me.setPosition( Position.x, 105 );
        container[me.Id].style.opacity = 1;
        tmp_pos = Position.y;
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

function show( id = "" , sel = "0" ) {
    
    var board = document.createElement("p") ;
    var contain = document.createElement("div") ;
    var cover = document.createElement("div") ;
    document.getElementById("COVER").appendChild(contain) ;
    contain.appendChild(board) ;
    contain.appendChild(cover) ;
    board.classList.add("board") ;
    contain.classList.add("contain") ;
    cover.classList.add("cover1") ;
    if (sel==1) { //show info
        id = "b14" ;
    }
    else if(sel==2) { //show arrow
        id = "b15" ;
    }
    board.innerHTML = intro[id] ;  //if no "sel" will show intro of everyone
    

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

    $("#intro").click(function(){ 
        show(this.getAttribute("id"),1); 

    }) ;
    

    /*
    $("#arrow").click(function(){ 
        show(this.getAttribute("id"),2); 
    }) ;
    */

    $(document).ready(function(){
      $(".contain").click(function(){
          this.remove() ;
      }) ;
    });


}) ;
