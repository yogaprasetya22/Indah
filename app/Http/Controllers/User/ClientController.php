<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\IdentifikasiWajah;
use App\Models\SOPIdentifikasiWajah;
use App\Models\SOPPemotretanBarangBukti;
use App\Models\SOPPemotretanTKP;
use App\Models\SOPPemotretanTSK;
use App\Models\SOPRekontruksiWajah;
use App\Models\Tersangka;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with(['role'])->latest()->get();
        return Inertia::render('client/Index', [
            'title' => "Dashboard",
            'data' => $user,
        ]);
    }

    // Identifikasi Wajah
    public function IdentifikasiWajah()
    {
        $data = IdentifikasiWajah::with(['wilayah'])->where(
            'wilayah_id',
            Auth::user()->wilayah_id
        )->latest()->get();
        return Inertia::render('client/IdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
            'data' => $data,
        ]);
    }

    public function createIdentifikasiWajah(Request $request)
    {
        $request->validate([
            'tanggal_proses' => 'required',
            'dasar_rujukan' => 'required',
            'ident_polda_res' => 'required',
            'operator' => 'required',
            'perkara' => 'required',
            'foto_target' => 'required|file|max:2048', // 2 MB
            'foto_hasil_fr' => 'required|file|max:2048', // 2 MB
            'nama' => 'required',
            'nik' => 'required',
            'ttl' => 'required',
            'alamat' => 'required',
        ], [
            'tanggal_proses.required' => 'Tanggal Proses harus diisi',
            'dasar_rujukan.required' => 'Dasar Rujukan harus diisi',
            'ident_polda_res.required' => 'Ident Polda Res harus diisi',
            'operator.required' => 'Operator harus diisi',
            'perkara.required' => 'Perkara harus diisi',
            'foto_target.required' => 'Foto Target harus diisi',
            'foto_target.max' => 'Ukuran Foto Target maksimal 2 MB',
            'foto_hasil_fr.required' => 'Foto Hasil FR harus diisi',
            'foto_hasil_fr.max' => 'Ukuran Foto Hasil FR maksimal 2 MB',
            'nama.required' => 'Nama harus diisi',
            'nik.required' => 'NIK harus diisi',
            'ttl.required' => 'TTL harus diisi',
            'alamat.required' => 'Alamat harus diisi',
        ]);


        // file upload
        $foto_target = $request->file('foto_target');
        $foto_hasil_fr = $request->file('foto_hasil_fr');

        $foto_target_name = Uuid::uuid4()->toString() . '_' . $foto_target->getClientOriginalName();
        $foto_hasil_fr_name = Uuid::uuid4()->toString() . '_' . $foto_hasil_fr->getClientOriginalName();

        $foto_target->storeAs('private/identifikasi-wajah/foto-target', $foto_target_name);
        $foto_hasil_fr->storeAs('private/identifikasi-wajah/foto-hasil-fr', $foto_hasil_fr_name);

        $data = [
            'uuid' => str()->uuid(),
            'wilayah_id' => Auth::user()->wilayah_id,
            'tanggal_proses' => date('Y-m-d', strtotime($request->tanggal_proses)),
            'dasar_rujukan' => $request->dasar_rujukan,
            'ident_polda_res' => $request->ident_polda_res,
            'operator' => $request->operator,
            'perkara' => $request->perkara,
            'foto_target' => $foto_target_name,
            'foto_hasil_fr' => $foto_hasil_fr_name,
            'nama' => $request->nama,
            'nik' => $request->nik,
            'ttl' => $request->ttl,
            'alamat' => $request->alamat,
        ];

        IdentifikasiWajah::create($data);

        return redirect()->back()->with('success', 'Data Identifikasi Wajah berhasil ditambahkan');
    }

    // Tersangka
    public function Tersangka()
    {
        $data = Tersangka::with(['wilayah'])->where(
            'wilayah_id',
            Auth::user()->wilayah_id
        )->latest()->get();
        return Inertia::render('client/Tersangka', [
            'title' => 'Tersangka',
            'data' => $data,
        ]);
    }

    public function createTersangka(Request $request)
    {
        $request->validate([
            'foto_depan' => 'required|file|max:2048', // 2 MB
            'foto_kanan' => 'required|file|max:2048', // 2 MB
            'foto_kiri' => 'required|file|max:2048',  // 2 MB
            'nama' => 'required',
            'ttl' => 'required',
            'alamat' => 'required',
            'perkara' => 'required',
        ], [
            'foto_depan.required' => 'Foto Depan harus diisi',
            'foto_depan.max' => 'Ukuran Foto Depan maksimal 2 MB',
            'foto_kanan.required' => 'Foto Kanan harus diisi',
            'foto_kanan.max' => 'Ukuran Foto Kanan maksimal 2 MB',
            'foto_kiri.required' => 'Foto Kiri harus diisi',
            'foto_kiri.max' => 'Ukuran Foto Kiri maksimal 2 MB',
            'nama.required' => 'Nama harus diisi',
            'ttl.required' => 'TTL harus diisi',
            'alamat.required' => 'Alamat harus diisi',
            'perkara.required' => 'Perkara harus diisi',
        ]);


        // file upload
        $foto_depan = $request->file('foto_depan');
        $foto_kanan = $request->file('foto_kanan');
        $foto_kiri = $request->file('foto_kiri');

        $foto_depan_name = Uuid::uuid4()->toString() . '_' . $foto_depan->getClientOriginalName();
        $foto_kanan_name = Uuid::uuid4()->toString() . '_' . $foto_kanan->getClientOriginalName();
        $foto_kiri_name = Uuid::uuid4()->toString() . '_' . $foto_kiri->getClientOriginalName();

        $foto_depan->storeAs('private/tersangka/foto-depan', $foto_depan_name);
        $foto_kanan->storeAs('private/tersangka/foto-kanan', $foto_kanan_name);
        $foto_kiri->storeAs('private/tersangka/foto-kiri', $foto_kiri_name);

        $data = [
            'uuid' => str()->uuid(),
            'wilayah_id' => Auth::user()->wilayah_id,
            'foto_depan' => $foto_depan_name,
            'foto_kanan' => $foto_kanan_name,
            'foto_kiri' => $foto_kiri_name,
            'nama' => $request->nama,
            'ttl' => $request->ttl,
            'alamat' => $request->alamat,
            'perkara' => $request->perkara,
        ];

        Tersangka::create($data);

        return redirect()->back()->with('success', 'Data Tersangka berhasil ditambahkan');
    }

    // SOP Pemotretan TKP
    public function SOP_Pemotretan_TKP()
    {
        $data = SOPPemotretanTKP::first();
        return Inertia::render('client/SOP/SOPPemotretanTKP', [
            'title' => 'SOP Pemotretan TKP',
            'data' => $data,
        ]);
    }

    // SOP Pemotretan Barang Bukti
    public function SOP_Pemotretan_Barang_Bukti()
    {
        $data = SOPPemotretanBarangBukti::first();
        return Inertia::render('client/SOP/SOPPemotretanBarangBukti', [
            'title' => 'SOP Pemotretan Barang Bukti',
            'data' => $data,
        ]);
    }

    // SOP Pemotretan TSK
    public function SOP_Pemotretan_TSK()
    {
        $data = SOPPemotretanTSK::first();
        return Inertia::render('client/SOP/SOPPemotretanTSK', [
            'title' => 'SOP Pemotretan TSK',
            'data' => $data,
        ]);
    }

    // SOP Identifikasi Wajah
    public function SOP_Identifikasi_Wajah()
    {
        $data = SOPIdentifikasiWajah::first();
        return Inertia::render('client/SOP/SOPIdentifikasiWajah', [
            'title' => 'SOP Identifikasi Wajah',
            'data' => $data,
        ]);
    }

    // SOP Rekontruksi Wajah
    public function SOP_Rekontruksi_Wajah()
    {
        $data = SOPRekontruksiWajah::first();
        return Inertia::render('client/SOP/SOPRekontruksiWajah', [
            'title' => 'SOP Rekontruksi Wajah',
            'data' => $data,
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
        // validate request
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'role_id' => 'required',
            'wilayah_id' => 'required',
        ], [
            'name.required' => 'Nama harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email tidak valid',
            'password.required' => 'Password harus diisi',
            'role_id.required' => 'Role harus diisi',
            'wilayah_id.required' => 'Wilayah harus diisi',
        ]);

        // create user
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => (int)$request->role_id,
            'wilayah_id' => (int)$request->wilayah_id,
        ]);

        return redirect()->back()->with('success', 'User berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'role_id' => 'required',
            'wilayah_id' => 'required',
        ], [
            'name.required' => 'Nama harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email tidak valid',
            'role_id.required' => 'Role harus diisi',
            'wilayah_id.required' => 'Wilayah harus diisi',
        ]);

        // update user
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => (int)$request->role_id,
            'wilayah_id' => (int)$request->wilayah_id,
        ]);

        return redirect()->back()->with('success', 'User berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete user
        User::where('id', $id)->delete();
        return redirect()->back()->with('success', 'User berhasil dihapus');
    }
}
