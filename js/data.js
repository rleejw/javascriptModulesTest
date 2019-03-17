let getMyData  = (function(){
    let uniformNumber = 23;

    let uniformTaken = function(a){

        if (a == null) {
            a = uniformNumber; 
        }

        if (a === 23) {
            return 'NO';
        } else {
            return 'YES';
        }
    }

    return {
        isAvailable : function(b) {
            return uniformTaken(b);
        } 
    }
})();