@extends('layouts.default')


@section('content')
    <div class="orders">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Daftar Barang</h4>
                    </div>
                    @if (Session::has('success'))
                    <div class="alert alert-success">
                        {{ Session::get('success')}}
                    </div>
                    
                @endif
                    <div class="card-body">
                        <div class="table-stats order-table ov-h">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($items as $i)
                                    <tr>
                                        <td>{{ $i->id}}</td>
                                        <td>{{ $i->name}}</td>
                                        <td>{{ $i->type}}</td>
                                        <td>{{ $i->price}}</td>
                                        <td>{{ $i->quantity}}</td>
                                        <td>
                                            <a href="{{ route('product.gallery',  $i->id)}}" class="btn btn-info btn-sm">
                                                <i class="fa fa-picture-o"></i>
                                            </a>
                                            <a href="{{ route('product.edit', $i->id)}}" class="btn btn-pencil btn-sm">
                                                <i class="fa fa-pencil"></i>
                                            </a>
                                            <form action="{{ route('product.destroy', $i->id)}}" method="POST" class="d-inline">
                                                @csrf
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" onclick="return confirm('hapus data ini?')">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                    @empty
                                        <tr>
                                            <td colspan="6" class="text-center p-5">
                                                Data tidak tersedia
                                            </td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection