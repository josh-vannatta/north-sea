@extends('core/layout', [
  'title' => 'North Sea | About Us'
])

@section('content')
  <?php
    use App\Library\ContentComponent;
    $hero = new ContentComponent('why-us');
    $hero->define('hero', [
      'background' => 'assets/content/high-level/why-us/happybikeman.jpg',
      'title' => 'Why choose us?'
    ]);
  ?>
  @include('content/posts/hero')
  <section class="post-content container py-5">
    <div class="content-block py-5 rel">
      @include('content/posts/social')
      <h1 class="pre-display">Our top priority</h1>
      <h2 class="display-m mb-5">Our customers</h2>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 class="display-s pt-5 mb-3">Built To Last</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
      <?= view('content/posts/youtube', ['video_id' => 'mrcbOd4bHjQ']) ?>
    <div class="content-block py-5 rel">
      <h3 class="display-s pt-5 mb-3">A WIDE VARIETY</h3>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
      <p>
        <a href="{{ url('/') }}" class="btn btn-outline btn-dense px-5">VISIT STORE</a>
      </p>
    </div>
  </section>
  @include('core\partials\newsletter-banner')
@endsection
