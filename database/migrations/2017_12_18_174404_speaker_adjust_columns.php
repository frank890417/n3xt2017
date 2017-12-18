<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SpeakerAdjustColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('speakers',function($table){
            $table->string("phone")->nullable();
            $table->string("year")->nullable();
            $table->text("programbook_bio")->nullable();
            $table->text("q_3word")->nullable();
            $table->text("q_job")->nullable();
            $table->text("q_suggestion")->nullable();
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
        Schema::table('speakers',function($table){
            $table->dropColumn("phone");
            $table->dropColumn("year");
            $table->dropColumn("programbook_bio");
            $table->dropColumn("q_3word");
            $table->dropColumn("q_job");
            $table->dropColumn("q_suggestion");
        });
    }
}
