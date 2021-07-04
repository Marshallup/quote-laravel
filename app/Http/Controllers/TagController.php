<?php

namespace App\Http\Controllers;

use App\Models\Tag;

/**
 * @OA\Get(
 *     path="/api/tags",
 *     tags={"Модель Тега"},
 *     summary="Получает теги",
 *     description="Получает теги",
 *     @OA\Response(response="200", description="Получает теги")
 * )
 */

class TagController extends Controller
{

  public function tags()
  {
    return Tag::all();
  }
}
