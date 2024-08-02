<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentifikasiWajah extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $fillable = [
        'user_id',
        'tanggal_proses',
        'ident_polda_res',
        'operator',
        'perkara',
        'foto_target',
        'foto_hasil_fr',
        'nama',
        'nik',
        'ttl',
        'alamat',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
