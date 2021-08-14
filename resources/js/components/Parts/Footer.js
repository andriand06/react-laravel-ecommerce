import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <a href="#"><img src="img/logo_website_shayna_white.png" alt="" /></a>
                        </div>
                        <ul>
                            <li>Address: Setra Duta, Bandung</li>
                            <li>Phone: +628 22081996</li>
                            <li>Email: hello.shayna@gmail.com</li>
                        </ul>
                        <div className="footer-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                    <div className="footer-widget">
                        <h5>Information</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Serivius</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-widget">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-reserved">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            Copyright &copy;
                            2021
                            All rights reserved | Shayna
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;