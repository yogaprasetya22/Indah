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
            $created_at_identifikasi_wajah = now()->subDays(rand(0, 1095)); // Tanggal acak dalam tiga tahun terakhir
            $created_at_tersangka = now()->subDays(rand(0, 1095)); // Tanggal acak dalam tiga tahun terakhir

            $data_identifikasi_wajah[] = [
                "uuid" => str()->uuid(),
                "user_id" => $value->id,
                "tanggal_proses" => now(),
                "dasar_rujukan" => "awawawd",
                "ident_polda_res" =>  $value->wilayah->wilayah_hukum,
                "operator" => "asd",
                "perkara" => "asd",
                "foto_target" => "92a3ed96-4fc4-4dde-a7f7-a6083b6d23af_5eef1d1e75be9b210c0277b2bf3895a2.jpg",
                "foto_hasil_fr" => "962066ff-2d0e-4bd7-8ad4-d3c079a73cd3_5eef1d1e75be9b210c0277b2bf3895a2.jpg",
                "nama" => $value->wilayah->nama,
                "nik" => "asd",
                "ttl" => "asd",
                "alamat" => "asd",
                "created_at" => $created_at_identifikasi_wajah, // Tanggal acak
                "updated_at" => $created_at_identifikasi_wajah, // Menyamakan created_at dengan updated_at
            ];

            $data_tersangka[] = [
                "uuid" => str()->uuid(),
                "user_id" => $value->id,
                "foto_depan" => "fb10d83b-da9c-452b-83cf-fa652e6dd181_download-removebg-preview (1).png",
                "foto_kanan" => "b7de52eb-532c-4ce5-8d30-1659f4ed6d8b_download-removebg-preview (1).png",
                "foto_kiri" => "4cf280bf-3a31-44e9-8fb8-fcda6114b395_download-removebg-preview (1).png",
                "nama" => $value->wilayah->nama,
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
