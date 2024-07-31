<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
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
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'role_id' => '1',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'pusinafis',
            'email' => 'pusinafis@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'role_id' => '2',
            'created_at' => now(),
        ]);
        User::create([
            'name' => 'polda',
            'email' => 'polda@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'role_id' => '3',
            'created_at' => now(),
        ]);
        User::create([
            'name' => 'polres',
            'email' => 'polres@gmail.com',
            'password' => bcrypt('asdasdasd'),
            'role_id' => '4',
            'created_at' => now(),
        ]);
    }
}
