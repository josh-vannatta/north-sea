@extends('core/layout', [
  'title' => 'North Sea | About Us'
])

@section('content')
  <?php
    use App\Library\ContentComponent;
    $hero = new ContentComponent('team');
    $hero->define('hero', [
      'background' => 'assets/content/high-level/team/spoke.jpg',
      'title' => 'Our Team'
    ]);
  ?>
  @include('content/posts/hero')
  <section class="post-content container py-5">
    <div class="content-block py-5 rel">
      @include('content/posts/social')
      <h1 class="pre-display">Gearheads and officiados</h1>
      <h2 class="display-m mb-5">Met The Experts</h2>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>  <?php
        $team_members = [
          [ 'src' => 'assets\content\high-level\team\members.jpg', 'size' => '12' ]
        ];
        echo view('content/posts/images', ['images' => $team_members]);
       ?>
       <div class="content-block py-5 rel">
         <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <a href="#" class="inline-link">eiusmod</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p>
           <a href="{{ url('/about') }}" class="btn btn-outline btn-dense px-5">LEARN MORE</a>
         </p>
       </div>
  </section>
  @include('core\partials\newsletter-banner')
@endsection
