<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Programs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('programs',function($table){
            $table->increments('id');
            $table->integer('event_id')->nullable();
            $table->string("title")->nullable();
            $table->string("subtitle")->nullable();
            $table->text("description")->nullable();
            $table->datetime("start_datetime");
            $table->datetime("end_datetime");
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
        Schema::dropIfExists('programs');
    }
}
