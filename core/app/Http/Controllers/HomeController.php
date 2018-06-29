<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function contact(Request $request)
    {
      $request->validate([
        'name' => 'required|max:50',
        'email' => 'required|email|max:50',
        'subject' => 'required|max:100',
        'message' => 'required'
      ]);

      Mail::to('support@northsea.com')->send(
        new ContactMessage(
          $request['name'],
          $request['email'],
          $request['subject'],
          $request['message']
        )
      );
    }
    
}
