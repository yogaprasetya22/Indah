<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentifikasiWajah extends Model
{
    use HasFactory;
    protected $primaryKey = 'uuid';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = [
        'uuid',
        'user_id',
        'tanggal_proses',
        'dasar_rujukan',
        'ident_polda_res',
        'operator',
        'perkara',
        'foto_target',
        'foto_hasil_fr',
        'demo_grafi',
        'nama',
        'nik',
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
