// Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player__slider');
// Build out functions

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Hook up the event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', )