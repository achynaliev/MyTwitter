import React from 'react';
import MerchCard from './MerchCard';
import MerchRightSideNavbar from './MerchRightSideNavbar';

const MerchRightSide = () => {
    return (
        <div>
            <div className="navbar">
                <MerchRightSideNavbar />

            </div>
            <div>

                <MerchCard />
            </div>
        </div>
    );
};

export default MerchRightSide;