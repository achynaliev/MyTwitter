import React, { useContext, useEffect, useState } from 'react';
import "./merch.css";
import MerchCard from './MerchCard';
import { merchContext } from '../../contexts/MerchContext';
import { useNavigate, useParams } from 'react-router-dom';

const MerchCardList = () => {
    const { merch, getItemsByCategory } = useContext(merchContext)
    const [mrch, setMrch] = useState(merch)
    const params = useParams();
    useEffect(() => {
        getItemsByCategory(params.category)
    }, [])

    useEffect(() => { setMrch(merch) }, [merch])
    console.log(params.category)

    return (
        <div className="merchCardList">

            {
                mrch ? (
                    mrch.map((item) => <MerchCard
                        key={item.id} item={item}
                    />)
                ) : (
                    <div></div>
                )
            }
        </div>



    )


};

export default MerchCardList;