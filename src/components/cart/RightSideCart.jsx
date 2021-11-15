import React, { useContext, useEffect } from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import "./cartMainPage.css"
import { TableCell, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import CartMainPage from './CartMainPage';
import { merchContext } from '../../contexts/MerchContext';

const RightSideCart = () => {
    const { cart, getCart, changeCountMerch } = useContext(merchContext)
    useEffect(() => {
        getCart()
    }, [])
    return (
        <div className="rightSideCart">
            <div className="cartNavbar">
                <h3>Cart</h3>
                <ShoppingCart />
            </div>
            <div className="hz">


                <img height="50" src="https://www.atmo-suvenir.ru/upload/iblock/a94/a947161d7e266a9b9d68d1034656e72d.jpg" alt="" />

                <TableRow>
                    <TableCell>Title</TableCell>
                    {/* <TableCell align="right">Image</TableCell> */}
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                </TableRow>


            </div>
        </div >
    );
};

export default RightSideCart;