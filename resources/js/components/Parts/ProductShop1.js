import React, {useState, useEffect} from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import axios from 'axios';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const ProductShop = ({productId}) => {
    const [ defaultImage, setDefaultImage ] = useState('img/mickey1.jpg');
    const [productDetail, setProductDetail ] = useState([]);
    
    useEffect(() => {
        axios.get('/api/product', {
            params : {
                id : productId
            }
        }).then(res => (setProductDetail(res.data.data))
        )
    },[]);
    const changeImage = (e) => {
        setDefaultImage(e.target.src);
    }
    console.log(productDetail);
    return (
         productDetail.length ? (
        <section className="product-shop spad page-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     {
                        productDetail.map((product) => {
                            return (
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" src={defaultImage} alt="" />
                            </div>
                            <div className="product-thumbs">
                                <OwlCarousel className="product-thumbs-track ps-slider" 
                                    items= {3} autoplay={true}>
                                    {
                                        productDetail.galleries.map((gallery,index) => {
                                            <div className="pt" data-imgbigurl={gallery.photo}>
                                            <img src={gallery.photo} alt={`product picture ${index}`} onClick={changeImage} id={`image-${index}`} />
                                        </div>
                                        })
                                    }
                                </OwlCarousel>
                             
                            </div>
                        </div>
                        
                       
                                <div className="col-lg-6">
                                    <div className="product-details">
                                        <div className="pd-title">
                                            <span>{product.type}</span>
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="pd-desc">
                                            <p>
                                               {product.description}
                                            </p>
                                            <h4>{product.price}</h4>
                                        </div>
                                        <div className="quantity">
                                            <a href="/shoppingcart" className="primary-btn pd-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                      
                        
                    </div>
                        )})
                        }
                        
                </div>
            
            
            </div>
        </div>
    </section>
         ) : (
             <div className="spinner">
             </div>
         )
    );
}

export default ProductShop1;