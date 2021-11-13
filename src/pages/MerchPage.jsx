import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { merchContext } from '../contexts/MerchContext';


const MerchPage = () => {

    const { merch } = useContext(merchContext)
    useEffect(() => {

    }, [])
    // console.log(merch)

    return (
        <div>

        </div>
    );
};

export default MerchPage;
