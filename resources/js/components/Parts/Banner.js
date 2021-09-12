import React, {Component} from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import  ProductItem  from './Products/ProductItem';
import axios from 'axios';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
export default class Banner extends Component{
    render() {
        return(
        <section className="women-banner spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 mt-5">
                
                    <ProductItem /> 
               
                </div>
            </div>
        </div>
    </section>
    
        );
    }
}
