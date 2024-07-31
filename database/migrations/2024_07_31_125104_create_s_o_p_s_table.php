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
        Schema::create('s_o_p_s', function (Blueprint $table) {
            $table->id();
            $table->text('SOP_Pemotretan_TKP');
            $table->text('SOP_Pemotretan_Barang_Bukti');
            $table->text('SOP_Pemotretan_TSK');
            $table->text('SOP_Identifikasi_Wajah');
            $table->text('SOP_Rekontruksi_Wajah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('s_o_p_s');
    }
};
