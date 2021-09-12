import React, { useState, useEffect} from 'react'
import Header from '../Parts/Header';
import Hero from '../Parts/Hero';
import Banner from '../Parts/Banner';
import Instagram from '../Parts/Instagram';
import PartnerLogo from '../Parts/PartnerLogo';
import Footer from '../Parts/Footer';
const LandingPage = () => {

    const [isLoading, setIsLoading ] = useState(false);
    return (
        <>
           <Header />
           <Hero />
           <Banner />
           <Instagram />
           <PartnerLogo />
           <Footer />
        </>
    )
}

export default LandingPage;