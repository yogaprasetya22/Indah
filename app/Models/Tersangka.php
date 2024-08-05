<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tersangka extends Model
{
    use HasFactory;
    protected $guarded = ['uuid'];
    protected $fillable = [
        'uuid',
        'wilayah_id',
        'foto_depan',
        'foto_kanan',
        'foto_kiri',
        'nama',
        'ttl',
        'alamat',
        'perkara',
    ];

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class);
    }
}
