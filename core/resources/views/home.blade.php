@extends('core.layout', [
  'title' => 'North Sea'
])

@section('content')
  @include('content/landing/hero-banner')
  @include('content/landing/product-highlight')
  @include('content/landing/company-highlight')
  @include('content/landing/insta-feed')
  @include('content/landing/testimonials')
  @include('core/partials/newsletter-banner')
@endsection
