import React from 'react';
import MerchCard from './MerchCard';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddMerchModal from '../merch/AddMerchModal'
const MerchRightSide = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="rightSideMerch">
            <div className="merchNavbar">
                <h3>Merchendise</h3>
                <div className="m-n">
                    <Button
                        variant="contained"
                        onClick={handleOpen}

                    >Add</Button>
                    <ShoppingCartIcon />
                    <AddMerchModal handleClose={handleClose} open={open} />
                </div>
            </div>
            <div>

                <MerchCard />
            </div>
        </div>
    );
};

export default MerchRightSide;