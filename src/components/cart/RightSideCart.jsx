import React, { useContext, useEffect, useState } from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import "./cartMainPage.css"
import CartMainPage from './CartMainPage';
import { merchContext } from '../../contexts/MerchContext';
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from 'react-router-dom';


const RightSideCart = () => {
    const { merch, cart, getCart, changeCountMerch, getAllMerch } = useContext(merchContext)
    useEffect(() => {
        getAllMerch()
    }, [])
    useEffect(() => {
        getCart()

    }, [])



    return (
        <div className="rightSideCart">
            <div className="cartNavbar">
                <h3>Cart</h3>
                <Link to="/products/all" style={{ textDecoration: "none" }}>
                    <div className="l-t">
                        <ProductionQuantityLimitsIcon className="leftListIcons" />
                        <h5 className="leftSideListText">Products</h5>
                    </div>
                </Link>
            </div>
            <div className="hz">


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 620 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart ? cart.merch.map((item) => (
                                <TableRow TableRow
                                    key={item.merch.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.merch.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        <img width="50" src={item.merch.imageURL} alt="" />
                                    </TableCell>

                                    <TableCell align="right">
                                        {item.merch.price}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.merch.category}
                                    </TableCell>


                                </TableRow>
                            )) : null}
                            <TableRow>
                                <TableCell colSpan={3} align="right">Total: </TableCell>
                                <TableCell colSpan={1} align="right">{cart ? cart.totalPrice : 0} сом</TableCell>

                            </TableRow>

                        </TableBody>

                    </Table>
                </TableContainer>

            </div>

        </div >

    )
};

export default RightSideCart;