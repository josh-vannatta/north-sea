const routes = (function() {
  'use strict';
  return [
    { path: '/', controller: landingPage },
    { path: '/home', controller: landingPage },
    { path: '/contact-us', controller: contactPage }
  ];

}());
