//var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];
var bubble_img = "bubble3.svg";
var container, bubble_ly, picture_ly, shadow_ly;
var Radius, Position, Destination, Id;

function Bubble() {


  //--------basic variables----------
  Radius = 10;
  Position = {x:20, y:20} ;
  Destination = {x:20, y:20} ;
  Id = 0;         // the owner of the bubble, from 0~6, initial = 0


  //-----------create object for the bubble-------------
  container = document.createElement( 'div' );        //where all the stuff goes       

  bubble_ly = document.createElement( 'div' );     //to create an element for bubble in body   //important!!
  picture_ly = document.createElement( 'div' );     //same as the one above, except this one is for picture
  shadow_ly = document.createElement( 'div' );     //same as the one above, except this one create the shadow_ly
  


  //----------include all the stuff into container, and include container into body
  document.body.appendChild( container );
  
  container.appendChild( shadow_ly );          // place the element into the document // important!!!
  container.appendChild( picture_ly );          // place the element into the document // important!!!
  container.appendChild( bubble_ly );          // place the element into the document // important!!!
  
  
  //------set container-----
  container.style.position= 'absolute';
  container.style.top= '60vh';
  container.style.right= '80vw';
  bubble_ly.style.width = Radius+2+'vw';
  bubble_ly.style.height = Radius+2+'vw';


  //----------set bubble-----
  bubble_ly.style.position= 'absolute';
  bubble_ly.style.top= '0vw';
  bubble_ly.style.right= '0vw';

  bubble_ly.style.width = Radius+'vw';
  bubble_ly.style.height = Radius+'vw';
  bubble_ly.style.borderRadius = '50%';

  bubble_ly.style.background = 'url(' + bubble_img + ')';
  //me.style.background.size = '100%';
  

  //--------set picture-----
  picture_ly.style.position = 'absolute';
  picture_ly.style.top= '0vw';
  picture_ly.style.right= '0vw';

  picture_ly.style.width = Radius-0.05+'vw';
  picture_ly.style.height = Radius-0.05+'vw';
  picture_ly.style.borderRadius = '50%';

  picture_ly.style.background = '#fff';
  //me.style.display= "block";



  //--------set shadow-----
  shadow_ly.style.position= 'absolute';
  shadow_ly.style.top= '0.1vw';
  shadow_ly.style.right= '0.1vw';

  shadow_ly.style.width = Radius+0.5+'vw';
  shadow_ly.style.height = Radius+0.5+'vw';
  shadow_ly.style.borderRadius = '50%';

  shadow_ly.style.background = '#222222';
  shadow_ly.style.opacity = 0.5;


};

Object.assign( Bubble.prototype, {
    
  constructor: Bubble,

  init: function() {
    this.updateGraph();
  },

  updateGraph: function() {
    

  },

  setPosition: function(x, y) {       //set the starting point
    
  },
  
  setRadius: function(R) {            //set the radius of the bubble
    this.updateGraph();
  },

  setDestination: function(x, y) {    //the destination of the bubble
      
  },

  setColor: function(num) {     //setup the color of the bubble, not background color!
    this.updateGraph();
  },

  setID: function(id) {         //set ID
    this.updateGraph();
  },

  setBG: function(pic) {        // setup background
    this.updateGraph();
  }
  
});

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




