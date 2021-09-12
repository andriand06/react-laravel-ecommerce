import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Breadcrumb from '../Elements/Breadcrumb';
import ProductShop from '../Parts/ProductShop';
import RelatedProduct from '../Parts/RelatedProduct';
const ProductPage = () => {
    const { id } = useParams();
    return (
    <>
        <Header />
        <Breadcrumb>Detail</Breadcrumb>
        <ProductShop productId = {id}/>
        <RelatedProduct />
        <Footer />
    </>
    );
}
export default withRouter(ProductPage);