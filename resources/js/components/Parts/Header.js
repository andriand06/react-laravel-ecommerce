import React from 'react'
import Button from '../Elements/Button';
const Header = () => {
    return (
    <header className="header-section">
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i> hello.shayna@gmail.com
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"><a href="tel:+6281363883325"></a>+62 813 6388 3325</i> 
                    </div>
                </div>
                <div className="ht-right">
                    <div className="auth-service">
                        <a href="/register" className="">Daftar</a>
                        <span> | </span>
                        <a href="/login" className="">Login</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="../img/logo_website_shayna.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7"></div>
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                            <li className="cart-icon">
                                Keranjang Belanja &nbsp;
                                <a href="#">
                                    <i className="icon_bag_alt"></i>
                                    <span>3</span>
                                </a>
                                <div className="cart-hover">
                                    <div className="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="si-pic">
                                                        <img src="../img/select-product-1.jpg" alt="" />
                                                    </td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="si-pic">
                                                        <img src="../img/select-product-2.jpg" alt="" />
                                                    </td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                        <h5>$120.00</h5>
                                    </div>
                                    <div className="select-button">
                                        <Button href="#" className="primary-btn view-card">VIEW CARD</Button>
                                        <Button href="#" className="primary-btn checkout-btn">CHECK OUT</Button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;