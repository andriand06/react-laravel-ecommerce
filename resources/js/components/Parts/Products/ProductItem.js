import React, {useState, useEffect} from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const ProductItem = () => {

    const [productList, setProductList ] = useState([]);

    useEffect(() => {
        axios.get('/api/product')
            .then(res => {
                setProductList(res.data.data.data) 
            })
    }, []);
    console.log(productList);
    return (
        productList.length > 0 && (
                        <OwlCarousel className="product-slider" autoplay={true} dots={false}> 
                        { 
                        productList.map((product, index) => {
                        return (
                        <div key={`product-item-${index}`} className="product-item">
                            <div className="pi-pic">
                                <img src={product.galleries[0].photo} alt="photo"/>
                                {/* {
                                    product.galleries.map((galleries,index) => {
                                        return (
                                            <img key={`galleries-photo-${index}`} src={galleries.photo} alt="photo"/>
                                        );
                                    })
                                } */}
                                <ul>
                                    <li className="w-icon active">
                                        <a href="#"><i className="icon_bag_alt"></i></a>
                                    </li>
                                    <li className="quick-view"><Link to={`/products/${product.id}`}>+ Quick View</Link></li>
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">{product.type}</div>
                                <a href="#">
                                    <h5>{product.name}</h5>
                                </a>
                                <div className="product-price">
                                    {product.price}
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                        
                )}
            )}
        
            </OwlCarousel>
            
        )
    
    )
}


export default ProductItem;