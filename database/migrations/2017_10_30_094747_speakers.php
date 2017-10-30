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
            $table->string("name");
            $table->string("company");
            $table->string("position");
            $table->string("email");
            $table->text("bio");
            $table->string("headshot");
            $table->text("qa");
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
