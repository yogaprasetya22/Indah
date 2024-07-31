<?php

use App\Http\Controllers\User\AdminController;
use App\Http\Controllers\ProfileController;
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
    Route::get('/', [PusinafisController::class, 'index'])->name('pusinafis');
});

Route::prefix('/polda')->middleware(['auth', 'role:3', 'verified'])->group(function () {
    Route::get('/', [PoldaController::class, 'index'])->name('polda');
});

Route::prefix('/polres')->middleware(['auth', 'role:4', 'verified'])->group(function () {
    Route::get('/', [PoldaController::class, 'index'])->name('polres');
});

Route::prefix('admin')->middleware(['auth', 'role:1', 'verified'])->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
