import React from 'react'

const Cart = () => {
    return (
            <section className="shopping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th className="p-name text-center">Product Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="cart-pic first-row">
                                                    <img src="img/cart-page/product-1.jpg" />
                                                </td>
                                                <td className="cart-title first-row text-center">
                                                    <h5>Pure Pineapple</h5>
                                                </td>
                                                <td className="p-price first-row">$60.00</td>
                                                <td className="delete-item"><a href="#"><i className="material-icons">
                                                close
                                                </i></a></td>
                                            </tr>
                                            <tr>
                                                <td className="cart-pic first-row">
                                                    <img src="img/cart-page/product-1.jpg" />
                                                </td>
                                                <td className="cart-title first-row text-center">
                                                    <h5>Pure Pineapple</h5>
                                                </td>
                                                <td className="p-price first-row">$60.00</td>
                                                <td className="delete-item"><a href="#"><i className="material-icons">
                                                close
                                                </i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h4 className="mb-4">
                                    Informasi Pembeli:
                                </h4>
                                <div className="user-checkout">
                                    <form>
                                        <div className="form-group">
                                            <label for="namaLengkap">Nama lengkap</label>
                                            <input type="text" className="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="namaLengkap">Email Address</label>
                                            <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="namaLengkap">No. HP</label>
                                            <input type="text" className="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="alamatLengkap">Alamat Lengkap</label>
                                            <textarea className="form-control" id="alamatLengkap" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="proceed-checkout">
                                    <ul>
                                        <li className="subtotal">ID Transaction <span>#SH12000</span></li>
                                        <li className="subtotal mt-3">Subtotal <span>$240.00</span></li>
                                        <li className="subtotal mt-3">Pajak <span>10%</span></li>
                                        <li className="subtotal mt-3">Total Biaya <span>$440.00</span></li>
                                        <li className="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                        <li className="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                        <li className="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
                                    </ul>
                                    <a href="/success" className="proceed-btn">I ALREADY PAID</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;