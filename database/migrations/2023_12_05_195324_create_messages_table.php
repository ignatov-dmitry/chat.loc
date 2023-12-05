<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection('mongodb')->create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('thread_id');
            $table->string('sender_id');
            $table->string('receiver_id');
            $table->string('message');
        });
    }

    public function down(): void
    {
        Schema::connection('mongodb')->dropIfExists('messages');
    }
};
