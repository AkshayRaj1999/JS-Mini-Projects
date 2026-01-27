const musicButton = document.getElementById("musicPlayButton");
const musicSlider = document.getElementById("musicSlider");
const music = document.getElementById("music");
const coverImage = document.querySelector(".song-image");
const headingWrapper = document.querySelector(".h1-wrapper");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function changeSlider(e) {
  musicSlider.max = music.duration;
  musicSlider.value = music.currentTime;
  durationEl.innerHTML = Math.floor(music.duration);
  currentTimeEl.innerHTML = Math.floor(music.currentTime);
}

music.addEventListener("timeupdate", changeSlider);

function changeToSong(e) {
  music.currentTime = e.target.value;
}

musicSlider.addEventListener("input", changeToSong);

function playMusic() {
  if (music.paused) {
    music.play();
    musicButton.innerHTML = "Pause";
    coverImage.classList.add("cover-cover-rotate");
    headingWrapper.classList.add("move-heading");
  } else {
    music.pause();
    musicButton.innerHTML = "Play";
    coverImage.classList.remove("cover-cover-rotate");
    headingWrapper.classList.remove("move-heading");
  }
}

musicButton.addEventListener("click", playMusic);
