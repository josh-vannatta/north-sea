const testimonials = (function() {
  'use strict';

  let _this = {
    render: render
  }

  let el, partners, tList, content, icons;
  function render(el, testimonials) {
    tList = testimonials;
    icons = $(el).find('.t-icons');
    content = $(el).find('.t-content');
    testimonials.forEach((t, i) => icons.append(renderIcon(t.icon, i)) );
    content.html(renderContent(tList[0].content))
  }

  function renderIcon(icon, index) {
    let active = index == 0 ? 'active' : '';
    let i = JSX.html('figure', {
        className: `featured-in col-lg-3 col-sm-6 p-5 pointer ${ active }`,
        onClick: function(){ removeContent().then(() => generateContent(this, index)) }
      }, [
        JSX.html('img', { src: `assets/content/featured-in/${ icon }`}),
        JSX.html('div', { className: 'rel'}, [
          JSX.html('div', { className: 'abs selector'}, [
            JSX.html('i', { className: 'fas fa-caret-down abs'})
          ])
        ])
     ]);
   return JSX.createElement(i);
  }

  function renderContent(content) {
    let c = JSX.html('div', null, [
      JSX.html('span',
        { className: 'big-ass-quotes left animated fadeInRight' },
        [ JSX.html('i', { className: 'fas fa-quote-left'}) ]
      ),
      JSX.html('span',
        { className: 'content display-xl italic light-weight animated fadeIn' },
        [ content ]
      ),
      JSX.html('span',
        { className: 'big-ass-quotes right animated fadeInLeft' },
        [ JSX.html('i', { className: 'fas fa-quote-right'}) ]
      ),
    ])

    return JSX.createElement(c);
  }

  function removeContent() {
    content.find('.left').addClass('fadeOutDown');
    setTimeout(()=> content.find('.right').addClass('fadeOutDown'), 100);
    content.find('.content').addClass('fadeOut');
    return new Promise(resolve=> setTimeout(resolve, 600))
  }

  function generateContent(icon, i) {
    content.html(renderContent(tList[i].content));
    $('.featured-in').removeClass('active');
    $(icon).addClass('active');
  }

  return _this;
}());
