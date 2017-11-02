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
            $table->string("cover")->default("");
            $table->string("type")->default("");
            $table->string("title")->default("");
            $table->string("subtitle")->default("");
            $table->json("tag");
            $table->text("description")->nullable();
            $table->datetime("start_datetime");
            $table->datetime("end_datetime");
            $table->string("venue")->default("");
            $table->string("address")->default("");        
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
