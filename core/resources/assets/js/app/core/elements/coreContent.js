let coreContent = (function() {
  'use strict';

  const parts = [
    { title: 'Wheels & Tires', img: 'big-wheel.jpg' },
    { title: 'Frames & Forks', img: 'big-frame.jpg' },
    { title: 'Handlebars', img: 'handlebars.png'},
    { title: 'Drivetrain', img: 'drivetrain.jpg'},
    { title: 'Saddles', img: 'saddle2.jpg'},
    { title: 'Pedals', img: 'pedals.jpg'},
    { title: 'Misc Parts', img: 'derailleur.jpg'}
  ];
  const bikes = [
    { title: 'Fixed Gear', img: 'fixie2.jpg' },
    { title: 'Offroad', img: 'mountain.jpg' },
    { title: 'Road & City', img: 'road.jpg' },
    { title: 'Electric', img: 'electric.jpg' },
  ];
  const accessories = [
    { title: 'Helmets', img: 'helmet.jpg' },
    { title: 'Pumps', img: 'pump.jpg' },
    { title: 'Locks', img: 'lock.jpg' },
    { title: 'Lights', img: 'light.jpg' },
    { title: 'Bottles & Cages', img: 'cage.jpg' },
  ]
  const tools = [
    { title: 'Multitools', img: 'multitools.jpg' },
    { title: 'Tool Kits', img: 'toolkit.jpg' },
  ]

  return {
    products: [
      { title: 'Parts', imgBase: '/assets/content/store/header/parts/',  data: parts },
      { title: 'Bicycles', imgBase: '/assets/content/store/header/bikes/', data: bikes },
      { title: 'Accessories', imgBase: '/assets/content/store/header/accessories/', data: accessories },
      { title: 'Tools', imgBase: '/assets/content/store/header/tools/', data: tools },
    ],
    more: [
      { title: 'About Us', link: '/about' },
      { title: 'Community', link: '/community' },
      { title: 'Why Choose Us', link: '/why-choose-us' },
      { title: 'Our Team', link: '/team' },
      { title: 'Contact Us', link: '/contact-us'}
    ]
  }

}());
