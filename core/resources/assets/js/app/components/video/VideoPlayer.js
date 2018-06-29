class VideoPlayer {
  constructor(el) {
    this.video = document.querySelector(el);
    this.controls = null;
    this.carousel = null;
  }

  prop(prop) {
    return this.video[prop];
  }

  pause() {
    this.video.pause();
  }

  play() {
    this.video.play();
  }

  hide() {
    this.video.style.opacity = 0;
  }

  show() {
    this.video.style.opacity = 1;
  }

  jumpTo(num) {
    this.video.currentTime = typeof num === 'number' ? num : 0;
  }

  playbackSpeed(rate) {
    this.video.playbackRate = typeof rate === 'number' ? rate : 1;
  }

  fullscreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen(); // Firefox
    } else if (this.video.webkitRequestFullscreen) {
      this.video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  loadSource(url) {
    this.video.innerHTML = '';
    let src = document.createElement('source');
    src.setAttribute('src', url);

    this.video.appendChild(src);
    this.video.load();
    this.video.play();
  }

  bindControls(controls) {
    this.controls = new VideoControls(this, controls);
  }

  bindCarousel(carousel, videoList) {
    this.carousel - new VideoCarousel(this, carousel, videoList)
  }

}
