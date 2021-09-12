<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductGalleryController;
use App\Http\Controllers\TransactionController;
use App\Models\Product;
use App\Models\Transaction;
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
})->where('path','products|slides|shoppingcart|success');
Route::get('/{path?}/{id?}', function () {
    return view('main');
})->where('path','products');
Route::get('/dashboard',[DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');
require __DIR__.'/auth.php';
//kasi name products.gallery supaya bisa dipakai di route('products.gallery');
Route::get('/product/{id}/gallery',[ProductController::class, 'gallery'])->name('product.gallery');

Route::resource('product',ProductController::class);
Route::resource('product-galleries',ProductGalleryController::class);
Route::get('/transaction/{id}/set-status',[TransactionController::class, 'setStatus'])->name('transaction.status');
Route::resource('transaction',TransactionController::class);