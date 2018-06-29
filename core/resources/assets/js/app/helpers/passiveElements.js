const passiveElements = (function() {
  'use strict';

  return {
    bind: bind
  }

  function bind() {
    $('.passive').parent().mouseenter(function(){ $(this).addClass('hover') });
    $('.passive').parent().mouseleave(function(){ $(this).removeClass('hover') });
    $('.passive').parent().click(function(){
      if (!$(this).hasClass('active')) $(this).addClass('active');
      else $(this).removeClass('active');
     });
    $('#app').click(()=>$('.passive').removeClass('active'));
    $('.passive.carat-down').replaceWith(function(){
      return carat($(this)[0].className)
    });
    $('.passive.close-me').click(function functionName() {
      $(this).parent().addClass('animated fadeOutRight');
      setTimeout(()=>$(this).parent().addClass('hidden'), 300);
    })
  }

  function closeMe() {

  }

  function carat(className) {
    let c = JSX.html('figure', {className: className}, insert('div', 2));
    return JSX.createElement(c)
  }

  function insert(el, amt = 1) {
    let inserts = [];
    for (amt; amt > 0; amt--) inserts.push(
      JSX.html(el, {className: 'insert'})
    );
    return inserts;
  }

}());
