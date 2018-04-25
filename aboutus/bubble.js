var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];


//----initial function for the bubble, not sure if it's needed or not
function inti(){
	var maxBubbles = 40;

	form(action="")
		for (var b = 0; b < maxBubbles; ++b) {
			input(type="checkbox",id="bubble" + (b + 1));
			//label(for="bubble" + (b + 1)).bubble;
			span.bubble-inner;
			span;
		}
}



//---try to create a class name Bubble, but failed
function Bubble() {
  this.Radius = 10;
  this.Position = {x:20, y:20} ;
  this.Destination = {x:20, y:20} ;
  this.Color = bubble_color[0] ;        // initial color = black
  this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
  //this.style.left = this.position.x+'px';     //bug
  //this.style.top = this.position.y+'px';      //bug
}


Object.assign( Bubble.prototype, {
  
  setPosition: function(x, y) {
      
  },
  
  setRadius: function(R) {
      
  },

  setDestination: function(x, y) {
    
  },

  setColor: function(num) {
      
  },

  setID: function(id) {
      
  },

  setBG: function(pic) {
      
  }
  
 


})




//----sample to create the function for the class Bubble

/*
Object.assign( Matrix4.prototype, {

    isMatrix4: true,

    set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

      var te = this.elements;

      te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
      te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
      te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
      te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

      return this;

    },

    size: function () {
      
    }
*/

