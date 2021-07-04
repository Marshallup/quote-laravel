<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      $tags = [
        'Политика',
        'Кино',
        'Спорт',
        'Работа',
        'Философия',
        'Хобби',
        'Здоровье',
        'Мысли',
        'Мотивация',
        'Стихи',
      ];
      foreach($tags as $tag) {
        Tag::create([
          'title' => $tag,
        ]);
      }
        // \App\Models\User::factory(10)->create();
    }
}
