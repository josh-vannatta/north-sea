const landingPage = (function() {
  'use strict';
  let promoVideo;
  const promos = [
    {
      poster: '/assets/content/promo/ns-promo-frame.jpg',
      source: '/assets/content/promo/ns_promo_frame.mp4',
      content: {
        title: 'SERIOUS FRAMES',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: { label: 'SHOP FRAMES', url: 'abc.com' },
      }
    }, {
      poster: '/assets/content/promo/ns-promo-tricks.jpg',
      source: '/assets/content/promo/ns_promo_tricks.mp4',
      content: {
        title: 'GET SOME AIR',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: { label: 'SHOP WHEELS', url: 'abc.com' },
      }
    }, {
      poster: '/assets/content/promo/ns-promo-accessories.jpg',
      source: '/assets/content/promo/ns_promo_accessories.mp4',
      content: {
        title: 'DECK OUT YOUR RIDE',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: { label: 'SHOP GEAR', url: 'abc.com' },
      }
    },
  ];

  const tList = [
    {
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
    },
  ]

  function onLoad() {
    promoVideo = new VideoPlayer('#promo-video');
    promoCarousel.bind(promoVideo)
      .newContent(promos).render('#promo-carousel');

    testimonials.render('#testimonials', tList);

    instagram.connect( ENV.INSTAGRAM.token ).getUserContent()
        .then(tiles => instagram.renderTiles( '#insta-feed', tiles.data));
  }

  return {
    load: onLoad,
  }

}());
