<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('nfl_games', function (Blueprint $table) {
            $table->string('Kickoff', 10)->change();
            $table->dropColumn('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nfl_games', function (Blueprint $table) {
            $table->time('Kickoff');
            $table->bigInteger('user_id');
        });
    }
};
