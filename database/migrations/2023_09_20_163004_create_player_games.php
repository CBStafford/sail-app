<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Query\Expression;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_games', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->year('year')->default(new Expression('(YEAR(CURDATE()))'));
            $table->integer('week');
            $table->integer('game');
            $table->string('visitor', 50); 		
            $table->string('home', 50);
            $table->integer('v_score')->default(0);
            $table->integer('h_score')->default(0);
            $table->integer('total')->default(0);	
            $table->integer('spread')->default(0);
            $table->string('winner', 50)->nullable();	            
            $table->boolean('locked')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_games');
    }
};
