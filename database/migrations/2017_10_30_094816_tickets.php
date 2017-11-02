<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Tickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('tickets',function($table){
            
            $table->increments('id');
            $table->integer('event_id')->nullable();
            $table->string("title")->default("");
            $table->string("type")->default("");
            $table->double("price")->default(0);
            $table->text("note")->nullable();
            $table->string("link",400)->default("");
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
        Schema::dropIfExists('tickets');
    }
}
