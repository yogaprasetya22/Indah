<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use App\Models\IdentifikasiWajah;
use App\Models\Tersangka;

class CacheIdentifikasiWajahTersangka implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Cache::remember('identifikasi_wajah', 60, function () {
            return IdentifikasiWajah::with(['user.wilayah', 'user.role'])->latest()->get();
        });

        Cache::remember('tersangka', 60, function () {
            return Tersangka::with(['user.wilayah', 'user.role'])->latest()->get();
        });
    }
}
