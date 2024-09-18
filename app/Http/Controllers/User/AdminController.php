<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\IdentifikasiWajah;
use App\Models\Role;
use App\Models\SOPIdentifikasiWajah;
use App\Models\SOPPemotretanBarangBukti;
use App\Models\SOPPemotretanTKP;
use App\Models\SOPPemotretanTSK;
use App\Models\SOPRekontruksiWajah;
use App\Models\Tersangka;
use App\Models\User;
use App\Models\Wilayah;
use Faker\Core\Number;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $identifikasi_wajah = IdentifikasiWajah::select('uuid', 'created_at','tanggal_proses')
            ->with(['user.wilayah', 'user.role'])
            ->latest()
            ->get();
        $tersangka = Tersangka::select('uuid', 'created_at')
            ->with(['user.wilayah', 'user.role'])
            ->latest()
            ->get();

        return Inertia::render('admin/Admin', [
            'title' => 'Dashboard',
            'identifikasi_wajah' => $identifikasi_wajah,
            'tersangka' => $tersangka,
        ]);
    }
    public function User()
    {
        $user = User::with(['role', 'wilayah'])->where('role_id', '!=', 1)->latest()->get();
        $role = Role::all();
        $wilayah = Wilayah::all();
        return Inertia::render('admin/User', [
            'title' => 'Kelola User',
            'data' => $user,
            'wilayah' => $wilayah,
            'role' => $role,
        ]);
    }

    public function Identifikasiwajah()
    {
        $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])->latest()->get();
        return Inertia::render('admin/IdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
            'data' => $data,
        ]);
    }
    public function DhasboardIdentifikasiwajah($tahun)
    {
        $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])->where('created_at', 'like', '%' . $tahun . '%')->latest()->get();
        $wilayah = Wilayah::all();
        return Inertia::render('admin/detail/DashboardIdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
            'data' => $data,
            'tahun' => $tahun,
            'wilayah' => $wilayah,
        ]);
    }
    public function RekapIdentifikasiWajah($tahun, Request $request)
    {
        $data = null;

        if ($request->bulan && $request->wilayah) {
            $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])
                ->whereYear('tanggal_proses', $tahun)
                ->whereMonth('tanggal_proses', $request->bulan)
                ->whereHas('user', function ($query) use ($request) {
                    $query->where('wilayah_id', $request->wilayah);
                })
                ->get();
        } else if ($request->bulan) {
            $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])
                ->whereYear('tanggal_proses', $tahun)
                ->whereMonth('tanggal_proses', $request->bulan)
                ->get();
        } else if ($request->wilayah) {
            $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])
                ->whereYear('tanggal_proses', $tahun)
                ->whereHas('user', function ($query) use ($request) {
                    $query->where('wilayah_id', $request->wilayah);
                })
                ->get();
        } else {
            $data = IdentifikasiWajah::with(['user.wilayah', 'user.role'])
                ->whereYear('tanggal_proses', $tahun)
                ->get();
        }

        return Inertia::render('admin/detail/RekapIdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
            'data' => $data,
            'tahun' => $tahun,
            'bulan' => $request->bulan ? now()->month($request->bulan)->format('F') : null,
            'wilayah' => $request->wilayah ? Wilayah::find($request->wilayah)->nama : null,
        ]);
    }

    public function Tersangka()
    {
        $data = Tersangka::with(['user.wilayah', 'user.role'])->latest()->get();
        return Inertia::render('admin/Tersangka', [
            'title' => 'Tersangka',
            'data' => $data,
        ]);
    }

    public function DhasboardTersangka($tahun)
    {
        $data = Tersangka::with(['user.wilayah', 'user.role'])->where('created_at', 'like', '%' . $tahun . '%')->latest()->get();
        $wilayah = Wilayah::all();
        return Inertia::render('admin/detail/DashboardTersangka', [
            'title' => 'Tersangka',
            'data' => $data,
            'tahun' => $tahun,
            'wilayah' => $wilayah,
        ]);
    }

    public function RekapTersangka($tahun, Request $request)
    {
        $data = null;

        if ($request->bulan && $request->wilayah) {
            $data = Tersangka::with(['user.wilayah', 'user.role'])
                ->whereYear('created_at', $tahun)
                ->whereMonth('created_at', $request->bulan)
                ->whereHas('user', function ($query) use ($request) {
                    $query->where('wilayah_id', $request->wilayah);
                })
                ->get();
        } else if ($request->bulan) {
            $data = Tersangka::with(['user.wilayah', 'user.role'])
                ->whereYear('created_at', $tahun)
                ->whereMonth('created_at', $request->bulan)
                ->get();
        } else if ($request->wilayah) {
            $data = Tersangka::with(['user.wilayah', 'user.role'])
                ->whereYear('created_at', $tahun)
                ->whereHas('user', function ($query) use ($request) {
                    $query->where('wilayah_id', $request->wilayah);
                })
                ->get();
        } else {
            $data = Tersangka::with(['user.wilayah', 'user.role'])
                ->whereYear('created_at', $tahun)
                ->get();
        }

        return Inertia::render('admin/detail/RekapTersangka', [
            'title' => 'Tersangka',
            'data' => $data,
            'tahun' => $tahun,
            'bulan' => $request->bulan ? now()->month($request->bulan)->format('F') : null,
            'wilayah' => $request->wilayah ? Wilayah::find($request->wilayah)->nama : null,
        ]);
    }


    public function SOP_Pemotretan_TKP()
    {
        $data = SOPPemotretanTKP::first();
        return Inertia::render('admin/SOPAdmin/SOPPemotretanTKP', [
            'title' => 'SOP Pemotretan TKP',
            'data' => $data,
        ]);
    }

    public function createSOP_Pemotretan_TKP(Request $request)
    {
        $request->validate([
            'value' => 'required',
        ]);

        // jika data sudah ada di bagian SOP Pemotretan TKP maka akan diupdate
        $data = SOPPemotretanTKP::first();
        if ($data) {
            $data->update([
                'deskripsi' => $request->value,
            ]);
        } else {
            SOPPemotretanTKP::create([
                'deskripsi' => $request->value,
            ]);
        }

        return redirect()->back()->with('success', 'SOP Pemotretan TKP berhasil diupdate');
    }

    public function SOP_Pemotretan_Barang_Bukti()
    {
        $data = SOPPemotretanBarangBukti::first();
        return Inertia::render('admin/SOPAdmin/SOPPemotretanBarangBukti', [
            'title' => 'SOP Pemotretan Barang Bukti',
            'data' => $data,
        ]);
    }

    public function createSOP_Pemotretan_Barang_Bukti(Request $request)
    {
        $request->validate([
            'value' => 'required',
        ]);

        // jika data sudah ada di bagian SOP Pemotretan Barang Bukti maka akan diupdate
        $data = SOPPemotretanBarangBukti::first();
        if ($data) {
            $data->update([
                'deskripsi' => $request->value,
            ]);
        } else {
            SOPPemotretanBarangBukti::create([
                'deskripsi' => $request->value,
            ]);
        }

        return redirect()->back()->with('success', 'SOP Pemotretan Barang Bukti berhasil diupdate');
    }

    public function SOP_Pemotretan_TSK()
    {
        $data = SOPPemotretanTSK::first();
        return Inertia::render('admin/SOPAdmin/SOPPemotretanTSK', [
            'title' => 'SOP Pemotretan TSK',
            'data' => $data,
        ]);
    }

    public function createSOP_Pemotretan_TSK(Request $request)
    {
        $request->validate([
            'value' => 'required',
        ]);

        // jika data sudah ada di bagian SOP Pemotretan TSK maka akan diupdate
        $data = SOPPemotretanTSK::first();
        if ($data) {
            $data->update([
                'deskripsi' => $request->value,
            ]);
        } else {
            SOPPemotretanTSK::create([
                'deskripsi' => $request->value,
            ]);
        }

        return redirect()->back()->with('success', 'SOP Pemotretan TSK berhasil diupdate');
    }

    public function SOP_Identifikasi_Wajah()
    {
        $data = SOPIdentifikasiWajah::first();
        return Inertia::render('admin/SOPAdmin/SOPIdentifikasiWajah', [
            'title' => 'SOP Identifikasi Wajah',
            'data' => $data,
        ]);
    }

    public function createSOP_Identifikasi_Wajah(Request $request)
    {
        $request->validate([
            'value' => 'required',
        ]);

        // jika data sudah ada di bagian SOP Identifikasi Wajah maka akan diupdate
        $data = SOPIdentifikasiWajah::first();
        if ($data) {
            $data->update([
                'deskripsi' => $request->value,
            ]);
        } else {
            SOPIdentifikasiWajah::create([
                'deskripsi' => $request->value,
            ]);
        }

        return redirect()->back()->with('success', 'SOP Identifikasi Wajah berhasil diupdate');
    }

    public function SOP_Rekontruksi_Wajah()
    {
        $data = SOPRekontruksiWajah::first();
        return Inertia::render('admin/SOPAdmin/SOPRekontruksiWajah', [
            'title' => 'SOP Rekontruksi Wajah',
            'data' => $data,
        ]);
    }

    public function createSOP_Rekontruksi_Wajah(Request $request)
    {
        $request->validate([
            'value' => 'required',
        ]);

        // jika data sudah ada di bagian SOP Rekontruksi Wajah maka akan diupdate
        $data = SOPRekontruksiWajah::first();
        if ($data) {
            $data->update([
                'deskripsi' => $request->value,
            ]);
        } else {
            SOPRekontruksiWajah::create([
                'deskripsi' => $request->value,
            ]);
        }

        return redirect()->back()->with('success', 'SOP Rekontruksi Wajah berhasil diupdate');
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
        ], [
            'name.required' => 'Nama harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email tidak valid',
            'password.required' => 'Password harus diisi',
        ]);

        // create user
        User::create([
            'uuid' => str()->uuid(),
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => (int) 1,
        ]);

        return redirect()->back()->with('success', 'User berhasil ditambahkan');
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
        ], [
            'name.required' => 'Nama harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email tidak valid',
        ]);
        // update user
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return redirect()->back()->with('success', 'User berhasil diupdate');
    }
}
