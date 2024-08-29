<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FileController extends Controller
{
    public function getFile($direktori, $role, $uuid, $disk, $filename)
    {
        // Verifikasi autentikasi
        if (!Auth::check()) {
            abort(403, 'Unauthorized access');
        }

        // Path file di direktori 'storage/app/private/identitas-wajah'
        $path = storage_path('app/private/' . $direktori . '/' . $role . '/' . $uuid . '/' . $disk . '/' . $filename);

        // // Cek apakah file ada
        // if (!Storage::disk('local')->exists('private/' . $direktori . '/' . $disk . '/' . $filename)) {
        //    return redirect()->route('fail404');
        // }

        // Mengembalikan file sebagai response
        return response()->file($path);
    }
}
