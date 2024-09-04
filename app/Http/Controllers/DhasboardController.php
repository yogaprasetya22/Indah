<?php

namespace App\Http\Controllers;

use App\Models\IdentifikasiWajah;
use App\Models\Tersangka;
use App\Models\user;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

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
        $created_at_identifikasi_wajah = now()->subDays(rand(0, 1095)); // Tanggal acak dalam tiga tahun terakhir
        $created_at_tersangka = now()->subDays(rand(0, 1095)); // Tanggal acak dalam tiga tahun terakhir

        foreach ($user as $key => $value) {
            for ($i = 0; $i < 5; $i++) {

                $data_identifikasi_wajah[] = [
                    'uuid' => str()->uuid(),
                    "my_uuid" => $value->uuid,
                    "user_id" => $value->id,
                    "name_role" => $value->role->name_role,
                    "tanggal_proses" => now(),
                    "dasar_rujukan" => "awawawd",
                    "ident_polda_res" =>  $value->wilayah->wilayah_hukum,
                    "operator" => "test",
                    "perkara" => "test",
                    "foto_target" => "",
                    "foto_hasil_fr" => "",
                    "demo_grafi" => "",
                    "nama" => $value->wilayah->nama,
                    "nik" => "test",
                    "created_at" => $created_at_identifikasi_wajah, // Tanggal acak
                    "updated_at" => $created_at_identifikasi_wajah, // Menyamakan created_at dengan updated_at
                ];

                $data_tersangka[] = [
                    'uuid' => str()->uuid(),
                    "my_uuid" => $value->uuid,
                    "user_id" => $value->id,
                    "name_role" => $value->role->name_role,
                    "foto_depan"  => "",
                    "foto_kanan"  => "",
                    "foto_kiri"   => "",
                    "nama" => $value->wilayah->nama,
                    "ttl" => "test",
                    "alamat" => "test",
                    "perkara" => "test",
                    "created_at" => $created_at_tersangka, // Tanggal acak
                    "updated_at" => $created_at_tersangka, // Menyamakan created_at dengan updated_at
                ];
            }
        }

        // Identifikasi Wajah
        foreach ($data_identifikasi_wajah as $key => $value) {
            $my_uuid = $value['my_uuid'];
            $role = $value['name_role'];

            // Lokasi file asli
            $foto_target_path = public_path('identifikasi/foto-target/img.png');
            $foto_hasil_fr_path = public_path('identifikasi/foto-hasil-fr/img.png');
            $demo_grafi_path = public_path('identifikasi/foto-hasil-fr/img.png');

            $foto_target_name = Uuid::uuid4()->toString() . '_img.png';
            $foto_hasil_fr_name = Uuid::uuid4()->toString() . '_img.png';
            $demo_grafi_name = Uuid::uuid4()->toString() . '_img.png';

            $foto_target_storage_path = 'identifikasi-wajah/' . $role . '/' . $my_uuid . '/' . 'foto-target/' . $foto_target_name;
            $foto_hasil_fr_storage_path = 'identifikasi-wajah/' . $role . '/' . $my_uuid . '/' . 'foto-hasil-fr/' . $foto_hasil_fr_name;
            $demo_grafi_storage_path = 'identifikasi-wajah/' . $role . '/' . $my_uuid . '/' . 'demo-grafi/' . $demo_grafi_name;

            // Simpan file dari path yang ditentukan ke dalam storage
            Storage::disk('private')->put($foto_target_storage_path, file_get_contents($foto_target_path));
            Storage::disk('private')->put($foto_hasil_fr_storage_path, file_get_contents($foto_hasil_fr_path));
            Storage::disk('private')->put($demo_grafi_storage_path, file_get_contents($demo_grafi_path));

            // ganti nama file asli dengan nama file yang sudah disimpan
            $value['foto_target'] = $foto_target_name;
            $value['foto_hasil_fr'] =  $foto_hasil_fr_name;
            $value['demo_grafi'] =  $demo_grafi_name;
            $value['created_at'] = now()->subDays(rand(0, 1095));
            $value['updated_at'] = now()->subDays(rand(0, 1095));

            // Simpan data ke database
            IdentifikasiWajah::create($value);
        }

        // Tersangka
        foreach ($data_tersangka as $key => $value) {
            $my_uuid = $value['my_uuid'];
            $role = $value['name_role'];

            // Lokasi file asli
            $foto_depan_path = public_path('tersangka/foto-depan/img.jpeg');
            $foto_kanan_path = public_path('tersangka/foto-kanan/img.jpeg');
            $foto_kiri_path = public_path('tersangka/foto-kiri/img.jpeg');

            $foto_depan_name = Uuid::uuid4()->toString() . '_img.jpeg';
            $foto_kanan_name = Uuid::uuid4()->toString() . '_img.jpeg';
            $foto_kiri_name = Uuid::uuid4()->toString() . '_img.jpeg';

            $foto_depan_storage_path = 'tersangka/' . $role . '/' . $my_uuid . '/' . 'foto-depan/' . $foto_depan_name;
            $foto_kanan_storage_path = 'tersangka/' . $role . '/' . $my_uuid . '/' . 'foto-kanan/' . $foto_kanan_name;
            $foto_kiri_storage_path = 'tersangka/' . $role . '/' . $my_uuid . '/' . 'foto-kiri/' . $foto_kiri_name;

            // Simpan file dari path yang ditentukan ke dalam storage
            Storage::disk('private')->put($foto_depan_storage_path, file_get_contents($foto_depan_path));
            Storage::disk('private')->put($foto_kanan_storage_path, file_get_contents($foto_kanan_path));
            Storage::disk('private')->put($foto_kiri_storage_path, file_get_contents($foto_kiri_path));

            // ganti nama file asli dengan nama file yang sudah disimpan
            $value['foto_depan'] = $foto_depan_name;
            $value['foto_kanan'] =  $foto_kanan_name;
            $value['foto_kiri'] =  $foto_kiri_name;
            $value['created_at'] = now()->subDays(rand(0, 1095));
            $value['updated_at'] = now()->subDays(rand(0, 1095));

            // Simpan data ke database
            Tersangka::create($value);
        }


        return response()->json([
            'count' => $user->count(),
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
