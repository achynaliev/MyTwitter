import React, { useContext, useEffect } from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import "./cartMainPage.css"
import CartMainPage from './CartMainPage';
import { merchContext } from '../../contexts/MerchContext';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RightSideCart = () => {
    const { merch, cart, getCart, changeCountMerch, getAllMerch } = useContext(merchContext)
    useEffect(() => {
        getCart()
        getAllMerch()
    }, [])
    console.log(merch)
    return (
        <div className="rightSideCart">
            <div className="cartNavbar">
                <h3>Cart</h3>
                <ShoppingCart />
            </div>
            <div className="hz">

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {merch.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        <img width="50" src={item.imageURL} alt="" />
                                    </TableCell>

                                    <TableCell align="right">
                                        <input type="number" value="item.count" onChange={(e) => changeCountMerch(e.target.value, item.merch.id)} />
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.category}
                                    </TableCell>
                                    <TableCell align="right" align="right">
                                        <div>+</div>
                                        <div>-</div>
                                    </TableCell>


                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={3} align="right">Total:</TableCell>
                                {/* <TableCell colSpan={1} align="right">{cart.totalPrice} сом</TableCell> */}

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>
        </div >
    );
};

export default RightSideCart;