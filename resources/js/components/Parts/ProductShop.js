import react,{ Component } from 'react';
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import axios from 'axios';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
class ProductShop extends Component {
    constructor(props){
        super(props);
        this.state = {
            productDetail : [],
            defaultImage : '',
        }
    }
    setDataPicture = (data) => {
        this.setState({productDetail : data});
        this.setState({defaultImage : data.galleries[0].photo});
    }
    componentDidMount() {
        axios.get('/api/product', {
            params : {
                id : this.props.productId
            }
        }).then( res => {
            this.setDataPicture(res.data.data);
    })
    }

    changeImage = (e) => {
        this.setState({defaultImage : e.target.src});
    }
    render()
    {
        const { productDetail, defaultImage } = this.state;
        return (
            productDetail ? (
                <section className="product-shop spad page-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                            {  
                                    productDetail.galleries ?
                                        (
                                <div className="col-lg-6">
                                    <div className="product-pic-zoom">
                                        <img className="product-big-img" src={defaultImage} alt="main-product-image" />
                                    </div>
                                    <div className="product-thumbs">
                                        <OwlCarousel className="product-thumbs-track ps-slider" 
                                            items= {3} autoplay={true}>
                                         {
                                            productDetail.galleries.map(gallery => (
                                                <div className="pt" data-imgbigurl={gallery.photo}>
                                                    <img src={gallery.photo} alt={`product- picture-${gallery.id}`} onClick={this.changeImage.bind(this)} id={`image-${gallery.id}`} />
                                                </div>
                                            ))
                                        }
                                        </OwlCarousel>
                                    </div>   
                                </div>
                                ) : (
                                    <div className="spinner"></div>
                                )
                                     }
                                        <div className="col-lg-6">
                                            <div className="product-details">
                                                <div className="pd-title">
                                                    <span>{productDetail.type}</span>
                                                    <h3>{productDetail.name}</h3>
                                                </div>
                                                <div className="pd-desc">
                                                    <p>
                                                       {productDetail.description}
                                                    </p>
                                                    <h4>{productDetail.price}</h4>
                                                </div>
                                                <div className="quantity">
                                                    <a href="/shoppingcart" className="primary-btn pd-cart">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                              
                                
                            </div>
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
}

export default ProductShop;