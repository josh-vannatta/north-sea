<div class="row px-3 flex-center">
  @foreach($images as $image)
  <figure class="col-sm-12 col-md-{{ $image['size'] }}">
    <img src="{{ url($image['src']) }}" alt="" class="w-100 grime">
  </figure>
  @endforeach
</div>
