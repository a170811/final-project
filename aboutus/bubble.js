var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];


function Bubble() {
  this.container = document.createElement( 'div' );     //to create an element for bubble in body   //important!!
  this.picture_layer = document.createElement( 'div' );     //same as the one above, except this one is for picture
  document.body.appendChild( this.picture_layer );          // place the element into the document // important!!!
  document.body.appendChild( this.container );          // place the element into the document // important!!!
  this.Radius = 10;
  this.Position = {x:20, y:20} ;
  this.Destination = {x:20, y:20} ;
  this.Id = 0;         // the owner of the bubble, from 0~6, initial = 0

  //------general settings for css
  this.container.style.borderRadius = '50%';
  this.container.style.opacity = 0.1;
};

Object.assign( Bubble.prototype, {
    
  constructor: Bubble,

  init: function() {
    this.updateGraph();
  },

  updateGraph: function(me = this.container) {
    //var me = this.container;
    me.style.width = this.Radius+'vw';
    me.style.height = this.Radius+'vw';
    me.style.background = '#'+bubble_color[this.Id];
    
    //me.style.display= "block";

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
    this.container = document.createElement( 'div' );
    this.Radius = '10';
    var radius = 10;
    this.Position = {x:20, y:20} ;
    this.Destination = {x:20, y:20} ;
    this.Color = 0 ;        // initial color = black
    this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
    //this.style.left = this.position.x+'px';     //bug
    //this.style.top = this.position.y+'px';      //bug
    document.body.appendChild( this.container );
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




