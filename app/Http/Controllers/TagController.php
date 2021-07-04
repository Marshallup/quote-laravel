<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

  public function tags()
  {
    return Tag::all();
  }

  public function create(Request $request)
  {
    $tag = Tag::create([
      'title' => $request['title'],
    ]);

    return $request;
  }
}
