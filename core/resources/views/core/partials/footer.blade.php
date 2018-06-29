<footer class="footer py-5">
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4 col-xs-4">
        <h5 class="footer-heading text-white mb-3">SHOP & SERVICE</h3>
        <ul class="mb-5">
          <li><a href="#">SPECIALTY STORE</a></li>
          <li><a href="#">MY ACCOUNT & ORDER HISTORY</a></li>
          <li><a href="#">FIND A DEALER</a></li>
          <li><a href="#">SHOP INFO & FAQ</a></li>
          <li><a href="#">GUIDES / BLOG</a></li>
        </ul>
        <a href="#"></a>
      </div>
      <div class="col-md-5 col-xs-4">
        <h5 class="footer-heading text-white mb-3">CONNECT WITH US</h3>
        <div class="d-flex flex-row social-icons">
          <a href="#" class="pr-3"> <i class="fab social-connect fa-facebook-f text-white mr-4"></i> </a>
          <a href="#" class="pr-3"> <i class="fab social-connect fa-twitter text-white mr-4"></i> </a>
          <a href="#" class="pr-3"> <i class="fab social-connect fa-youtube text-white mr-4"></i> </a>
          <a href="#" class="pr-3"> <i class="fab social-connect fa-linkedin-in text-white mr-4"></i> </a>
          <a href="#" class="pr-3"> <i class="fab social-connect fa-amazon text-white mr-4"></i> </a>
        </div>
        <h5 class="footer-heading text-white mb-3">COMPANY</h3>
        <ul class="mb-5">
          <li>
            <p>DENVER, CO 80203 <br />PLANET EARTH, MILKY WAY</p>
          </li>
          <li>
            <p>(749) 555-5555</p>
          </li>
        </>
      </div>
      <div class="col-md-3 col-xs-4">
        <h5 class="footer-heading text-white mb-3">ABOUT</h3>
        <ul class="mb-5">
          <li><a href="{{ url('/about') }}">ABOUT NORTH SEA</a></li>
          <li><a href="{{ url('/community') }}">COMMUNITY</a></li>
          <li><a href="{{ url('/why-choose-us') }}">WHY CHOOSE US</a></li>
          <li><a href="{{ url('/team') }}">TEAM MEMBERS</a></li>
          <li><a href="{{ url('/contact-us') }}">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="w-100 copyright">
    <div class="container d-flex flex-row justify-content-between">
      <p class="mb-0">@<?= date("Y") ?> NORTH SEA LIMITED
      </p>
      <div class="d-flex flex-row align-items-center">
        <i class="fab fa-cc-visa text-white mr-3 pmt-allowed"></i>
        <i class="fab fa-cc-mastercard text-white mr-3 pmt-allowed"></i>
        <i class="fab fa-cc-amex text-white mr-3 pmt-allowed"></i>
        <i class="fab fa-cc-discover text-white mr-3 pmt-allowed"></i>
        <i class="fab fa-cc-paypal text-white mr-3 pmt-allowed"></i>
      </div>
    </div>
  </div>
</footer>
