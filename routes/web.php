<?php

use App\Http\Controllers\User\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\ClientController;
use App\Http\Controllers\User\PoldaController;
use App\Http\Controllers\User\PusinafisController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/fail404', function () {
    return Inertia::render('404', [
        'title' => '404',
    ]);
})->name('fail404');

Route::get('/', function () {
    if (Auth::check()) {
        switch (Auth::user()->role_id) {
            case 1:
                return redirect()->route('admin');
            case 2:
                return redirect()->route('pusinafis');
            case 3:
                return redirect()->route('polda');
            case 4:
                return redirect()->route('polres');
            default:
                return redirect()->route('fail404');
        }
    } else {
        return redirect()->route('login'); // Atau halaman login atau welcome page
    }
})->name('home');


Route::prefix('/pusinafis')->middleware(['auth', 'role:2', 'verified'])->group(function () {
    Route::get('/', [ClientController::class, 'index'])->name('pusinafis');
    Route::get('/identifikasi-wajah', [ClientController::class, 'IdentifikasiWajah'])->name('pusinafis.identifikasi-wajah');
    Route::get('/tersangka', [ClientController::class, 'Tersangka'])->name('pusinafis.tersangka');
    Route::get('/sop-pemotretan-tkp', [ClientController::class, 'SOP_Pemotretan_TKP'])->name('pusinafis.sop-pemotretan-tkp');
    Route::get('/sop-pemotretan-barang-bukti', [ClientController::class, 'SOP_Pemotretan_Barang_Bukti'])->name('pusinafis.sop-pemotretan-bb');
    Route::get('/sop-pemotretan-tsk', [ClientController::class, 'SOP_Pemotretan_TSK'])->name('pusinafis.sop-pemotretan-tsk');
    Route::get('/sop-identifikasi-wajah', [ClientController::class, 'SOP_Identifikasi_Wajah'])->name('pusinafis.sop-identifikasi-wajah');
    Route::get('/sop-rekontruksi-wajah', [ClientController::class, 'SOP_Rekontruksi_Wajah'])->name('pusinafis.sop-rekontruksi-wajah');
});

Route::prefix('/polda')->middleware(['auth', 'role:3', 'verified'])->group(function () {
    Route::get('/', [ClientController::class, 'index'])->name('polda');
    Route::get('/identifikasi-wajah', [ClientController::class, 'IdentifikasiWajah'])->name('polda.identifikasi-wajah');
    Route::get('/tersangka', [ClientController::class, 'Tersangka'])->name('polda.tersangka');
    Route::get('/sop-pemotretan-barang-bukti', [ClientController::class, 'SOP_Pemotretan_Barang_Bukti'])->name('polda.sop-pemotretan-bb');
    Route::get('/sop-pemotretan-tkp', [ClientController::class, 'SOP_Pemotretan_TKP'])->name('polda.sop-pemotretan-tkp');
    Route::get('/sop-pemotretan-tsk', [ClientController::class, 'SOP_Pemotretan_TSK'])->name('polda.sop-pemotretan-tsk');
    Route::get('/sop-identifikasi-wajah', [ClientController::class, 'SOP_Identifikasi_Wajah'])->name('polda.sop-identifikasi-wajah');
    Route::get('/sop-rekontruksi-wajah', [ClientController::class, 'SOP_Rekontruksi_Wajah'])->name('polda.sop-rekontruksi-wajah');
});

Route::prefix('/polres')->middleware(['auth', 'role:4', 'verified'])->group(function () {
    Route::get('/', [ClientController::class, 'index'])->name('polres');
    Route::get('/identifikasi-wajah', [ClientController::class, 'IdentifikasiWajah'])->name('polres.identifikasi-wajah');
    Route::get('/tersangka', [ClientController::class, 'Tersangka'])->name('polres.tersangka');
    Route::get('/sop-pemotretan-barang-bukti', [ClientController::class, 'SOP_Pemotretan_Barang_Bukti'])->name('polres.sop-pemotretan-bb');
    Route::get('/sop-pemotretan-tkp', [ClientController::class, 'SOP_Pemotretan_TKP'])->name('polres.sop-pemotretan-tkp');
    Route::get('/sop-pemotretan-tsk', [ClientController::class, 'SOP_Pemotretan_TSK'])->name('polres.sop-pemotretan-tsk');
    Route::get('/sop-identifikasi-wajah', [ClientController::class, 'SOP_Identifikasi_Wajah'])->name('polres.sop-identifikasi-wajah');
    Route::get('/sop-rekontruksi-wajah', [ClientController::class, 'SOP_Rekontruksi_Wajah'])->name('polres.sop-rekontruksi-wajah');
});

Route::prefix('admin')->middleware(['auth', 'role:1', 'verified'])->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin');
    Route::get('/sop-pemotretan-barang-bukti', [AdminController::class, 'SOP_Pemotretan_Barang_Bukti'])->name('admin.sop-pemotretan-bb');
    Route::post('/sop-pemotretan-barang-bukti', [AdminController::class, 'createSOP_Pemotretan_Barang_Bukti'])->name('admin.create-sop-pemotretan-bb');
    Route::get('/sop-pemotretan-tkp', [AdminController::class, 'SOP_Pemotretan_TKP'])->name('admin.sop-pemotretan-tkp');
    Route::post('/sop-pemotretan-tkp', [AdminController::class, 'createSOP_Pemotretan_TKP'])->name('admin.create-sop-pemotretan-tkp');
    Route::get('/sop-pemotretan-tsk', [AdminController::class, 'SOP_Pemotretan_TSK'])->name('admin.sop-pemotretan-tsk');
    Route::post('/sop-pemotretan-tsk', [AdminController::class, 'createSOP_Pemotretan_TSK'])->name('admin.create-sop-pemotretan-tsk');
    Route::get('/sop-identifikasi-wajah', [AdminController::class, 'SOP_Identifikasi_Wajah'])->name('admin.sop-identifikasi-wajah');
    Route::post('/sop-identifikasi-wajah', [AdminController::class, 'createSOP_Identifikasi_Wajah'])->name('admin.create-sop-identifikasi-wajah');
    Route::get('/sop-rekontruksi-wajah', [AdminController::class, 'SOP_Rekontruksi_Wajah'])->name('admin.sop-rekontruksi-wajah');
    Route::post('/sop-rekontruksi-wajah', [AdminController::class, 'createSOP_Rekontruksi_Wajah'])->name('admin.create-sop-rekontruksi-wajah');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
