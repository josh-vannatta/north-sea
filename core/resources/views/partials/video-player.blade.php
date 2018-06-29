<!-- Video -->
<div
  class="video-background abs-full bg-center"
  style="z-index: 0; background: url({{ $video_poster }})"
  id="{{ $video_name}}-background">
  <video
    autoplay muted loop playsinline
    poster="{{ $video_poster }}"
    id="{{ $video_name }}-video">
    <source
      src="{{ $video_source }}"
      type="video/mp4">
  </video>
</div>
<!-- Overlay -->
@if ($video_overlay)
<div class="overlay" style="z-index: 2"></div>
<div class="video-preview abs-full bg-center" style="z-index: 1" ></div>
@endif
<!-- Controls -->
@if ($video_controls)
<div class="video-controls" style="z-index: 20" id="{{ $video_name }}-controls">
  <div class="controls-top controls-top p-4 d-flex flex-row-reverse p-3">
    <button type="button" name="replay" class="no-btn pointer expand">
      <i class="fas fa-expand text-white ctrls-icon"></i>
    </button>
  </div>
  <div class="controls-bottom p-3  d-flex flex-row">
    <button type="button" name="replay" class="no-btn pointer replay mr-2">
      <i class="fas fa-sync-alt text-white ctrls-icon"></i>
    </button>
    <button type="button" name="pause" class="no-btn pointer pause">
      <i class="fas fa-pause text-white ctrls-icon"></i>
    </button>
    <button type="button" name="pause" class="no-btn pointer play hidden ">
      <i class="fas fa-play text-white ctrls-icon"></i>
    </button>
    <div class="form-group w-100  p-3 m-0">
      <input type="range" class="form-control-range seek-bar">
    </div>
  </div>
</div>
@endif
