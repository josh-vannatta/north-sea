<section id="landing-banner" class="jumbotron jumbotron-fluid landing-banner rel p-0 justify-content-center d-flex flex-column">
  <?php
    $video_name = 'promo';
    $video_controls = false;
    $video_overlay = true;
    $video_source = '/assets/content/promo/ns_promo_frame.mp4';
    $video_poster = '/assets/content/promo/ns-promo-frame.jpg'
  ?>
  @include('partials/video-player')
  <!-- Carousel -->
  <div class="video-carousel rel d-flex flex-row align-items-center h-100" style="z-index: 21" id="promo-carousel">
    <div class="container">
      @include('partials/movers-shakers')
      <div class="carousel-content w-100"></div>
    </div>
    <div class="carousel-controls d-flex flex-row py-3"></div>
  </div>
</section>
