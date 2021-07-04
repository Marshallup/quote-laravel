<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * @OA\Get(
 *     path="/{any}",
 *     tags={"Vue приложение"},
 *     summary="app.blade.php - вид для приложения",
 *     description="По всем незарегестрированным роутам отдаем наше vue приложение",
 *     @OA\Response(response="200", description="Отдает вид, где расположено vue.")
 * )
 */

class FrontendController extends Controller
{
  public function app()
  {
    return view('app');
  }
}
