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
        Schema::create('tersangkas', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignId('wilayah_id');
            $table->text('foto_depan');
            $table->text('foto_kanan');
            $table->text('foto_kiri');
            $table->string('nama');
            $table->string('ttl');
            $table->text('alamat');
            $table->text('perkara');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tersangkas');
    }
};
