@extends('core/layout', [
  'title' => 'North Sea | About Us'
])

@section('content')
  <?php
    use App\Library\ContentComponent;
    $hero = new ContentComponent('about-us');
    $hero->define('hero', [
      'background' => 'assets/content/high-level/about/oldies.jpg',
      'title' => 'About us'
    ]);
  ?>
  @include('content/posts/hero')
  <section class="post-content container py-5">
    <div class="content-block py-5 rel">
      @include('content/posts/social')
      <h1 class="pre-display">Learn our story</h1>
      <h2 class="display-m mb-5">Dedication since 1928</h2>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 class="display-s pt-5 mb-3">Culture</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <?php
      $images = [
        ['size' => '6', 'src' => 'assets/content/high-level/about/friends.jpg'],
        ['size' => '6', 'src' => 'assets/content/high-level/about/work.jpg']
      ]
     ?>
    @include('content/posts/images')
    <div class="content-block py-5 rel">
      <h3 class="display-s pt-5 mb-3">Mission & Values</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>
        <a href="{{ url('/why-choose-us') }}" class="btn btn-outline btn-dense px-5">Why Choose Us</a>
      </p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laborum.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <?php
      $images = [
        ['size' => '12', 'src' => 'assets/content/high-level/about/raleigh-sprite.jpg']
      ]
     ?>
    @include('content/posts/images')
    <div class="content-block py-5 rel">
      <h3 class="display-s pt-5 mb-3">Community</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>
        <a href="{{ url('/community') }}" class="btn btn-outline btn-dense px-5">Learn More</a>
      </p>
    </div>
  </section>
  @include('core\partials\newsletter-banner')
@endsection
