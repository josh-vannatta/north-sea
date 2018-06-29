<header class="core-header">
  <nav class="navbar navbar-dark d-flex flex-row justify-content-between px-4">

    <div class="d-flex flex-row">
      <a class="navbar-brand mr-4" href="{{ url('/') }}">
        <img src="{{ asset('assets/svg/nf_icon.svg') }}" alt="NS" height="30"/> NORTH SEA
      </a>
      <ul class="navbar-nav d-flex flex-row font-header pl-3">
        <li class="nav-item">
          <a class="nav-link core-dropdown dense px-0 mx-3" href="javascript::" data-desktop="0">PRODUCTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link core-dropdown dense px-0 mx-3" href="javascript::" data-desktop="1">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link core-dropdown dense px-0 mx-3" href="javascript::" data-desktop="2">MORE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link core-dropdown dense px-0 mx-3" href="javascript::" data-desktop="3">SIGN UP</a>
        </li>
      </ul>
    </div>

    <div class="navbar-cart-applet d-flex flex-row-reverse mr-3">
      <div class="cart-control ml-3 d-flex flex-row align-items-center">
        <a href="javascript:;" class="d-flex flex-column justify-content-center h-100">
          <i class="fas fa-shopping-cart text-white"></i>
        </a>
        <p class="mb-0 ml-2 text-white">(0)</p>
      </div>
      <div class="search-form d-flex flex-row align-items-center">
        <a href="javascript:;"><i class="fa fa-search text-white"></i></a>
        <form class="form-inline search-control w-100 ml-2">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>

  </nav>
  @include('core/partials/header-submenu')
</header>
