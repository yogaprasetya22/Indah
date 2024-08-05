<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayah extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $fillable = [
        'nama',
        'wilayah_hukum',
        'markas',
    ];
    public $timestamps = false;

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function identifikasiWajah()
    {
        return $this->hasMany(IdentifikasiWajah::class);
    }

    public function tersangka()
    {
        return $this->hasMany(Tersangka::class);
    }
}
