var song1 = document.getElementById('song1'),
    song2 = document.getElementById('song2'),
    song3 = document.getElementById('song3'),
    song4 = document.getElementById('song4');

var stopSongs = function() {
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
};

var icon1 = document.getElementById('icon1'),
    icon2 = document.getElementById('icon2'),
    icon3 = document.getElementById('icon3'),
    icon4 = document.getElementById('icon4');

icon1.addEventListener('click', function(){
    stopSongs();
    if (this.classList.contains('fa-play')) {
      song1.play();
      this.classList.remove('fa-play');
      this.classList.add('fa-stop');
    }
    else {
      song1.pause();
      this.classList.remove('fa-stop');
      this.classList.add('fa-play');
    }
});

icon2.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {
  song2.play();
  this.classList.remove('fa-play');
  this.classList.add('fa-stop');
  }
  else {
    song2.pause();
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
  }
});

icon3.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {
    song3.play();
    this.classList.remove('fa-play');
    this.classList.add('fa-stop');
  }
  else {
    song3.pause();
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
  }
});

icon4.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {
    song4.play();
    this.classList.remove('fa-play');
    this.classList.add('fa-stop');
  }
  else {
    song4.pause();
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
  }
});
