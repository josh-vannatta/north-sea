<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

// Top Level / Marketing
Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index');
Route::get('/about', function(){
  return view('content/about');
});
Route::get('/why-choose-us', function(){
  return view('content/why_choose_us');
});
Route::get('/community', function(){
  return view('content/community');
});
Route::get('/team', function(){
  return view('content/team');
});
Route::get('/contact-us', function(){
  return view('content/contact');
});
Route::post('/send-mail/contact', 'HomeController@contact');

// Vendors
Route::get('/find-a-vendor', 'VendorsController@index');
