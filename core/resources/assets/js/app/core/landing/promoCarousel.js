const promoCarousel = (function() {
  'use strict';
  let _this = {
    bind: bind,
    newContent: newContent,
    render: render
  }

  let videoList = [], videoPlayer, currentVideo;
  function bind(player) {
    videoPlayer = player;
    currentVideo = 0;
    return _this;
  }

  function newContent(videos) {
    videos.forEach(video=> videoList.push(video));
    return _this;
  }

  let background, preview, content, movers;
  function render(element) {
    let el = $(element);
    let controls = el.find('.carousel-controls');
    movers = el.find('.movers');
    content = el.find('.carousel-content');
    background = el.parent().find('.video-background');
    preview = el.parent().find('.video-preview');

    content.html(
      renderContent(videoList[currentVideo].content)
    );
    videoList.forEach((video, index) => {
      controls.append(renderControl(index))
    });
  }

  function resetToActive(index) {
    if (index !== currentVideo) cycleMovers();
    setTimeout(()=>{
      preview.removeClass('active');
      if (index !== currentVideo)
        content.html( renderContent(videoList[currentVideo].content) );
    }, 200);
  }

  function previewVideo(index) {
    let selected = videoList[index];
    if (index !== currentVideo) cycleMovers();
    preview.css('background', `url(${ selected.poster })`);
    setTimeout(()=>{
      preview.addClass('active');
      if (index !== currentVideo)
        content.html(renderContent(selected.content));
    }, 200);
  }

  function loadVideo(e, index) {
    currentVideo = index;
    let selected = videoList[currentVideo];
    $('.carousel-controls .btn').removeClass('active');
    $(e.target).addClass('active');
    preview.addClass('out');
    setTimeout(()=>preview.removeClass('active out'), 2000)
    background.css('background', `url(${ selected.poster })`);
    videoPlayer.loadSource(`${ selected.source }`);
  }

  function cycleMovers() {
    movers.addClass('cycle-move');
    setTimeout(()=> {
      movers.removeClass('cycle-move');
    }, 1000)
  }

  function renderControl(index) {
    let active = index == 0 ? 'active' : '';
    let control = JSX.html('div', {
        className: 'carousel-control',
        onMouseEnter: () => previewVideo(index),
        onClick: (e) => loadVideo(e, index),
        onMouseLeave: () => resetToActive(index)
      }, [
        JSX.html('button', {
          className: `btn btn-secondary mr-3 ${ active }`,
          type: 'button',
          name: `video-${index}`
        })
    ]);
    return JSX.createElement(control)
  }

  function renderContent(content) {
    let c = JSX.html('article', null, [
      JSX.html('h1', {
        className: 'display-4 display-xl text-white uppercase mb-3 animated fadeIn'
      }, [content.title]),
      JSX.html('p', {
        className: 'lead lead-xl text-white mb-5 animated fadeIn'
      }, [content.paragraph]),
      JSX.html('a', {
        href: content.button.url,
        className: `btn btn-primary btn-sm py-3 px-4 active btn-attention
                    mr-2 promo-toggle-controls animated fadeIn`,
        role: 'button', ariaPressed: 'true', id: 'promo-frame'
      }, [content.button.label])
    ])
    return JSX.createElement(c);
  }

  return _this;

}());
