import React from 'react';
import MerchCard from './MerchCard';
import { Button, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddMerchModal from '../merch/AddMerchModal'
import MerchCardList from "./MerchCardList"



const MerchRightSide = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="rightSideMerch">
            <div className="merchNavbar">
                <h3>Merchandise</h3>
                <div className="m-n">
                    <Button
                        variant="contained"
                        onClick={handleOpen}

                    >Add</Button>
                    <ShoppingCartIcon />
                    <AddMerchModal handleClose={handleClose} open={open}

                    />
                </div>
            </div>

            <div className="categories">
                <h3>Categories</h3>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <h3>T-Shirt</h3>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <h3>Cap</h3>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <h3>Scarf</h3>
                </Link>

            </div>

            <div className="merchCard">
                <MerchCardList />
            </div>
        </div>
    );
};

export default MerchRightSide;