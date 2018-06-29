const contactPage = (function() {
  'use strict';

  let northSeaHQ = { lat: 40.019, lng: -105.26 };
  let contactForm = {
    name: {
      error: 'Please provide a name',
      rules: { required: true },
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
  }

  function onLoad() {
    googleMaps.connect(ENV.GOOGLE.client_id).then(renderMap);
    dynamicForm.bind($('#contact-form'), {
      data: contactForm,
      onSubmit: (formData) => {
        $('.contact-form').find('.loading-overlay').removeClass('hidden');
        $.ajax({ url: '/send-mail/contact', data: formData,
           type: 'POST', headers: {'X-CSRF-TOKEN': ENV.CSRF} })
        .done(data => {
          setTimeout(()=>{
            $('.contact-form').addClass('zoomOutRight');
            setTimeout(()=>{
              $('.contact-form').css('display', 'none');
              $('#contact-response').removeClass('hidden');
              $('#contact-response').addClass('fadeIn');
            }, 500);
          }, 500);
        })
        .fail(data => {
          setTimeout(()=>{
            $('#contact-failure').removeClass('hidden')
            $('.contact-form').find('.loading-overlay').addClass('hidden');
          }, 1000);
        })
      },
    });
    $('#contact-failure').find('.close').click(()=>$('#contact-failure').addClass('hidden'));
    setTimeout(()=>renderMap(), 1000);
  }

  let mapEl, map, marker;
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
   })
  }

  return {
    load: onLoad
  }

}());
