@extends('layouts.default')


@section('content')
    <div class="card">
        <div class="card-header">
            <strong>Tambah Foto Barang</strong>
        </div>
        <div class="card-body card-block">
            <form action="{{ route('product-galleries.store')}}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label for="name" class="form-control-label">Nama Barang</label>
                    <select name="products_id" class="form-control @error('products_id')
                        is-invalid
                        @enderror">
                        @foreach ($products as $product)
                            <option value="{{ $product->id}}">{{ $product->name}}</option>  
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="photo" class="form-control-label">Foto Barang</label>
                    <input type="file" class="form-control @error('photo')
                        is-invalid
                    @enderror" name="photo" accept="image/*" required value="{{ old('photo')}}">
                </div>
                <div class="form-group">
                    <label for="is_default" class="form-control-label">Jadikan Default</label>
                    <br>
                    <label for="">
                        <input type="radio" name="is_default" value="1" class="form-control @error('is_default')
                            is-invalid
                        @enderror" name="is_default" value="{{ old('is_default')}}">
                        Ya
                    </label>
                    <label for="">
                        <input type="radio" name="is_default" value="0" class="form-control @error('is_default')
                            is-invalid
                        @enderror" name="is_default" value="{{ old('is_default')}}">
                        Tidak
                    </label>

                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Tambah Foto Barang
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection