<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function create(Request $request)
    {
      $quote = Quote::create([
        'author' => $request['author'],
        'text' => $request['text'],
      ]);
      $quote->tags()->sync($request['tags']);
      return ['success' => true];
    }

  public function showList()
  {
    return Quote::with('tags')->orderBy('created_at', 'DESC')->paginate(10);
  }

  public function showSingle($id)
  {
    return Quote::with('tags')->findOrFail($id);
  }
}
