class VideoCarousel {
  constructor(player, carousel, videoList) {
    this.videoList = videoList;
    this.player = player;
    this.el = $(carousel);
    this.currentVideo = 0;
    this.controls = {
      previous: this.el.find('.previous'),
      next: this.el.find('.next'),
      preview: this.el.parent().find('.video-preview'),
      content: this.el.find('.carousel-content'),
      background: this.el.parent().find('.video-content'),
    }
    this.bind();
  }

  bind() {
    this.controls.content.html(
      this.render(this.videoList[0].content)
    );

    this.controls.previous.mouseenter(()=>{
      this.previewSelectedVideo(this.videoList.length - 1);
    });
    this.controls.previous.mouseleave(()=>this.resetToActive());
    this.controls.previous.click(()=>{
      this.loadSelectedVideo(this.controls.previous, this.videoList.length - 1)
    });

    this.controls.next.mouseenter(()=>this.previewSelectedVideo(1));
    this.controls.next.mouseleave(()=>this.resetToActive());
    this.controls.next.click(()=>this.loadSelectedVideo(this.controls.next, 1));
  }

  resetToActive() {
    this.player.play();
    setTimeout(()=>{
      this.controls.preview.removeClass('active');
      this.controls.content.html(
        this.render(this.videoList[this.currentVideo].content)
      );
    }, 200);
  }

  previewSelectedVideo(offset) {
    let selected = this.videoList[(this.currentVideo+offset) % this.videoList.length];

    this.controls.preview.css('background', `url(${ selected.poster })`);
    setTimeout(()=>{
      this.controls.preview.addClass('active');
      this.controls.content.html(this.render(selected.content));
    }, 200);
    setTimeout(()=> this.player.pause(), 500);
  }

  loadSelectedVideo(el, offset) {
    this.currentVideo = (this.currentVideo+offset) %3;
    let selected = this.videoList[this.currentVideo];

    el.attr('disabled', true);
    this.controls.preview.addClass('out');
    setTimeout(()=>{
      el.attr('disabled', false);
      this.controls.preview.removeClass('active out')
    }, 2000)
    this.controls.background.css('background', `url(${ selected.poster })`);
    this.player.loadSource(`${ selected.source }`);
    this.player.controls.playVideo();
  }

  render(content){
    return `<h1 class="display-4 display-xl text-white italic">${ content.title }</h1>
      <p class="lead lead-xl text-white">${ content.paragraph }</p>
      <a href="${ content.button.url }"
        class="btn btn-primary btn-lg active btn-attention mr-2 promo-toggle-controls"
        role="button" aria-pressed="true" id="promo-frame">
        ${ content.button.label }</a>`;
  }

}
