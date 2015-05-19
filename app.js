//defining variables to use for songs
var food = document.getElementById('food'),
    hunt = document.getElementById('hunt'),
    blues = document.getElementById('blues'),
    imfrom = document.getElementById('imfrom');

var stopSongs = function() {
  food.pause();
  hunt.pause();
  blues.pause();
  imfrom.pause();
};


var stop1 = document.getElementById('stop1').style.visibility="hidden";


//definining variables to use for icons
var foods = document.getElementById('foods'),
    hunts = document.getElementById('hunts'),
    bluess = document.getElementById('bluess'),
    imfroms = document.getElementById('imfroms');

foods.addEventListener('click', function(){
    stopSongs();
    food.play();
    this.style.visibility="hidden";
    document.getElementById('stop1').style.visibility= "visible";
});
