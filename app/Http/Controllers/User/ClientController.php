<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
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
