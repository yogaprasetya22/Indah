<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SOPRekontruksiWajah extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $fillable = [
        'deskripsi'
    ];
}
