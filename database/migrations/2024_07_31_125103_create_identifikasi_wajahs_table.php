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
        Schema::create('identifikasi_wajahs', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignId('user_id');
            $table->date('tanggal_proses');
            $table->string('dasar_rujukan');
            $table->string('ident_polda_res');
            $table->string('operator');
            $table->text('perkara');
            $table->string('foto_target');
            $table->string('foto_hasil_fr');
            $table->string('demo_grafi');
            $table->string('nama')->nullable();
            $table->string('nik')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identifikasi_wajahs');
    }
};
