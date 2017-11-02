<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Agencies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('agencies',function($table){
            $table->increments('id');
            $table->integer('event_id')->nullable();
            $table->string("name")->default("");;
            $table->string("link")->default("");;
            $table->string("logo")->default("");;
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
        Schema::dropIfExists('agencies');
    }
}
