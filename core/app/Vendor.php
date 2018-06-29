<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
  protected $fillable = [
      'name', 'address', 'lat', 'lng'
  ];
  
  protected $hidden = [
      'vendor_id'
  ];
}
