import React from 'react'
import Loadable from '@loadable/component';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const OwlCarousel = Loadable(() => import('react-owl-carousel'));
const PartnerLogo = () => {
    return (
        <div className="partner-logo">
        <div className="container">
            <OwlCarousel className="logo-carousel" items={5} loop={true}>
                <div className="logo-item">
                    <div className="tablecell-inner">
                        <img src="img/logo-carousel/logo-1.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                        <img src="img/logo-carousel/logo-2.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                        <img src="img/logo-carousel/logo-3.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                        <img src="img/logo-carousel/logo-4.png" alt="" />
                    </div>
                </div>
                <div className="logo-item">
                    <div className="tablecell-inner">
                        <img src="img/logo-carousel/logo-5.png" alt="" />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
    );
}

export default PartnerLogo;