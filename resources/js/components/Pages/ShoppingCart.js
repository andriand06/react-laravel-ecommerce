import React from 'react'
import Header from '../Parts/Header';
import BreadCrumb from '../Elements/Breadcrumb'
import Cart from '../Parts/Cart'
const ShoppingCart = () =>  {
    return(
        <>
            <Header />
            <BreadCrumb>Shopping Cart</BreadCrumb>
            <Cart />
        </>
    );
}

export default ShoppingCart;