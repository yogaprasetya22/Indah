<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tersangka extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $fillable = [
        'user_id',
        'foto_depan',
        'foto_kanan',
        'foto_kiri',
        'nama',
        'ttl',
        'alamat',
        'perkara',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
