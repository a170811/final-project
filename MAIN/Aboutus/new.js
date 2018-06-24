
function bubble( id , sha , pic , inn ) {
    
    this.id = id ;
    this.shadow = sha ;
    this.picture = pic ; 
    this.inner_bubble = inn ;
    this.shake = function(){ 
        this.shadow.addClass('shake') ;
        this.picture.addClass('shake') ;
        this.inner_bubble.addClass('shake') ;
    }
    this.rshake = function(){ 
        this.shadow.removeClass('shake') ;
        this.picture.removeClass('shake') ;
        this.inner_bubble.removeClass('shake') ;
    }

}

