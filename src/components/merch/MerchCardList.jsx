import React, { useContext, useEffect } from 'react';
import "./merch.css";
import MerchCard from './MerchCard';

import { merchContext } from '../../contexts/MerchContext';

const MerchCardList = () => {
    const { merch, getAllMerch } = useContext(merchContext)
    useEffect(() => {
        getAllMerch()
    }, [])
    console.log(merch)

    return (
        <div className="merchCardList">

            {
                merch ? (
                    merch.map((item) => <MerchCard
                        key={item.id}
                    />)
                ) : (
                    <div></div>
                )
            }
        </div>



    )


};

export default MerchCardList;