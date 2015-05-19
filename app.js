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

var playb = document.getElementsByClassName('fa-play');
var stop = document.getElementById('stop').style.visibility="hidden";


//definining variables to use for icons
var foods = document.getElementById('foods'),
    hunts = document.getElementById('hunts'),
    bluess = document.getElementById('bluess'),
    imfroms = document.getElementById('imfroms');

foods.addEventListener('click', function(){
    stopSongs();
    food.play();
    stop.style.visibility= "visible";
    stop.addEventListener('click', function () {
      food.pause();
      this.style.visibility= "hidden";
      playb.style.visibility= "visible";
    })
});
