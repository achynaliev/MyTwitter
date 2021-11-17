import React from 'react';
import LeftSideBar from '../mainPage/LeftSideBar';
import CreditCardPage from './CreditCardPage';

const CreditMainPage = () => {
    return (
        <div className="credit-main-page">
            <LeftSideBar />
            <div className="ccp">

                <CreditCardPage />
            </div>
        </div>
    );
};

export default CreditMainPage;