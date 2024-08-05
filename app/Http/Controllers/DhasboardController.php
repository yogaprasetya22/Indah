<?php

namespace App\Http\Controllers;

use App\Models\IdentifikasiWajah;
use App\Models\Tersangka;
use App\Models\user;
use App\Models\Wilayah;
use Illuminate\Http\Request;

class DhasboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function generateUser(): \Illuminate\Http\JsonResponse
    {
        $user = User::with('wilayah')->where('role_id', '!=', 1)->get();

        $data_identifikasi_wajah = [];
        $data_tersangka = [];

        foreach ($user as $key => $value) {
            $created_at_identifikasi_wajah = now()->subDays(rand(0, 1825)); // Tanggal acak dalam lima tahun terakhir
            $created_at_tersangka = now()->subDays(rand(0, 1825)); // Tanggal acak dalam lima tahun terakhir
            
            $data_identifikasi_wajah[] = [
                "uuid" => str()->uuid(),
                "wilayah_id" => $value->wilayah_id,
                "tanggal_proses" => now(),
                "dasar_rujukan" => "awawawd",
                "ident_polda_res" => "asd",
                "operator" => "asd",
                "perkara" => "asd",
                "foto_target" => "12f05390-45f7-40b3-809d-d2eccccccda5_download-removebg-preview (4).png",
                "foto_hasil_fr" => "c09120d0-2f25-444f-9232-11a68c8ef3c1_download-removebg-preview (4).png",
                "nama" => "asd",
                "nik" => "asd",
                "ttl" => "asd",
                "alamat" => "asd",
                "created_at" => $created_at_identifikasi_wajah, // Tanggal acak
                "updated_at" => $created_at_identifikasi_wajah, // Menyamakan created_at dengan updated_at
            ];

            $data_tersangka[] = [
                "uuid" => str()->uuid(),
                "wilayah_id" => $value->wilayah_id,
                "foto_depan" => "fb10d83b-da9c-452b-83cf-fa652e6dd181_download-removebg-preview (1).png",
                "foto_kanan" => "b7de52eb-532c-4ce5-8d30-1659f4ed6d8b_download-removebg-preview (1).png",
                "foto_kiri" => "4cf280bf-3a31-44e9-8fb8-fcda6114b395_download-removebg-preview (1).png",
                "nama" => "asd",
                "ttl" => "asd",
                "alamat" => "asd",
                "perkara" => "asd",
                "created_at" => $created_at_tersangka, // Tanggal acak
                "updated_at" => $created_at_tersangka, // Menyamakan created_at dengan updated_at
            ];
        }

        IdentifikasiWajah::insert($data_identifikasi_wajah);
        Tersangka::insert($data_tersangka);

        return response()->json([
            'count' => $user->count(),
            'data_identifikasi_wajah' => $data_identifikasi_wajah,
            'data_tersangka' => $data_tersangka,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(user $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(user $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, user $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user $user)
    {
        //
    }
}
