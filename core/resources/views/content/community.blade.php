@extends('core/layout', [
  'title' => 'North Sea | About Us'
])

@section('content')
  <?php
    use App\Library\ContentComponent;
    $hero = new ContentComponent('community');
    $hero->define('hero', [
      'background' => 'assets/content/high-level/community/biggin.jpg',
      'title' => 'Community'
    ]);
  ?>
  @include('content/posts/hero')
  <section class="post-content container py-5">
    <div class="content-block py-5 rel">
      @include('content/posts/social')
      <h1 class="pre-display">We couldn't do it without</h1>
      <h2 class="display-m mb-5">A Passion for giving back</h2>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 class="display-s pt-5 mb-3">Our Charities</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </section>
  @include('core\partials\newsletter-banner')
@endsection
