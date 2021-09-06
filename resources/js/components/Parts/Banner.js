import React from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const Banner = () => {
    
    return(
        <section className="women-banner spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 mt-5">
                    <OwlCarousel className="product-slider" autoplay={true} dots={false}>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="img/mickey1.jpg" alt="" />
                                <ul>
                                    <li className="w-icon active">
                                        <a href="#"><i className="icon_bag_alt"></i></a>
                                    </li>
                                    <li className="quick-view"><a href="/products">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Coat</div>
                                <a href="#">
                                    <h5>Mickey Baggy</h5>
                                </a>
                                <div className="product-price">
                                    $14.00
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="img/products/women-2.jpg" alt="" />
                                <ul>
                                    <li className="w-icon active">
                                        <a href="#"><i className="icon_bag_alt"></i></a>
                                    </li>
                                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Shoes</div>
                                <a href="#">
                                    <h5>Guangzhou sweater</h5>
                                </a>
                                <div className="product-price">
                                    $13.00
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="img/products/women-3.jpg" alt="" />
                                <ul>
                                    <li className="w-icon active">
                                        <a href="#"><i className="icon_bag_alt"></i></a>
                                    </li>
                                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Towel</div>
                                <a href="#">
                                    <h5>Pure Pineapple</h5>
                                </a>
                                <div className="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="img/products/women-4.jpg" alt="" />
                                <ul>
                                    <li className="w-icon active">
                                        <a href="#"><i className="icon_bag_alt"></i></a>
                                    </li>
                                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                                    <li className="w-icon">
                                        <a href="#"><i className="fa fa-random"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Towel</div>
                                <a href="#">
                                    <h5>Converse Shoes</h5>
                                </a>
                                <div className="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner;