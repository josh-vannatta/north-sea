(function() {
  'use strict';

  $(document).ready(function(){
    // Bundles
    $('body').bootstrapMaterialDesign();
    // Enviroment
    ENV.PATH = window.location.pathname;
    ENV.CSRF = $('meta[name="csrf-token"]').attr('content');
    let search = window.location.search.replace('?', '').split('&');
    search.forEach(term => {
      let binding = term.split('=');
      ENV.GET[binding[0]] = binding[1];
    })
    // Elements
    coreElements.bind();
    passiveElements.bind();
    // Routes
    routes.some(route => {
      if (route.path === ENV.PATH) {
        route.controller.load();
        return true;
      }
    })
   });

}());
