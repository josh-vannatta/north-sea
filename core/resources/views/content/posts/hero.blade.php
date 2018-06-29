<section id="{{ $hero->name }}-banner" class="hero-post p-5 rel with-header">
  <div class="hero-bg bg-center py-5 abs-full" style="background: url({{ url($hero->background) }})">
    <img src="" alt="{{ url($hero->background) }}" class="hidden">
  </figure>
  <div class="overlay light"></div>
  @if (isset($hero->title) || isset($hero->subtitle))
  <div class="abs-full text-white">
    <div class="container h-100 flex-center rel hero-content">
      @include('partials/movers-shakers')
      <h2 class="display-xl w-100">{{ $hero->title }}</h2>
    </div>
  </div>
  @endif
</section>
