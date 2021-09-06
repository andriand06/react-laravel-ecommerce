@extends('layouts.default')


@section('content')
    <div class="orders">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Daftar Transaksi Masuk</h4>
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
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>No Telp</th>
                                        <th>Total Transaksi</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($items as $i)
                                    <tr>
                                        <td>{{ $i->id}}</td>
                                        <td>{{ $i->name}}</td>
                                        <td>{{ $i->email}}</td>
                                        <td>{{ $i->phone}}</td>
                                        <td>${{ $i->transaction_total}}</td>
                                        <td>
                                            @if ($i->transaction_status == "PENDING")
                                                <span class="badge badge-info">
                                            @elseif ($i->transaction_status == 'SUCCESS')
                                                <span class="badge badge-success">
                                            @elseif ($i->transaction_status == 'FAILED')
                                                <span class="badge badge-warning">
                                            @else
                                                <span>
                                            @endif
                                            {{ $i->transaction_status }}
                                            </span>
                                        </td>
                                        <td>
                                            @if ($i->transaction_status == "PENDING")
                                                <a href="{{ route('transaction.status', $i->id) }}?status=SUCCESS" class="btn btn-success btn-sm"><i class="fa fa-check"></i></a>
                                                <a href="{{ route('transaction.status', $i->id) }}?status=FAILED" class="btn btn-danger btn-sm"><i class="fa fa-times"></i></a>
                                            @endif
                                            <a href="#mymodal" data-remote="{{ route('transaction.show', $i->id)}}" data-toggle="modal" data-target="#mymodal" data-title="Detail Transaksi {{ $i->uuid}}" class="btn btn-info btn-sm">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                            <a href="{{ route('transaction.edit', $i->id)}}" class="btn btn-pencil btn-sm">
                                                <i class="fa fa-pencil"></i>
                                            </a>
                                            <form action="{{ route('transaction.destroy', $i->id)}}" method="POST" class="d-inline">
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