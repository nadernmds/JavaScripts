(function () {
    function onPostionRecieved(p){
        console.log(p);
    }
    function locationNotRecieved(p){
        console.log(p)
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPostionRecieved,locationNotRecieved)
    }
}());