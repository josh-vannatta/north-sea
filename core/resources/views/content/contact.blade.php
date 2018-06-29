@extends('core/layout', [
  'title' => 'North Sea | About Us'
])

@section('content')
  <?php
    use App\Library\ContentComponent;
    $hero = new ContentComponent('about-us');
    $hero->define('hero', [
      'background' => 'assets/content/high-level/contact/break3.jpg',
      'title' => 'Contact us',
      'subtitle' => 'How can we help?'
    ]);
  ?>
  @include('content/posts/hero')
  <section class="post-content container py-5">
    <!-- Intro -->
    <div class="content-block py-5 rel">
      @include('content/posts/social')
      <h1 class="pre-display">We're here for you</h1>
      <h2 class="display-m mb-4">How can we help?</h2>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
    </div>
    <div class="content-block">
      <!-- Contact Response -->
      <div id="contact-response" class="p-5 z-depth-3 flex-center with-border rel hidden animated mb-5">
        <button type="button" class="passive close-me btn btn-close abs">X</button>
        <div class="contact-success-icon p-5 rel mr-4">
          <i class="fas fa-comment abs-center"></i>
          <i class="fas fa-check abs-center"></i>
        </div>
        <div class="ml-2">
          <h3 class="display-s">Your message was sent!</h3>
          <p>We'll respond as soon as possible. Feel free to get in touch directly if your matter is urgent.</p>
        </div>
      </div>
      <!-- Contact Form -->
      <div class="contact-form p-5 z-depth-2 animated rel mb-5">
        <div class="abs-full loading-overlay hidden">
          <div class="loader top-bar"></div>
        </div>
        <div id="contact-failure" class="alert alert-warning alert-dismissible fade show mb-4 hidden" role="alert">
          <strong class="mr-1">Holy guacamole!</strong> We couldn't send your message. Try again or give us a call.
          <button type="button" class="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="d-flex flex-row align-items-center mb-4 mt-2">
          <i class="far fa-envelope mr-3" style="font-size: 32px"></i>
          <h3 class="pre-display m-0 normal">Send us a message:</h3>
        </div>
        <form id="contact-form">
          <!--Name  -->
          <div class="input-group mb-3 justify-content-between">
            <div class="input-group-prepend">
              <span class="input-group-text mr-2">Your name</span>
            </div>
            <div class="col-sm-10 p-0">
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="name" autocomplete="name">
              <div class="error-messages abs"></div>
            </div>
          </div>
          <!-- Email  -->
          <div class="input-group mb-3 justify-content-between">
            <div class="input-group-prepend">
              <span class="input-group-text mr-2">Your email</span>
            </div>
            <div class="col-sm-10 p-0">
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="email" autocomplete="email">
              <div class="error-messages abs"></div>
            </div>
          </div>
          <!-- Subject -->
          <div class="input-group mb-3 justify-content-between">
            <div class="input-group-prepend">
              <span class="input-group-text mr-2">Subject</span>
            </div>
            <div class="col-sm-10 p-0">
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" name="subject" autocomplete="subject">
              <div class="error-messages abs"></div>
            </div>
          </div>
          <!-- Message  -->
          <div class="input-group mb-3 textarea justify-content-between">
            <div class="input-group-prepend">
              <span class="input-group-text mr-2" id="inputGroup-sizing-default">Message</span>
            </div>
            <div class="col-sm-10 p-0">
              <textarea class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" rows="4" name="message"></textarea>
              <div class="error-messages abs"></div>
            </div>
          </div>
          <button type="submit" class="btn btn-outline btn-dense mt-4">Submit</button>
        </form>
      </div>
    </div>
    <div class="content-block pb-5 rel">
      <h3 class="pre-display mb-4 normal">Reach Us Directly</h3>
      <div id="contact-map" class="contact-map mb-5"></div>
      <div class="row">
        <div class="col-sm-6">
          <h3 class="pre-display normal">Corporate HQ</h3>
            <p>Corporate Headquarters<br/>
            North Sea Ltd.<br/>
            1565 Broadway, Suite 200<br/>
            Boulder, CO 80989<p/>
        </div>
        <div class="col-sm-6">
          <h3 class="pre-display normal">General Contact</h3>
            <p>Toll-Free: 888-555-5555<br/>
            Phone: 720-555-5555<br/>
            Fax: 720-555-6666<br/>
            Email: info@northseabikes.com<p/>
        </div>
      </div>
    </div>
    <div class="content-block pb-5">
      <div class="d-flex flex-row align-items-center">
        <h3 class="pre-display normal mr-4">Or, find your answers here:</h3>
        <a href="{{ url('/about') }}" class="btn btn-outline btn-dense px-5">FAQ</a>
      </div>
    </div>
  </section>
@endsection
