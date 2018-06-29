const coreElements = (function() {
  'use strict';
  return {
    bind: function() {
      coreHeader.bind();
      coreHeader.subheader.bind();
      coreOverlay.bind();
    }
  }

}());
