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
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $identifikasi_wajah = IdentifikasiWajah::with(['wilayah.user'])->latest()->get();
        $tersangka = Tersangka::with(['wilayah.user'])->latest()->get();
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
        $data = IdentifikasiWajah::with(['wilayah.user'])->latest()->get();
        return Inertia::render('admin/IdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
            'data' => $data,
        ]);
    }

    public function Tersangka()
    {
        $data = Tersangka::with(['wilayah.user'])->latest()->get();
        return Inertia::render('admin/Tersangka', [
            'title' => 'Tersangka',
            'data' => $data,
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
}
