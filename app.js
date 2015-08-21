var header = document.getElementsByTagName('header')[0];

var song1 = document.getElementById('song1'),
    song2 = document.getElementById('song2'),
    song3 = document.getElementById('song3'),
    song4 = document.getElementById('song4');

var icon1 = document.getElementById('icon1'),
    icon2 = document.getElementById('icon2'),
    icon3 = document.getElementById('icon3'),
    icon4 = document.getElementById('icon4');

var sn1 = "Favorite Food",
    sn2 = "Thrill of the Hunt",
    sn3 = "Transgender Dysphoria Blues",
    sn4 = "Where I'm From";

var stopSongs = function() {
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
};

var addPlayIcons = function () {
  icon1.classList.remove('fa-stop');
  icon1.classList.add('fa-play');
  icon2.classList.remove('fa-stop');
  icon2.classList.add('fa-play');
  icon3.classList.remove('fa-stop');
  icon3.classList.add('fa-play');
  icon4.classList.remove('fa-stop');
  icon4.classList.add('fa-play');
}


icon1.addEventListener('click', function(){
  console.log('icon1 clicked');
    stopSongs();
    if (this.classList.contains('fa-play')) {
      console.log(this.classList);
      song1.play();
      addPlayIcons();
      this.classList.remove('fa-play');
      this.classList.add('fa-stop');
      header.innerHTML = "Now Playing: " + "<i>" + sn1 + "</i>";
    }
    else if (this.classList.contains('fa-stop')){
      console.log('stop button');
      song1.pause();
      this.classList.remove('fa-stop');
      this.classList.add('fa-play');
      header.innerHTML = "Select a song!";
    }
});

icon2.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {    // if no song playing
  song2.play();
  addPlayIcons();
  this.classList.remove('fa-play');
  this.classList.add('fa-stop');
  header.innerHTML = "Now Playing: Thrill of the Hunt";
  }
  else {
    song2.pause();
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
    header.innerHTML = "Select a song!";
  }
});

icon3.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {
    song3.play();
    addPlayIcons();
    this.classList.remove('fa-play');
    this.classList.add('fa-stop');
    header.innerHTML = "Now Playing: Transgender Dysphoria Blues";
  }
  else {
    song3.pause()
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
    header.innerHTML = "Select a song!";
  }
});

icon4.addEventListener('click', function(){
  stopSongs();
  if (this.classList.contains('fa-play')) {
    song4.play();
    addPlayIcons();
    this.classList.remove('fa-play');
    this.classList.add('fa-stop');
    header.innerHTML = "Now Playing: Where I'm From";
  }
  else {
    song4.pause();
    this.classList.remove('fa-stop');
    this.classList.add('fa-play');
    header.innerHTML = "Select a song!";
  }
});
