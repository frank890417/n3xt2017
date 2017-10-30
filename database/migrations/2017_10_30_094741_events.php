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
            $table->datetime("start_datetime");
            $table->datetime("end_datetime");
            $table->string("title");
            $table->json("tag");
            $table->text("description");
            $table->string("venue");
            $table->string("address");        
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
