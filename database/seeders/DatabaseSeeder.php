<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Wilayah;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $this->call([
            RoleSeeder::class,
        ]);

        User::create([
            'uuid' => str()->uuid(),
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'role_id' => '1',
            'wilayah_id' => '36',
            'created_at' => now(),
        ]);

        User::create([
            'uuid' => str()->uuid(),
            'name' => 'pusinafis',
            'email' => 'pusinafis@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'wilayah_id' => '35',
            'role_id' => '2',
            'created_at' => now(),
        ]);
        User::create([
            'uuid' => str()->uuid(),
            'name' => 'polda',
            'email' => 'polda@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'wilayah_id' => '1',
            'role_id' => '3',
            'created_at' => now(),
        ]);
        User::create([
            'uuid' => str()->uuid(),
            'name' => 'polres',
            'email' => 'polres@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'wilayah_id' => '1',
            'role_id' => '4',
            'created_at' => now(),
        ]);

        $wilayah = Wilayah::all();
        $data_user_per_wilayah = [];

        foreach ($wilayah as $key => $value) {
            for ($i = 0; $i < 5; $i++) {
                $data_user_per_wilayah[] = [
                    'uuid' => str()->uuid(),
                    'wilayah_id' => $value->id,
                    'name' => $value->wilayah_hukum,
                    'email' => str_replace(' ', '_', strtolower($value->wilayah_hukum)) . $i + 1 . '@gmail.com',
                    'role_id' => 3,
                    'password' => bcrypt('asdasdasd'),
                ];
            }
        }

        User::insert($data_user_per_wilayah);
    }
}
