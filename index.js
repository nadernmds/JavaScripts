(function () {
    function onPostionRecieved(p){
        console.log(p);
        
        document.getElementById('loc').innerHTML='pep';
    }
    function locationNotRecieved(p){
        console.log(p)
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPostionRecieved,locationNotRecieved)
    }
}());