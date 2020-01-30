<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBasicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('basics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('logo');
            $table->text('steckers');
            $table->text('homeImage');
            $table->text('findUsImage');
            $table->text('contactUsImage');
            $table->text('ourFoodImage');
            $table->text('site_header');
            $table->text('categories');
            $table->text('channels');
            $table->text('locators');
            $table->text('facebook');
            $table->text('twitter');
            $table->text('instagram');
            $table->text('youtube');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('basics');
    }
}
