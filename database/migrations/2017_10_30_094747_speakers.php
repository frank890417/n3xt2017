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
            $table->string("name")->default("");
            $table->string("company")->default("");
            $table->string("position")->default("");
            $table->string("email")->default("");
            $table->text("bio")->nullable();
            $table->string("headshot")->default("");
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
