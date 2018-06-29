<section id="company-highlight" class="company-highlight rel" style="z-index: 1">
  <?php $hide_1 = true; ?>
  <div class="row">
    <div class="col-md-6 pr-2">
      <div class="featured-content rel mb-3">
        <figure
          class="pointer bg-center abs h-100 w-100"
          style="background: url({{ asset('assets/content/company/header-mountainbiking-28031.jpg') }})">
        </figure>
        <div class="overlay light"></div>
        <article class="abs-full d-flex flex-column justify-content-center">
          @include('partials/movers-shakers')
          <div class="content text-white rel p-5">
            <h3 class="display display-m mb-3 ">Our Story</h3>
            <p class="lead lead-l mb-5">Learn about our mission and values</p>
            <a href="{{ url('/about') }}" class="btn btn-outline-light btn-dense">LEARN MORE</a>
          </div>
        </article>
      </div>
    </div>
    <div class="col-md-6 pl-2">
      <div class="featured-content rel mb-3">
        <figure
          class="pointer  bg-center abs h-100 w-100"
          style="background: url({{ asset('assets/content/company/MountainBikes.jpg') }})">
        </figure>
        <div class="overlay light"></div>
        <article class="abs-full d-flex flex-column justify-content-center align-items-end">
          @include('partials/movers-shakers')
          <div class="content text-white rel p-5 text-right">
            <h3 class="display display-m mb-3 ">Why Choose Us?</h3>
            <p class="lead lead-l mb-5">We're making the best stuff ever</p>
            <a href="{{ url('/why-choose-us') }}" class="btn btn-outline-light btn-dense">LEARN WHY</a>
          </div>
        </article>
      </div>
    </div>

    <div class="col-md-6 pr-2">
      <div class="featured-content rel mb-3">
        <figure
          class="pointer  bg-center abs h-100 w-100"
          style="background: url({{ asset('assets/content/company/bike-front-tire.jpg') }})">
        </figure>
        <div class="overlay light"></div>
        <article class="abs-full d-flex flex-column justify-content-center">
            @include('partials/movers-shakers')
          <div class="content text-white rel p-5">
            <h3 class="display display-m mb-3 ">Find a retailer</h3>
            <p class="lead lead-l mb-5">We are carried by over 30 national brands</p>
            <a href="#" class="btn btn-outline-light btn-dense btn-swipe">START TODAY</a>
          </div>
        </article>
      </div>
    </div>
    <div class="col-md-6 pl-2">
      <div class="featured-content rel mb-3">
        <figure
          class="pointer  bg-center abs h-100 w-100"
          style="background: url({{ asset('assets/content/company/_rcd3859.jpg') }})">
        </figure>
        <div class="overlay light"></div>
        <article class="abs-full d-flex flex-column justify-content-center align-items-end">
            @include('partials/movers-shakers')
          <div class="content text-white rel p-5 text-right">
          <h3 class="display display-m mb-3 ">The Bike Shop</h3>
          <p class="lead lead-l mb-5">Check out our blog and read guides</p>
          <a href="#" class="btn btn-outline-light btn-dense">CHECK IT OUT</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
