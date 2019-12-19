<?php

use Illuminate\Database\Seeder;
use App\Channel;

class ApiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Channel::truncate();

        $faker = \Faker\Factory::create();

        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 50; $i++) {
            Channel::create([
                'name' => $faker->sentence,
                'Description' => $faker->paragraph,
            ]);
        }
    }
}
