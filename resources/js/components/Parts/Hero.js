import React from 'react'
import Loadable from '@loadable/component';
import Button from '../Elements/Button';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const Hero = () => {
    return (
        <section className="hero-section">
            <OwlCarousel className="hero-items" items={1} autoplay={true}>
                <div className="single-hero-items set-bg hero1">
                    <div className="container">
                        <div className="row">   
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button href="#" className="primary-btn">Shop Now</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-hero-items set-bg hero2" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button href="#" className="primary-btn">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-hero-items set-bg hero3" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button href="#" className="primary-btn">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default Hero;