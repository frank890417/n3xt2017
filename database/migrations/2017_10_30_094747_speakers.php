<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Speakers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('speakers',function($table){
            $table->increments('id');
            $table->integer('event_id')->nullable();
            $table->string("name")->nullable();
            $table->string("company")->nullable();
            $table->string("position")->nullable();
            $table->string("email")->nullable();
            $table->text("bio")->nullable();
            $table->string("headshot")->nullable();
            $table->text("qa")->nullable();
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
        //
        Schema::dropIfExists('speakers');
    }
}
