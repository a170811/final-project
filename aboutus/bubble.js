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
  this.radius = 10;
  this.position = {x:20, y:20} ;
  this.style.left = this.position.x+'px';     //bug
  this.style.top = this.position.y+'px';      //bug
}







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
*/

