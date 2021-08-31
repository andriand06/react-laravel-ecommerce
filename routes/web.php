<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductGalleryController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('main');
});
//to handle switch route in react
Route::get('/{path?}', function () {
    return view('main');
})->where('path','.*');
Route::get('/{path?}', function () {
    return view('pages.dashboard');
})->where('path','dashboard')->middleware(['auth'])->name('dashboard');
Route::get('/dashboard', function () {
    return view('pages.dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Route::resource('product',ProductController::class);

Route::resource('product-galleries',ProductGalleryController::class);