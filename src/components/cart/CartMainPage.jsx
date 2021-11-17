import React from 'react';
import LeftSideBar from '../mainPage/LeftSideBar';
import MerchRightSide from '../merch/MerchRightSide';
import "./cartMainPage.css"
import RightSideCart from './RightSideCart';

const CartMainPage = () => {
    return (
        <div className="cartMainPage">
            <LeftSideBar />
            <RightSideCart />

        </div>

    );
};

export default CartMainPage;