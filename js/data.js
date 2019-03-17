let getMyData  = (function(){
    console.log("data");
    let data = {
        'ny': 'knicks',
        'nj': 'nets',
        'la': 'kalers'
    }

    let getMyData = function(){
        return data;
    }

    return {
        getMyData : getMyData
    }
})();