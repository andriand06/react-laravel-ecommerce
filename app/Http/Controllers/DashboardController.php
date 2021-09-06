<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductGallery;
use App\Models\Transaction;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        //ambil data transasction dimana transaction_status == SUCCESS lalu sum total transaksinya
        $income = Transaction::where('transaction_status','SUCCESS')->sum('transaction_total');
        //ambil seluruh data transaksi yang sudah terjadi
        $sales = Transaction::count();
        //ambil data transaksi urutkan berdasarkan id Descending ambil 5 data.
        $items = Transaction::orderBy('id','DESC')->take(5)->get();
        $pie = [
            'PENDING' => Transaction::where('transaction_status','PENDING')->count(),
            'FAILED' => Transaction::where('transaction_status','FAILED')->count(),
            'SUCCESS' => Transaction::where('transaction_status','SUCCESS')->count()
        ];  
        return view('pages.dashboard')->with([
            'income' => $income,
            'sales' => $sales,
            'items' => $items,  
            'pie' => $pie
        ]);
    }
}
