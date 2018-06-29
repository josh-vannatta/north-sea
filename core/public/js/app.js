var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var googleMaps = function () {
  'use strict';

  var _this = {
    connect: connect,
    init: init,
    stylize: stylize
  };

  function connect(client_id) {
    document.body.appendChild(JSX.createElement(JSX.html('script', {
      type: 'text/javascript', defer: 'true', async: 'true',
      src: 'https://maps.googleapis.com/maps/api/js?key=' + client_id + '&callback=googleMaps.init'
    })));
    return listenFor(function (whether) {
      return awake == true;
    });
  }

  var awake = false;
  function init() {
    for (var prop in google.maps) {
      _this[prop] = google.maps[prop];
    }
    awake = true;
  }

  function stylize() {
    return styles;
  }

  var styles = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#444444"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 45
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffd400"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "hue": "#ff0000"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "color": "#c2c4c4"
    }, {
      "visibility": "on"
    }]
  }];

  return _this;
}();

var instagram = function () {
  'use strict';

  var _this = {
    connect: connect,
    getUserData: getUserData,
    getUserContent: getUserContent,
    getTagContent: getTagContent,
    renderTiles: renderTiles,
    setMaxTiles: setMaxTiles
  };

  var access_token = null;
  function connect(token) {
    access_token = token;
    return _this;
  }

  function retrieveFrom(endpoint) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: endpoint,
        success: function success(response) {
          return resolve(response);
        },
        error: function error(response) {
          return reject(response);
        }
      });
    });
  }

  function getUserData(token) {
    var endpoint = 'https://api.instagram.com/v1/users/self/?access_token=' + access_token;
    return retrieveFrom(endpoint);
  }

  function getUserContent(token) {
    var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token;
    return retrieveFrom(endpoint);
  }

  function getTagContent(tag) {
    var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '?access_token=' + access_token;
    return retrieveFrom(endpoint);
  }

  function renderTiles(el, tileArr) {
    var target = $(el);
    tileArr.some(function (tile, i) {
      if (i == maxTiles) return true;
      target.append(createTile(tile));
    });
  }

  var maxTiles = 8;
  function setMaxTiles(max) {
    maxTiles = max;
  }

  function createTile(data) {
    var caption = data.caption ? data.caption.text : 'View on Instagram';
    var tile = JSX.html('figure', {
      className: 'insta-tile m-3 z-depth-1 z-hover pointer',
      onClick: function onClick() {
        return window.open(data.link, '_blank');
      }
    }, [JSX.html('div', { className: 'overlay white light' }), JSX.html('img', { src: data.images.low_resolution.url }), JSX.html('div', { className: 'insta-gone text-white'
    }, [JSX.html('i', { className: 'fas fa-external-link-alt text-white' })]), JSX.html('div', { className: 'p-2 d-flex align-items-center to-instagram'
    }, [JSX.html('i', { className: 'fab fa-instagram mr-2' }), JSX.html('p', { className: 'm-0 dot-dot-dot normal' }, [caption])])]);
    return JSX.createElement(tile);
  }

  return _this;
}();

var VideoCarousel = function () {
  function VideoCarousel(player, carousel, videoList) {
    _classCallCheck(this, VideoCarousel);

    this.videoList = videoList;
    this.player = player;
    this.el = $(carousel);
    this.currentVideo = 0;
    this.controls = {
      previous: this.el.find('.previous'),
      next: this.el.find('.next'),
      preview: this.el.parent().find('.video-preview'),
      content: this.el.find('.carousel-content'),
      background: this.el.parent().find('.video-content')
    };
    this.bind();
  }

  _createClass(VideoCarousel, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      this.controls.content.html(this.render(this.videoList[0].content));

      this.controls.previous.mouseenter(function () {
        _this2.previewSelectedVideo(_this2.videoList.length - 1);
      });
      this.controls.previous.mouseleave(function () {
        return _this2.resetToActive();
      });
      this.controls.previous.click(function () {
        _this2.loadSelectedVideo(_this2.controls.previous, _this2.videoList.length - 1);
      });

      this.controls.next.mouseenter(function () {
        return _this2.previewSelectedVideo(1);
      });
      this.controls.next.mouseleave(function () {
        return _this2.resetToActive();
      });
      this.controls.next.click(function () {
        return _this2.loadSelectedVideo(_this2.controls.next, 1);
      });
    }
  }, {
    key: 'resetToActive',
    value: function resetToActive() {
      var _this3 = this;

      this.player.play();
      setTimeout(function () {
        _this3.controls.preview.removeClass('active');
        _this3.controls.content.html(_this3.render(_this3.videoList[_this3.currentVideo].content));
      }, 200);
    }
  }, {
    key: 'previewSelectedVideo',
    value: function previewSelectedVideo(offset) {
      var _this4 = this;

      var selected = this.videoList[(this.currentVideo + offset) % this.videoList.length];

      this.controls.preview.css('background', 'url(' + selected.poster + ')');
      setTimeout(function () {
        _this4.controls.preview.addClass('active');
        _this4.controls.content.html(_this4.render(selected.content));
      }, 200);
      setTimeout(function () {
        return _this4.player.pause();
      }, 500);
    }
  }, {
    key: 'loadSelectedVideo',
    value: function loadSelectedVideo(el, offset) {
      var _this5 = this;

      this.currentVideo = (this.currentVideo + offset) % 3;
      var selected = this.videoList[this.currentVideo];

      el.attr('disabled', true);
      this.controls.preview.addClass('out');
      setTimeout(function () {
        el.attr('disabled', false);
        _this5.controls.preview.removeClass('active out');
      }, 2000);
      this.controls.background.css('background', 'url(' + selected.poster + ')');
      this.player.loadSource('' + selected.source);
      this.player.controls.playVideo();
    }
  }, {
    key: 'render',
    value: function render(content) {
      return '<h1 class="display-4 display-xl text-white italic">' + content.title + '</h1>\n      <p class="lead lead-xl text-white">' + content.paragraph + '</p>\n      <a href="' + content.button.url + '"\n        class="btn btn-primary btn-lg active btn-attention mr-2 promo-toggle-controls"\n        role="button" aria-pressed="true" id="promo-frame">\n        ' + content.button.label + '</a>';
    }
  }]);

  return VideoCarousel;
}();

var VideoControls = function () {
  function VideoControls(videoPlayer, selectedControls) {
    _classCallCheck(this, VideoControls);

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
    };

    this.conceal();
    this.bind();
  }

  _createClass(VideoControls, [{
    key: 'bind',
    value: function bind() {
      var _this6 = this;

      // el.click(()=>toggleVideo()); 

      this.el.parent().mousemove(function () {
        if (_this6.concealed) {
          _this6.reveal();
          _this6.conceal();
        }
      });

      this.el.parent().mouseleave(function () {
        _this6.conceal();
      });

      this.el.find('.controls-bottom').mouseover(function () {
        _this6.focus = true;
        _this6.reveal();
      });
      this.el.find('.controls-bottom').mouseleave(function () {
        _this6.focus = false;
        _this6.conceal();
      });

      this.controls.pause.click(function () {
        return _this6.pauseVideo();
      });
      this.controls.play.click(function () {
        return _this6.playVideo();
      });

      this.controls.replay.click(function () {
        _this6.player.jumpTo(0);
        _this6.playVideo();
      });

      this.controls.seekBar.change(function () {
        _this6.player.jumpTo(Math.floor(_this6.player.prop('duration') * _this6.controls.seekBar.val() / 100));
      });

      this.player.video.addEventListener('timeupdate', function () {
        _this6.controls.seekBar.val(100 / _this6.player.prop('duration') * _this6.player.prop('currentTime'));
      });

      this.controls.expand.click(function () {
        _this6.player.fullscreen();
        _this6.playVideo();
      });
    }
  }, {
    key: 'playVideo',
    value: function playVideo() {
      this.controls.pause.removeClass('hidden');
      this.controls.play.addClass('hidden');
      this.player.play();
      this.player.show();
    }
  }, {
    key: 'pauseVideo',
    value: function pauseVideo() {
      this.controls.play.removeClass('hidden');
      this.controls.pause.addClass('hidden');
      this.player.pause();
      this.player.hide();
    }
  }, {
    key: 'toggleVideo',
    value: function toggleVideo() {
      if (!this.player.prop('paused')) this.playVideo();else this.pauseVideo();
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      this.concealed = false;
      this.el.removeClass('concealed');
    }
  }, {
    key: 'conceal',
    value: function conceal() {
      var _this7 = this;

      setTimeout(function () {
        if (!_this7.focus) {
          _this7.concealed = true;
          _this7.el.addClass('concealed');
        }
      }, 1000);
    }
  }]);

  return VideoControls;
}();

var VideoPlayer = function () {
  function VideoPlayer(el) {
    _classCallCheck(this, VideoPlayer);

    this.video = document.querySelector(el);
    this.controls = null;
    this.carousel = null;
  }

  _createClass(VideoPlayer, [{
    key: 'prop',
    value: function prop(_prop) {
      return this.video[_prop];
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }
  }, {
    key: 'play',
    value: function play() {
      this.video.play();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.video.style.opacity = 0;
    }
  }, {
    key: 'show',
    value: function show() {
      this.video.style.opacity = 1;
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(num) {
      this.video.currentTime = typeof num === 'number' ? num : 0;
    }
  }, {
    key: 'playbackSpeed',
    value: function playbackSpeed(rate) {
      this.video.playbackRate = typeof rate === 'number' ? rate : 1;
    }
  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      if (this.video.requestFullscreen) {
        this.video.requestFullscreen();
      } else if (this.video.mozRequestFullScreen) {
        this.video.mozRequestFullScreen(); // Firefox
      } else if (this.video.webkitRequestFullscreen) {
        this.video.webkitRequestFullscreen(); // Chrome and Safari
      }
    }
  }, {
    key: 'loadSource',
    value: function loadSource(url) {
      this.video.innerHTML = '';
      var src = document.createElement('source');
      src.setAttribute('src', url);

      this.video.appendChild(src);
      this.video.load();
      this.video.play();
    }
  }, {
    key: 'bindControls',
    value: function bindControls(controls) {
      this.controls = new VideoControls(this, controls);
    }
  }, {
    key: 'bindCarousel',
    value: function bindCarousel(carousel, videoList) {
      this.carousel - new VideoCarousel(this, carousel, videoList);
    }
  }]);

  return VideoPlayer;
}();

var contactPage = function () {
  'use strict';

  var northSeaHQ = { lat: 40.019, lng: -105.26 };
  var contactForm = {
    name: {
      error: 'Please provide a name',
      rules: { required: true }
    },
    email: {
      error: 'Please provide a valid email',
      rules: { required: true, email: true }
    },
    subject: {
      error: 'Please tell us what your email is about',
      rules: { required: true }
    },
    message: {
      error: 'Please include a message for us',
      rules: { required: true }
    }
  };

  function onLoad() {
    googleMaps.connect(ENV.GOOGLE.client_id).then(renderMap);
    dynamicForm.bind($('#contact-form'), {
      data: contactForm,
      onSubmit: function onSubmit(formData) {
        $('.contact-form').find('.loading-overlay').removeClass('hidden');
        $.ajax({ url: '/send-mail/contact', data: formData,
          type: 'POST', headers: { 'X-CSRF-TOKEN': ENV.CSRF } }).done(function (data) {
          setTimeout(function () {
            $('.contact-form').addClass('zoomOutRight');
            setTimeout(function () {
              $('.contact-form').css('display', 'none');
              $('#contact-response').removeClass('hidden');
              $('#contact-response').addClass('fadeIn');
            }, 500);
          }, 500);
        }).fail(function (data) {
          setTimeout(function () {
            $('#contact-failure').removeClass('hidden');
            $('.contact-form').find('.loading-overlay').addClass('hidden');
          }, 1000);
        });
      }
    });
    $('#contact-failure').find('.close').click(function () {
      return $('#contact-failure').addClass('hidden');
    });
    setTimeout(function () {
      return renderMap();
    }, 1000);
  }

  var mapEl = void 0,
      map = void 0,
      marker = void 0;
  function renderMap() {
    mapEl = document.getElementById('contact-map');
    map = new googleMaps.Map(mapEl, {
      zoom: 12,
      center: northSeaHQ,
      styles: googleMaps.stylize(),
      disableDefaultUI: true
    });
    marker = new googleMaps.Marker({
      position: northSeaHQ,
      icon: '/assets/svg/pin_2.png',
      map: map
    });
  }

  return {
    load: onLoad
  };
}();

var coreElements = function () {
  'use strict';

  return {
    bind: function bind() {
      coreHeader.bind();
      coreHeader.subheader.bind();
      coreOverlay.bind();
    }
  };
}();

var coreContent = function () {
  'use strict';

  var parts = [{ title: 'Wheels & Tires', img: 'big-wheel.jpg' }, { title: 'Frames & Forks', img: 'big-frame.jpg' }, { title: 'Handlebars', img: 'handlebars.png' }, { title: 'Drivetrain', img: 'drivetrain.jpg' }, { title: 'Saddles', img: 'saddle2.jpg' }, { title: 'Pedals', img: 'pedals.jpg' }, { title: 'Misc Parts', img: 'derailleur.jpg' }];
  var bikes = [{ title: 'Fixed Gear', img: 'fixie2.jpg' }, { title: 'Offroad', img: 'mountain.jpg' }, { title: 'Road & City', img: 'road.jpg' }, { title: 'Electric', img: 'electric.jpg' }];
  var accessories = [{ title: 'Helmets', img: 'helmet.jpg' }, { title: 'Pumps', img: 'pump.jpg' }, { title: 'Locks', img: 'lock.jpg' }, { title: 'Lights', img: 'light.jpg' }, { title: 'Bottles & Cages', img: 'cage.jpg' }];
  var tools = [{ title: 'Multitools', img: 'multitools.jpg' }, { title: 'Tool Kits', img: 'toolkit.jpg' }];

  return {
    products: [{ title: 'Parts', imgBase: '/assets/content/store/header/parts/', data: parts }, { title: 'Bicycles', imgBase: '/assets/content/store/header/bikes/', data: bikes }, { title: 'Accessories', imgBase: '/assets/content/store/header/accessories/', data: accessories }, { title: 'Tools', imgBase: '/assets/content/store/header/tools/', data: tools }],
    more: [{ title: 'About Us', link: '/about' }, { title: 'Community', link: '/community' }, { title: 'Why Choose Us', link: '/why-choose-us' }, { title: 'Our Team', link: '/team' }, { title: 'Contact Us', link: '/contact-us' }]
  };
}();

var coreHeader = function () {
  'use strict';

  var _this = {
    bind: header,
    subheader: {
      bind: subheader,
      show: showSubheader,
      hide: hideSubheader,
      clear: clearSubheader
    }
  };

  var navLink = void 0,
      sections = void 0;
  function header() {
    navLink = $('.core-dropdown');
    sections = [coreContent.products, null, coreContent.more];
  }

  var submenu = void 0,
      submenuNav = void 0,
      submenuContent = void 0,
      submenuControls = void 0,
      submenuScrub = void 0;
  function subheader() {
    submenu = $('#header-submenu');
    submenuNav = $('#submenu-nav');
    submenuContent = $('#submenu-content');
    submenuControls = {
      left: submenu.find('.control-left'),
      right: submenu.find('.control-right')
    };
    submenuScrub = 0;
    navLink.mouseenter(function () {
      showSubheader();
      coreOverlay.show();
      $(this).addClass('active');
      var active = $(this).attr('data-desktop');
      clearSubheader().then(function () {
        if (sections[active]) renderSubmenu(sections[active]);
      });
    });
    bindSubmenuControls();
  }

  function showSubheader() {
    navLink.removeClass('active');
    submenu.addClass('active');
  }

  function hideSubheader() {
    navLink.removeClass('active');
    submenu.removeClass('active');
    clearSubheader();
  }

  function clearSubheader() {
    var contentOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    submenuScrub = 0;
    if (!contentOnly) submenuNav.css('opacity', 0);
    submenuContent.css('opacity', 0);
    $('.shop-section').addClass('fadeOutRight');
    submenuControls.right.addClass('hidden');
    submenuControls.left.addClass('hidden');
    return new Promise(function (resolve) {
      return setTimeout(function () {
        if (!contentOnly) submenuNav.html('');
        submenuContent.html('');
        submenuContent.css('left', '0px');
        resolve();
      }, 300);
    });
  }

  function bindSubmenuControls() {
    submenuControls.right.click(function () {
      var cWidth = parseInt(submenuContent.css('left').replace('px', ''));
      submenuContent.css('left', cWidth - $('.shop-section')[submenuScrub].offsetWidth + 'px');
      submenuScrub++;
      submenuControls.left.removeClass('hidden');
      if ($('.shop-section').length - submenuScrub <= 3) $(this).addClass('hidden');
    });
    submenuControls.left.click(function () {
      submenuScrub--;
      var cWidth = parseInt(submenuContent.css('left').replace('px', ''));
      submenuContent.css('left', cWidth + $('.shop-section')[submenuScrub].offsetWidth + 'px');
      if (submenuScrub <= 0) $(this).addClass('hidden');
      if ($('.shop-section').length - submenuScrub >= 3) submenuControls.right.removeClass('hidden');
    });
  }

  function renderSubmenu(section) {
    submenuNav.css('opacity', 1);
    submenuContent.css('opacity', 1);
    section.forEach(function (subsection, i) {
      var active = i == 0 ? 'active' : null;
      if (subsection.link) active = ENV.pathName == subsection.link ? 'active' : null;
      submenuNav.append(JSX.createElement(JSX.html('a', {
        className: 'pre-display subnav-link focus-underline pointer ' + active,
        onClick: function onClick() {
          if (subsection.link) return window.location = subsection.link;
          $('.subnav-link').removeClass('active');
          $(this).addClass('active');
          clearSubheader(true).then(function () {
            submenuNav.css('opacity', 1);
            submenuContent.css('opacity', 1);
            renderSubsection(subsection.data, subsection.imgBase);
          });
        }
      }, [subsection.title])));

      if (active) renderSubsection(subsection.data, subsection.imgBase);
    });
  }

  function renderSubsection(content, base) {
    var offset = 0;
    if (content) content.forEach(function (item) {
      var el = JSX.html('div', { className: 'shop-section pointer animated mt-5 fadeIn' }, [JSX.html('div', { className: 'passive' }, [JSX.html('figure', { className: 'shop-figure mb-5' }, [JSX.html('img', { src: '' + base + item.img }), JSX.html('div', { className: 'plane-shadow auto' })]), JSX.html('h3', { className: 'display-m text-center' }, [item.title])])]);
      var subsection = JSX.createElement(el);
      submenuContent.append(subsection);

      offset += subsection.offsetWidth;
      passiveElements.bind();
    });
    if (offset > submenuContent[0].scrollWidth) submenuControls.right.removeClass('hidden');
  }

  return _this;
}();

var coreOverlay = function () {
  'use strict';

  var _this = {
    bind: bind,
    show: show,
    hide: hide
  };

  var overlay = void 0;
  function bind() {
    overlay = $('.core-overlay');
    overlay.mouseover(function () {
      hide();
      coreHeader.subheader.hide();
    });
  }

  function show() {
    overlay.removeClass('hidden');
    setTimeout(function () {
      return overlay.css('opacity', 1);
    }, 100);
  }

  function hide() {
    overlay.css('opacity', 0);
    setTimeout(function () {
      return overlay.addClass('hidden');
    }, 300);
  }

  return _this;
}();

var landingPage = function () {
  'use strict';

  var promoVideo = void 0;
  var promos = [{
    poster: '/assets/content/promo/ns-promo-frame.jpg',
    source: '/assets/content/promo/ns_promo_frame.mp4',
    content: {
      title: 'SERIOUS FRAMES',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: { label: 'SHOP FRAMES', url: 'abc.com' }
    }
  }, {
    poster: '/assets/content/promo/ns-promo-tricks.jpg',
    source: '/assets/content/promo/ns_promo_tricks.mp4',
    content: {
      title: 'GET SOME AIR',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: { label: 'SHOP WHEELS', url: 'abc.com' }
    }
  }, {
    poster: '/assets/content/promo/ns-promo-accessories.jpg',
    source: '/assets/content/promo/ns_promo_accessories.mp4',
    content: {
      title: 'DECK OUT YOUR RIDE',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: { label: 'SHOP GEAR', url: 'abc.com' }
    }
  }];

  var tList = [{
    icon: 'cycling-plus.png',
    content: 'Look no further than The North Sea. Their seats will make you so wet you\'ll slide right off'
  }, {
    icon: 'bike-mag.png',
    content: 'We all do the do. But if you want to do the do til it hurts, trust North Sea'
  }, {
    icon: 'dirt-bike.png',
    content: 'You\'re a dirty, dirty bike. Daddy needs to punish you... What? Linda, I\'m very busy right now. Make something up.'
  }, {
    icon: 'pop-sci.png',
    content: 'Did you know the higgs boson particle was discovered at North Sea? It\s true!'
  }];

  function onLoad() {
    promoVideo = new VideoPlayer('#promo-video');
    promoCarousel.bind(promoVideo).newContent(promos).render('#promo-carousel');

    testimonials.render('#testimonials', tList);

    instagram.connect(ENV.INSTAGRAM.token).getUserContent().then(function (tiles) {
      return instagram.renderTiles('#insta-feed', tiles.data);
    });
  }

  return {
    load: onLoad
  };
}();

var promoCarousel = function () {
  'use strict';

  var _this = {
    bind: bind,
    newContent: newContent,
    render: render
  };

  var videoList = [],
      videoPlayer = void 0,
      currentVideo = void 0;
  function bind(player) {
    videoPlayer = player;
    currentVideo = 0;
    return _this;
  }

  function newContent(videos) {
    videos.forEach(function (video) {
      return videoList.push(video);
    });
    return _this;
  }

  var background = void 0,
      preview = void 0,
      content = void 0,
      movers = void 0;
  function render(element) {
    var el = $(element);
    var controls = el.find('.carousel-controls');
    movers = el.find('.movers');
    content = el.find('.carousel-content');
    background = el.parent().find('.video-background');
    preview = el.parent().find('.video-preview');

    content.html(renderContent(videoList[currentVideo].content));
    videoList.forEach(function (video, index) {
      controls.append(renderControl(index));
    });
  }

  function resetToActive(index) {
    if (index !== currentVideo) cycleMovers();
    setTimeout(function () {
      preview.removeClass('active');
      if (index !== currentVideo) content.html(renderContent(videoList[currentVideo].content));
    }, 200);
  }

  function previewVideo(index) {
    var selected = videoList[index];
    if (index !== currentVideo) cycleMovers();
    preview.css('background', 'url(' + selected.poster + ')');
    setTimeout(function () {
      preview.addClass('active');
      if (index !== currentVideo) content.html(renderContent(selected.content));
    }, 200);
  }

  function loadVideo(e, index) {
    currentVideo = index;
    var selected = videoList[currentVideo];
    $('.carousel-controls .btn').removeClass('active');
    $(e.target).addClass('active');
    preview.addClass('out');
    setTimeout(function () {
      return preview.removeClass('active out');
    }, 2000);
    background.css('background', 'url(' + selected.poster + ')');
    videoPlayer.loadSource('' + selected.source);
  }

  function cycleMovers() {
    movers.addClass('cycle-move');
    setTimeout(function () {
      movers.removeClass('cycle-move');
    }, 1000);
  }

  function renderControl(index) {
    var active = index == 0 ? 'active' : '';
    var control = JSX.html('div', {
      className: 'carousel-control',
      onMouseEnter: function onMouseEnter() {
        return previewVideo(index);
      },
      onClick: function onClick(e) {
        return loadVideo(e, index);
      },
      onMouseLeave: function onMouseLeave() {
        return resetToActive(index);
      }
    }, [JSX.html('button', {
      className: 'btn btn-secondary mr-3 ' + active,
      type: 'button',
      name: 'video-' + index
    })]);
    return JSX.createElement(control);
  }

  function renderContent(content) {
    var c = JSX.html('article', null, [JSX.html('h1', {
      className: 'display-4 display-xl text-white uppercase mb-3 animated fadeIn'
    }, [content.title]), JSX.html('p', {
      className: 'lead lead-xl text-white mb-5 animated fadeIn'
    }, [content.paragraph]), JSX.html('a', {
      href: content.button.url,
      className: 'btn btn-primary btn-sm py-3 px-4 active btn-attention\n                    mr-2 promo-toggle-controls animated fadeIn',
      role: 'button', ariaPressed: 'true', id: 'promo-frame'
    }, [content.button.label])]);
    return JSX.createElement(c);
  }

  return _this;
}();

var testimonials = function () {
  'use strict';

  var _this = {
    render: render
  };

  var el = void 0,
      partners = void 0,
      tList = void 0,
      content = void 0,
      icons = void 0;
  function render(el, testimonials) {
    tList = testimonials;
    icons = $(el).find('.t-icons');
    content = $(el).find('.t-content');
    testimonials.forEach(function (t, i) {
      return icons.append(renderIcon(t.icon, i));
    });
    content.html(renderContent(tList[0].content));
  }

  function renderIcon(icon, index) {
    var active = index == 0 ? 'active' : '';
    var i = JSX.html('figure', {
      className: 'featured-in col-lg-3 col-sm-6 p-5 pointer ' + active,
      onClick: function onClick() {
        var _this8 = this;

        removeContent().then(function () {
          return generateContent(_this8, index);
        });
      }
    }, [JSX.html('img', { src: 'assets/content/featured-in/' + icon }), JSX.html('div', { className: 'rel' }, [JSX.html('div', { className: 'abs selector' }, [JSX.html('i', { className: 'fas fa-caret-down abs' })])])]);
    return JSX.createElement(i);
  }

  function renderContent(content) {
    var c = JSX.html('div', null, [JSX.html('span', { className: 'big-ass-quotes left animated fadeInRight' }, [JSX.html('i', { className: 'fas fa-quote-left' })]), JSX.html('span', { className: 'content display-xl italic light-weight animated fadeIn' }, [content]), JSX.html('span', { className: 'big-ass-quotes right animated fadeInLeft' }, [JSX.html('i', { className: 'fas fa-quote-right' })])]);

    return JSX.createElement(c);
  }

  function removeContent() {
    content.find('.left').addClass('fadeOutDown');
    setTimeout(function () {
      return content.find('.right').addClass('fadeOutDown');
    }, 100);
    content.find('.content').addClass('fadeOut');
    return new Promise(function (resolve) {
      return setTimeout(resolve, 600);
    });
  }

  function generateContent(icon, i) {
    content.html(renderContent(tList[i].content));
    $('.featured-in').removeClass('active');
    $(icon).addClass('active');
  }

  return _this;
}();

var ENV = function () {
  'use strict';

  return {
    BASE: 'http://127.0.0.1:8000/',
    PATH: null,
    GET: {},
    CSRF: null,
    INSTAGRAM: {
      client_id: '9debc23f0b5f43c189546dad7c3021f7',
      token: '8042519265.9debc23.de843fd90ae947f0929753c884ad1f1e'
    },
    GOOGLE: {
      client_id: 'AIzaSyAMCA4bdCOFRMScSDagfFwR5PplYok86ko'
    }
  };
}();

var dynamicForm = function () {
  'use strict';

  var _this = {
    bind: bind
  };

  function bind(el, config) {
    var form = config.data;
    var callback = config.onSubmit;

    var _loop = function _loop(input) {
      form[input]['state'] = ['pristine'];
      form[input]['element'] = $(el.find('[name=' + input + ']')[0]);
      form[input]['value'] = form[input].element.val();
      form[input].element.keyup(function () {
        if (!keyTimers[input]) keyTimeout(input, 100).then(validateInput(form[input]).then(validateForm(form)));
      });
      form[input].element.blur(function () {
        var pristine = form[input].state.indexOf('pristine');
        if (pristine >= 0) form[input].state[pristine] = 'dirty';
        validateInput(form[input]).then(validateForm(form));
      });
      validateInput(form[input]);
    };

    for (var input in form) {
      _loop(input);
    }
    form['state'] = ['pristine'];
    form['element'] = el;
    var button = $(el.find('[type=\'submit\']')[0]);
    if (button) {
      button.addClass('disabled');
      button.attr('disabled', 'disabled');
      form['submit'] = button;
      form.submit.click(function (e) {
        return callback(constructForm(e, form));
      });
    }
    form.element.submit(function (e) {
      return callback(constructForm(e, form));
    });
    validateForm(form, true);
  }

  var keyTimers = {};
  function keyTimeout(input, amt) {
    return new Promise(function (resolve, reject) {
      keyTimers[input] = true;
      setTimeout(function () {
        keyTimers[input] = false;
        resolve();
      }, amt);
    });
  }

  function constructForm(event, form) {
    event.preventDefault();
    if (!validateForm(form)) return false;
    var formData = {};
    for (var input in form) {
      if (redundant(input)) continue;
      formData[input] = form[input].value;
    }
    return formData;
  }

  function redundant(input) {
    return input == 'state' || input == 'element' || input == 'submit';
  }

  function setState(input, test) {
    if (!test) {
      var valid = input.state.indexOf('valid');
      if (valid >= 0) input.state[valid] = 'invalid';else if (input.state.includes('invalid')) return;else input.state.push('invalid');
      return;
    }
    var invalid = input.state.indexOf('invalid');
    if (invalid >= 0) input.state[invalid] = 'valid';else if (input.state.includes('valid')) return;else input.state.push('valid');
  }

  function setClass(element, input) {
    element.removeClass('pristine dirty valid invalid');
    element.addClass(input.state.join(' '));
  }

  function validateAsync(input, result) {
    return new Promise(function (resolve, reject) {
      if (!input.async) return resolve(true);
      var calls = 0;
      var success = 0;
      input.async.forEach(function (request) {
        $.ajax(request.url).done(function (response) {
          calls++;
          if (request.callback(response)) success++;
          if (calls == input.async.length) {
            if (success == calls) return resolve(true);
            return resolve(false);
          }
        }).fail(function (e) {
          return resolve(false);
        });
      });
    });
  }

  function renderErrors(errors, result) {
    var errorHTML = function errorHTML(message) {
      return '<small class="text-danger">' + message + '</small>';
    };
    if (typeof errors == 'string') return errorHTML(errors);
    for (var error in errors) {
      if (!result[error].approved) {
        return errorHTML(errors[error]);
        break;
      }
    }
  }

  function validateInput(input) {
    input.value = input.element.val();
    var result = approve.value(input.value, input.rules);
    var parent = input.element.closest('.bmd-form-group');
    var errors = parent.siblings('.error-messages');
    setState(input, result.approved);
    setClass(parent, input);
    return validateAsync(input, result).then(function (response) {
      if ((!result.approved || !response) && input.state.includes('dirty')) {
        parent.addClass('has-error');
        errors.html(renderErrors(input.error, result));
        return;
      }
      errors.html('');
      parent.removeClass('has-error');
    });
  }

  function validateForm(form) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var valid = true;
    for (var input in form) {
      if (redundant(input)) continue;
      if (form[input].state.includes('invalid')) valid = false;
    }
    var pristine = form.state.indexOf('pristine');
    if (pristine >= 0 && !init) form.state[pristine] = 'dirty';
    if (valid) {
      form.submit.removeClass('disabled');
      form.submit.attr('disabled', false);
    } else {
      form.submit.addClass('disabled');
      form.submit.attr('disabled', false);
    }
    setState(form, valid);
    setClass(form.element, form);
    return valid;
  }

  return _this;
}();

function listenFor(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (callback()) resolve();else listenFor(callback);
    }, 100);
  });
}

var JSX = function () {
  'use strict';

  var _EVENT_HANDLERS;

  var _this = {
    html: html,
    createElement: createElement,
    render: render
  };

  function html(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return { tag: tag, attrs: attrs, children: children };
  }

  function createElement(element) {
    var tagName = element.tag,
        props = element.attrs,
        childNodes = element.children;
    if (props === null) {
      props = {};
    }
    var tag = HTML_TAGS[tagName];
    var object = (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object';
    var localAttrs = object ? tag.attributes || {} : {};
    var attrs = Object.assign({}, GLOBAL_ATTRIBUTES, localAttrs);
    var tagType = object ? tag.name : tag;
    var el = document.createElement(tagType);
    Object.keys(props).forEach(function (prop) {
      if (prop in attrs) {
        el.setAttribute(attrs[prop], props[prop]);
      }
      if (prop in EVENT_HANDLERS) {
        el.addEventListener(EVENT_HANDLERS[prop], props[prop]);
      }
    });

    if ('style' in props) {
      var styles = props.style;
      Object.keys(styles).forEach(function (prop) {
        var value = styles[prop];
        if (typeof value === 'number') {
          el.style[prop] = value + 'px';
        } else if (typeof value === 'string') {
          el.style[prop] = value;
        } else {
          throw new Error('Expected "number" or "string" but received "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '"');
        }
      });
    }

    childNodes.forEach(function (childNode) {
      if ((typeof childNode === 'undefined' ? 'undefined' : _typeof(childNode)) === 'object') {
        el.appendChild(createElement(childNode));
      } else if (typeof childNode === 'string') {
        el.appendChild(document.createTextNode(childNode));
      } else {
        throw new Error('Expected "object" or "string" but received "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '"');
      }
    });

    return el;
  }

  function render(content, target) {
    target.appendChild(content);
  }

  var HTML_TAGS = {
    a: {
      name: 'a',
      attributes: {
        download: 'download',
        href: 'href',
        hrefLang: 'hreflang',
        ping: 'ping',
        referrerPolicy: 'referrerpolicy',
        rel: 'rel',
        target: 'target',
        type: 'type'
      }
    },
    abbr: 'abbr',
    address: 'address',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: {
      name: 'audio',
      attributes: {
        autoPlay: 'autoplay',
        autoBuffer: 'autobuffer',
        buffered: 'buffered',
        controls: 'controls',
        loop: 'loop',
        muted: 'muted',
        played: 'played',
        preload: 'preload',
        src: 'src',
        volume: 'volume'
      }
    },
    blockquote: 'blockquote',
    b: 'b',
    base: 'base',
    bdi: 'bdi',
    bdo: 'bdo',
    br: 'br',
    button: {
      name: 'button',
      attributes: {
        autoFocus: 'autofocus',
        disabled: 'disabled',
        form: 'form',
        formAction: 'formaction',
        formMethod: 'formmethod',
        formType: 'formtype',
        formValidate: 'formvalidate',
        formTarget: 'formtarget',
        type: 'type',
        value: 'value'
      }
    },
    canvas: {
      name: 'canvas',
      attributes: {
        height: 'height',
        width: 'width'
      }
    },
    caption: 'caption',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    data: {
      name: 'data',
      attributes: {
        value: 'value'
      }
    },
    datalist: 'datalist',
    dfn: 'dfn',
    div: 'div',
    dd: 'dd',
    del: 'del',
    details: {
      name: 'details',
      attributes: {
        open: 'open'
      }
    },
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: {
      name: 'embed',
      attributes: {
        height: 'height',
        src: 'src',
        type: 'type',
        width: 'width'
      }
    },
    fieldset: {
      name: 'fieldset',
      attributes: {
        disabled: 'disabled',
        form: 'form',
        name: 'name'
      }
    },
    figcaption: 'figcaption',
    figure: 'figure',
    footer: 'footer',
    form: {
      name: 'form',
      attributes: {
        acceptCharset: 'accept-charset',
        action: 'action',
        autocomplete: 'autocomplete',
        enctype: 'enctype',
        method: 'method',
        name: 'name',
        noValidate: 'novalidate',
        target: 'target'
      }
    },
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'header',
    hgroup: 'hgroup',
    hr: 'hr',
    i: 'i',
    input: {
      name: 'input',
      attributes: {
        accept: 'accept',
        autoFocus: 'autofocus',
        autoComplete: 'autocomplete',
        checked: 'checked',
        disabled: 'disabled',
        form: 'form',
        formAction: 'formaction',
        formMethod: 'formmethod',
        formType: 'formtype',
        formValidate: 'formvalidate',
        formTarget: 'formtarget',
        height: 'height',
        list: 'list',
        max: 'max',
        maxLength: 'maxlength',
        min: 'min',
        minLength: 'minlength',
        multiple: 'multiple',
        name: 'name',
        placeholder: 'placeholder',
        readOnly: 'readonly',
        required: 'required',
        size: 'size',
        src: 'src',
        step: 'step',
        type: 'type',
        value: 'value',
        width: 'width'
      }
    },
    img: {
      name: 'img',
      attributes: {
        alt: 'alt',
        crossOrigin: 'crossorigin',
        height: 'height',
        isMap: 'ismap',
        longDesc: 'longdesc',
        referrerPolicy: 'referrerpolicy',
        sizes: 'sizes',
        src: 'src',
        srcset: 'srcset',
        width: 'width',
        useMap: 'usemap'
      }
    },
    ins: 'ins',
    kbd: 'kbd',
    label: {
      name: 'label',
      attributes: {
        htmlFor: 'for'
      }
    },
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: {
      name: 'map',
      attributes: {
        name: 'name'
      }
    },
    mark: 'mark',
    meta: 'meta',
    meter: {
      name: 'meter',
      attributes: {
        form: 'form',
        high: 'high',
        low: 'low',
        min: 'min',
        max: 'max',
        optimum: 'optimum',
        value: 'value'
      }
    },
    nav: 'nav',
    ol: 'ol',
    object: {
      name: 'object',
      attributes: {
        form: 'form',
        height: 'height',
        name: 'name',
        type: 'type',
        typeMustmatch: 'typemustmatch',
        useMap: 'usemap',
        width: 'width'
      }
    },
    optgroup: {
      name: 'optgroup',
      attributes: {
        disabled: 'disabled',
        label: 'label'
      }
    },
    option: {
      name: 'option',
      attributes: {
        disabled: 'disabled',
        label: 'label',
        selected: 'selected',
        value: 'value'
      }
    },
    output: {
      name: 'output',
      attributes: {
        htmlFor: 'for',
        form: 'form',
        name: 'name'
      }
    },
    p: 'p',
    param: {
      name: 'param',
      attributes: {
        name: 'name',
        value: 'value'
      }
    },
    pre: 'pre',
    progress: {
      name: 'progress',
      attributes: {
        max: 'max',
        value: 'value'
      }
    },
    rp: 'rp',
    rt: 'rt',
    rtc: 'rtc',
    ruby: 'ruby',
    s: 's',
    samp: 'samp',
    script: {
      name: 'script',
      attributes: {
        async: 'async',
        charset: 'charset',
        defer: 'defer',
        src: 'src',
        type: 'type'
      }
    },
    section: 'section',
    select: {
      name: 'select',
      attributes: {
        autoFocus: 'autofocus',
        disabled: 'disabled',
        form: 'form',
        multiple: 'multiple',
        name: 'name',
        required: 'required',
        size: 'size'
      }
    },
    small: 'small',
    source: {
      name: 'source',
      attributes: {
        media: 'media',
        sizes: 'sizes',
        src: 'src',
        srcset: 'srcset',
        type: 'type'
      }
    },
    span: 'span',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    sup: 'sup',
    table: 'table',
    tbody: 'tbody',
    th: 'th',
    thead: 'thead',
    textarea: {
      name: 'textarea',
      attributes: {
        autoComplete: 'autocomplete',
        autoFocus: 'autofocus',
        cols: 'cols',
        disabled: 'disabled',
        form: 'form',
        maxLength: 'maxlength',
        minLength: 'minlength',
        name: 'name',
        placeholder: 'placeholder',
        readOnly: 'readonly',
        required: 'required',
        rows: 'rows',
        selectionDirection: 'selectionDirection',
        wrap: 'wrap'
      }
    },
    td: 'td',
    tfoot: 'tfoot',
    tr: 'tr',
    track: {
      name: 'track',
      attributes: {
        htmlDefault: 'default',
        kind: 'kind',
        label: 'label',
        src: 'src',
        srclang: 'srclang'
      }
    },
    time: 'time',
    title: 'title',
    u: 'u',
    ul: 'ul',
    video: {
      name: 'video',
      attributes: {
        autoPlay: 'autoplay',
        buffered: 'buffered',
        controls: 'controls',
        crossOrigin: 'crossorigin',
        height: 'height',
        loop: 'loop',
        muted: 'muted',
        played: 'played',
        poster: 'poster',
        preload: 'preload',
        src: 'src',
        width: 'width'
      }
    }
  };

  var GLOBAL_ATTRIBUTES = {
    accessKey: 'accesskey',
    className: 'class',
    contentEditable: 'contenteditable',
    contextMenu: 'contextmenu',
    dir: 'dir',
    draggable: 'draggable',
    dropZone: 'dropzone',
    hidden: 'hidden',
    id: 'id',
    itemId: 'itemid',
    itemProp: 'itemprop',
    itemRef: 'itemref',
    itemScope: 'itemscope',
    itemType: 'itemtype',
    lang: 'lang',
    spellCheck: 'spellcheck',
    tabIndex: 'tabindex',
    title: 'title',
    translate: 'translate'
  };

  var EVENT_HANDLERS = (_EVENT_HANDLERS = {
    onClick: 'click',
    onFocus: 'focus',
    onBlur: 'blur',
    onChange: 'change',
    onSubmit: 'submit',
    onInput: 'input',
    onResize: 'resize',
    onScroll: 'scroll',
    onWheel: 'mousewheel',
    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup'
  }, _defineProperty(_EVENT_HANDLERS, 'onMouseDown', 'mousedown'), _defineProperty(_EVENT_HANDLERS, 'onMouseMove', 'mousemove'), _defineProperty(_EVENT_HANDLERS, 'onMouseEnter', 'mouseenter'), _defineProperty(_EVENT_HANDLERS, 'onMouseOver', 'mouseover'), _defineProperty(_EVENT_HANDLERS, 'onMouseOut', 'mouseout'), _defineProperty(_EVENT_HANDLERS, 'onMouseLeave', 'mouseleave'), _defineProperty(_EVENT_HANDLERS, 'onTouchStart', 'touchstart'), _defineProperty(_EVENT_HANDLERS, 'onTouchEnd', 'touchend'), _defineProperty(_EVENT_HANDLERS, 'onTouchCancel', 'touchcancel'), _defineProperty(_EVENT_HANDLERS, 'onContextMenu', 'Ccntextmenu'), _defineProperty(_EVENT_HANDLERS, 'onDoubleClick', 'dblclick'), _defineProperty(_EVENT_HANDLERS, 'onDrag', 'drag'), _defineProperty(_EVENT_HANDLERS, 'onDragEnd', 'dragend'), _defineProperty(_EVENT_HANDLERS, 'onDragEnter', 'dragenter'), _defineProperty(_EVENT_HANDLERS, 'onDragExit', 'dragexit'), _defineProperty(_EVENT_HANDLERS, 'onDragLeave', 'dragleave'), _defineProperty(_EVENT_HANDLERS, 'onDragOver', 'dragover'), _defineProperty(_EVENT_HANDLERS, 'onDragStart', 'Dragstart'), _defineProperty(_EVENT_HANDLERS, 'onDrop', 'drop'), _defineProperty(_EVENT_HANDLERS, 'onLoad', 'load'), _defineProperty(_EVENT_HANDLERS, 'onCopy', 'copy'), _defineProperty(_EVENT_HANDLERS, 'onCut', 'cut'), _defineProperty(_EVENT_HANDLERS, 'onPaste', 'paste'), _defineProperty(_EVENT_HANDLERS, 'onCompositionEnd', 'compositionend'), _defineProperty(_EVENT_HANDLERS, 'onCompositionStart', 'compositionstart'), _defineProperty(_EVENT_HANDLERS, 'onCompositionUpdate', 'compositionupdate'), _defineProperty(_EVENT_HANDLERS, 'onKeyDown', 'keydown'), _defineProperty(_EVENT_HANDLERS, 'onKeyPress', 'keypress'), _defineProperty(_EVENT_HANDLERS, 'onKeyUp', 'keyup'), _defineProperty(_EVENT_HANDLERS, 'onAbort', 'Abort'), _defineProperty(_EVENT_HANDLERS, 'onCanPlay', 'canplay'), _defineProperty(_EVENT_HANDLERS, 'onCanPlayThrough', 'canplaythrough'), _defineProperty(_EVENT_HANDLERS, 'onDurationChange', 'durationchange'), _defineProperty(_EVENT_HANDLERS, 'onEmptied', 'emptied'), _defineProperty(_EVENT_HANDLERS, 'onEncrypted', 'encrypted '), _defineProperty(_EVENT_HANDLERS, 'onEnded', 'ended'), _defineProperty(_EVENT_HANDLERS, 'onError', 'error'), _defineProperty(_EVENT_HANDLERS, 'onLoadedData', 'loadeddata'), _defineProperty(_EVENT_HANDLERS, 'onLoadedMetadata', 'loadedmetadata'), _defineProperty(_EVENT_HANDLERS, 'onLoadStart', 'Loadstart'), _defineProperty(_EVENT_HANDLERS, 'onPause', 'pause'), _defineProperty(_EVENT_HANDLERS, 'onPlay', 'play '), _defineProperty(_EVENT_HANDLERS, 'onPlaying', 'playing'), _defineProperty(_EVENT_HANDLERS, 'onProgress', 'progress'), _defineProperty(_EVENT_HANDLERS, 'onRateChange', 'ratechange'), _defineProperty(_EVENT_HANDLERS, 'onSeeked', 'seeked'), _defineProperty(_EVENT_HANDLERS, 'onSeeking', 'seeking'), _defineProperty(_EVENT_HANDLERS, 'onStalled', 'stalled'), _defineProperty(_EVENT_HANDLERS, 'onSuspend', 'suspend '), _defineProperty(_EVENT_HANDLERS, 'onTimeUpdate', 'timeupdate'), _defineProperty(_EVENT_HANDLERS, 'onVolumeChange', 'volumechange'), _defineProperty(_EVENT_HANDLERS, 'onWaiting', 'waiting'), _defineProperty(_EVENT_HANDLERS, 'onAnimationStart', 'animationstart'), _defineProperty(_EVENT_HANDLERS, 'onAnimationEnd', 'animationend'), _defineProperty(_EVENT_HANDLERS, 'onAnimationIteration', 'animationiteration'), _defineProperty(_EVENT_HANDLERS, 'onTransitionEnd', 'transitionend'), _EVENT_HANDLERS);

  return _this;
}();

var passiveElements = function () {
  'use strict';

  return {
    bind: bind
  };

  function bind() {
    $('.passive').parent().mouseenter(function () {
      $(this).addClass('hover');
    });
    $('.passive').parent().mouseleave(function () {
      $(this).removeClass('hover');
    });
    $('.passive').parent().click(function () {
      if (!$(this).hasClass('active')) $(this).addClass('active');else $(this).removeClass('active');
    });
    $('#app').click(function () {
      return $('.passive').removeClass('active');
    });
    $('.passive.carat-down').replaceWith(function () {
      return carat($(this)[0].className);
    });
    $('.passive.close-me').click(function functionName() {
      var _this9 = this;

      $(this).parent().addClass('animated fadeOutRight');
      setTimeout(function () {
        return $(_this9).parent().addClass('hidden');
      }, 300);
    });
  }

  function closeMe() {}

  function carat(className) {
    var c = JSX.html('figure', { className: className }, insert('div', 2));
    return JSX.createElement(c);
  }

  function insert(el) {
    var amt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var inserts = [];
    for (amt; amt > 0; amt--) {
      inserts.push(JSX.html(el, { className: 'insert' }));
    }return inserts;
  }
}();

(function () {
  'use strict';

  $(document).ready(function () {
    // Bundles
    $('body').bootstrapMaterialDesign();
    // Enviroment
    ENV.PATH = window.location.pathname;
    ENV.CSRF = $('meta[name="csrf-token"]').attr('content');
    var search = window.location.search.replace('?', '').split('&');
    search.forEach(function (term) {
      var binding = term.split('=');
      ENV.GET[binding[0]] = binding[1];
    });
    // Elements
    coreElements.bind();
    passiveElements.bind();
    // Routes
    routes.some(function (route) {
      if (route.path === ENV.PATH) {
        route.controller.load();
        return true;
      }
    });
  });
})();

var routes = function () {
  'use strict';

  return [{ path: '/', controller: landingPage }, { path: '/home', controller: landingPage }, { path: '/contact-us', controller: contactPage }];
}();