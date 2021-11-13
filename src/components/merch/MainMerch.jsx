import React from 'react';
import LeftSideBar from '../mainPage/LeftSideBar';
import MerchRightSide from './MerchRightSide';
import "./merch.css";


const MainMerch = () => {
    return (
        <div className="merchPage">
            <div className="left-side">
                <LeftSideBar />
            </div>
            <div className="right-side">

                <MerchRightSide />
            </div>
        </div>
    );
};

export default MainMerch;