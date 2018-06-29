class VideoControls {

  constructor(videoPlayer, selectedControls) {
    this.concealed = false;
    this.focus = false;
    this.player = videoPlayer;
    this.el = $(selectedControls);
    this.controls = {
      play: this.el.find('.play'),
      pause: this.el.find('.pause'),
      replay: this.el.find('.replay'),
      seekBar: this.el.find('.seek-bar'),
      expand: this.el.find('.expand')
    }

    this.conceal();
    this.bind();
  }

  bind() {
    // el.click(()=>toggleVideo()); 

    this.el.parent().mousemove(()=>{
      if (this.concealed) {
        this.reveal();
        this.conceal();
      }
    })

    this.el.parent().mouseleave(()=>{
      this.conceal();
    })

    this.el.find('.controls-bottom').mouseover(()=> {
      this.focus = true;
       this.reveal();
    });
    this.el.find('.controls-bottom').mouseleave(()=> {
      this.focus = false;
      this.conceal();
    });

    this.controls.pause.click(()=> this.pauseVideo());
    this.controls.play.click(()=> this.playVideo());

    this.controls.replay.click(()=>{
      this.player.jumpTo(0);
      this.playVideo();
    })

    this.controls.seekBar.change(()=> {
      this.player.jumpTo(
        Math.floor(this.player.prop('duration') * this.controls.seekBar.val() / 100)
      );
    })

    this.player.video.addEventListener('timeupdate', ()=> {
      this.controls.seekBar.val(
        (100 / this.player.prop('duration')) * this.player.prop('currentTime')
      )
    })

    this.controls.expand.click(()=>{
      this.player.fullscreen();
      this.playVideo();
    })
  }

  playVideo() {
    this.controls.pause.removeClass('hidden');
    this.controls.play.addClass('hidden');
    this.player.play();
    this.player.show();
  }

  pauseVideo() {
    this.controls.play.removeClass('hidden');
    this.controls.pause.addClass('hidden');
    this.player.pause();
    this.player.hide();
  }

  toggleVideo() {
    if (!this.player.prop('paused'))
      this.playVideo();
    else this.pauseVideo();
  }

  reveal() {
    this.concealed = false;
    this.el.removeClass('concealed');
  }

  conceal() {
    setTimeout(()=>{
      if(!this.focus) {
        this.concealed = true;
        this.el.addClass('concealed');
      }
    }, 1000)
  }

}
