<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\TagController;
use \App\Http\Controllers\QuoteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('tags')->group(function () {
  Route::get('/', [TagController::class, 'tags']);
  Route::post('/create', [TagController::class, 'create']);
});
Route::prefix('quotes')->group(function() {
  Route::post('/create', [QuoteController::class, 'create']);
  Route::get('/{id}', [QuoteController::class, 'showSingle']);
  Route::get('/', [QuoteController::class, 'showList']);
});