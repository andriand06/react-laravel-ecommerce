import React,{useState} from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const ProductShop = () => {
    const [ defaultImage, setDefaultImage ] = useState('img/mickey1.jpg');

    const changeImage = (e) => {
        setDefaultImage(e.target.src);
    

    }


    return(
        <section className="product-shop spad page-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" src={defaultImage} alt="" />
                            </div>
                            <div className="product-thumbs">
                                <OwlCarousel className="product-thumbs-track ps-slider" items={3} autoplay={true}>
                                    <div className="pt" data-imgbigurl="img/mickey1.jpg">
                                        <img src="img/mickey1.jpg" alt="" onClick={changeImage} id="image1" />
                                    </div>

                                    <div className="pt"  data-imgbigurl="img/mickey2.jpg">
                                        <img src="img/mickey2.jpg" alt="" onClick={changeImage} id="image2"/>
                                    </div>

                                    <div className="pt"  data-imgbigurl="img/mickey3.jpg">
                                        <img src="img/mickey3.jpg" alt="" onClick={changeImage} id="image3" />
                                    </div>

                                    <div className="pt"  data-imgbigurl="img/mickey4.jpg">
                                        <img src="img/mickey4.jpg" alt="" onClick={changeImage} id="image4"/>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-details">
                                <div className="pd-title">
                                    <span>oranges</span>
                                    <h3>Pure Pineapple</h3>
                                </div>
                                <div className="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                        Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                        Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                    </p>
                                    <h4>$495.00</h4>
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
    );
}

export default ProductShop;