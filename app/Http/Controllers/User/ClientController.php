<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SOPIdentifikasiWajah;
use App\Models\SOPPemotretanBarangBukti;
use App\Models\SOPPemotretanTKP;
use App\Models\SOPPemotretanTSK;
use App\Models\SOPRekontruksiWajah;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with(['role'])->latest()->get();
        return Inertia::render('client/Index', [
            'title' => Auth::user()->role->name_role,
            'data' => $user,
        ]);
    }

    public function IdentifikasiWajah()
    {
        return Inertia::render('client/IdentifikasiWajah', [
            'title' => 'Identifikasi Wajah',
        ]);
    }

    public function Tersangka()
    {
        return Inertia::render('client/Tersangka', [
            'title' => 'Tersangka',
        ]);
    }

    public function SOP_Pemotretan_TKP()
    {
        $data = SOPPemotretanTKP::first();
        return Inertia::render('client/SOP/SOPPemotretanTKP', [
            'title' => 'SOP Pemotretan TKP',
            'data' => $data,
        ]);
    }
    public function SOP_Pemotretan_Barang_Bukti()
    {
        $data = SOPPemotretanBarangBukti::first();
        return Inertia::render('client/SOP/SOPPemotretanBarangBukti', [
            'title' => 'SOP Pemotretan Barang Bukti',
            'data' => $data,
        ]);
    }
    public function SOP_Pemotretan_TSK()
    {
        $data = SOPPemotretanTSK::first();
        return Inertia::render('client/SOP/SOPPemotretanTSK', [
            'title' => 'SOP Pemotretan TSK',
            'data' => $data,
        ]);
    }
    public function SOP_Identifikasi_Wajah()
    {
        $data = SOPIdentifikasiWajah::first();
        return Inertia::render('client/SOP/SOPIdentifikasiWajah', [
            'title' => 'SOP Identifikasi Wajah',
            'data' => $data,
        ]);
    }
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
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
