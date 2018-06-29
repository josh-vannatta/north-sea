const coreHeader = (function() {
  'use strict';
  let _this = {
    bind: header,
    subheader: {
      bind: subheader,
      show: showSubheader,
      hide: hideSubheader,
      clear: clearSubheader,
    }
  }

  let navLink, sections;
  function header() {
    navLink = $('.core-dropdown');
    sections = [ coreContent.products, null, coreContent.more ];
  }

  let submenu, submenuNav, submenuContent, submenuControls, submenuScrub;
  function subheader() {
    submenu = $('#header-submenu');
    submenuNav = $('#submenu-nav');
    submenuContent = $('#submenu-content');
    submenuControls = {
      left: submenu.find('.control-left'),
      right: submenu.find('.control-right')
    }
    submenuScrub = 0;
    navLink.mouseenter(function(){
      showSubheader();
      coreOverlay.show();
      $(this).addClass('active');
      let active = $(this).attr('data-desktop');
      clearSubheader().then(()=>{
        if (sections[active]) renderSubmenu(sections[active]);
      })
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

  function clearSubheader(contentOnly = false) {
    submenuScrub = 0;
    if (!contentOnly) submenuNav.css('opacity', 0);
    submenuContent.css('opacity', 0);
    $('.shop-section').addClass('fadeOutRight')
    submenuControls.right.addClass('hidden');
    submenuControls.left.addClass('hidden');
    return new Promise(resolve => setTimeout( ()=> {
      if (!contentOnly) submenuNav.html('');
      submenuContent.html('');
      submenuContent.css('left', '0px');
      resolve();
    }, 300) );
  }

  function bindSubmenuControls() {
    submenuControls.right.click(function(){
      let cWidth = parseInt(submenuContent.css('left').replace('px', ''));
      submenuContent.css('left',
        (cWidth - $('.shop-section')[submenuScrub].offsetWidth) + 'px'
      )
      submenuScrub++;
      submenuControls.left.removeClass('hidden');
      if ($('.shop-section').length - submenuScrub  <= 3)
        $(this).addClass('hidden');
    })
    submenuControls.left.click(function(){
      submenuScrub--;
      let cWidth = parseInt(submenuContent.css('left').replace('px', ''));
      submenuContent.css('left',
        (cWidth + $('.shop-section')[submenuScrub].offsetWidth) + 'px'
      )
      if (submenuScrub <= 0) $(this).addClass('hidden');
      if ($('.shop-section').length - submenuScrub  >= 3)
        submenuControls.right.removeClass('hidden');
    })
  }

  function renderSubmenu(section) {
    submenuNav.css('opacity', 1);
    submenuContent.css('opacity', 1);
    section.forEach((subsection, i)=>{
      let active = i == 0 ? 'active' : null;
      if (subsection.link) active = ENV.pathName == subsection.link ? 'active' : null;
      submenuNav.append(JSX.createElement(
        JSX.html('a', {
          className: `pre-display subnav-link focus-underline pointer ${ active }`,
          onClick: function() {
            if (subsection.link) return window.location = subsection.link;
            $('.subnav-link').removeClass('active');
            $(this).addClass('active');
            clearSubheader(true).then(()=>{
              submenuNav.css('opacity', 1);
              submenuContent.css('opacity', 1);
              renderSubsection(subsection.data, subsection.imgBase);
            })
          }
        }, [subsection.title])
      ));

      if (active) renderSubsection(subsection.data, subsection.imgBase)
    })
  }

  function renderSubsection(content, base) {
    let offset = 0;
    if (content) content.forEach(item=>{
      let el = JSX.html('div', { className: 'shop-section pointer animated mt-5 fadeIn'}, [
        JSX.html('div', { className: 'passive' }, [
          JSX.html('figure', { className: 'shop-figure mb-5' }, [
            JSX.html('img', { src: `${ base }${ item.img }` }),
            JSX.html('div', { className: 'plane-shadow auto'})
          ]),
          JSX.html('h3', { className: 'display-m text-center' }, [item.title])
        ])
      ]);
      let subsection = JSX.createElement(el);
      submenuContent.append(subsection);

      offset += subsection.offsetWidth;
      passiveElements.bind();
    })
    if (offset > submenuContent[0].scrollWidth)
      submenuControls.right.removeClass('hidden');
  }

  return _this;
}());
