<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Events extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('events',function($table){
            $table->increments('id');
            $table->string("cover")->nullable();
            $table->string("type")->nullable();
            $table->string("title")->nullable();
            $table->string("subtitle")->nullable();
            $table->json("tag")->nullable();
            $table->json("speaker")->nullable();
            $table->text("description")->nullable();
            $table->datetime("start_datetime");
            $table->datetime("end_datetime");
            $table->string("venue")->nullable();
            $table->string("address")->nullable();        
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
        Schema::dropIfExists('events');
    }
}
