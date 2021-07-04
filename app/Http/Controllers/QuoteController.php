<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

/**
 * @OA\Post(
 *     path="/api/quotes/create",
 *     tags={"Модель цитаты"},
 *     summary="Создает цитату",
 *     description="Создает цитату",
 *     @OA\Response(response="200", description="Создаем цитату")
 * )
 */

/**
 * @OA\Get(
 *     path="/api/quotes",
 *     tags={"Модель цитаты"},
 *     summary="Получает цитаты по 10 на странице",
 *     description="Получает цитаты по 10 на странице",
 *     @OA\Response(response="200", description="Список цитат с пагинацией по 10")
 * )
 */

/**
 * @OA\Get(
 *     path="/api/quotes/{id}",
 *     tags={"Модель цитаты"},
 *     summary="Получает цитату по ID",
 *     description="Получает цитату по ID",
 *     @OA\Parameter(name="id", description="ID цитаты", in="path", required=true),
 *     @OA\Response(response="200", description="Отдает конкретную цитату по id")
 * )
 */

class QuoteController extends Controller
{
    public function create(Request $request)
    {
      $quote = Quote::create([
        'author' => trim(htmlspecialchars($request['author'])),
        'text' => trim(htmlspecialchars($request['text'])),
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
