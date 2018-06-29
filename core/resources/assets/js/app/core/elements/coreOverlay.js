const coreOverlay = (function() {
  'use strict';
  let _this = {
    bind: bind,
    show: show,
    hide: hide
  }

  let overlay;
  function bind() {
    overlay = $('.core-overlay');
    overlay.mouseover(function() {
      hide();
      coreHeader.subheader.hide();
    })
  }

  function show() {
    overlay.removeClass('hidden');
    setTimeout(()=> overlay.css('opacity', 1), 100);
  }

  function hide() {
    overlay.css('opacity', 0);
    setTimeout(()=> overlay.addClass('hidden'), 300);
  }

  return _this;
}());
