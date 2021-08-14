import React from 'react';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Breadcrumb from '../Elements/Breadcrumb';
import ProductShop from '../parts/ProductShop';
import RelatedProduct from '../Parts/RelatedProduct';
const ProductPage = () => {
    return (
    <>
        <Header />
        <Breadcrumb>Detail</Breadcrumb>
        <ProductShop />
        <RelatedProduct />
        <Footer />
    </>
    );
}
export default ProductPage;