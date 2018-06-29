@extends('core/layout', [
  'title' => 'North Sea | Find a Vendor'
]);

@section('content')
<div>
    <label for="raddressInput">Search location:</label>
    <input type="text" id="addressInput" size="15"/>
    <label for="radiusSelect">Radius:</label>
    <select id="radiusSelect" label="Radius">
      <option value="50" selected>50 kms</option>
      <option value="30">30 kms</option>
      <option value="20">20 kms</option>
      <option value="10">10 kms</option>
    </select>
    <input type="button" id="searchButton" value="Search"/>
  </div>
  <div>
    <select id="locationSelect" style="width: 10%; visibility: hidden"></select>
  </div>
  <div id="map" style="width: 100%; height: 90%"></div>
@endsection
