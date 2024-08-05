<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentifikasiWajah extends Model
{
    use HasFactory;
    protected $guarded = ['uuid'];
    protected $fillable = [
        'uuid',
        'wilayah_id',
        'tanggal_proses',
        'dasar_rujukan',
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

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class);
    }
}
