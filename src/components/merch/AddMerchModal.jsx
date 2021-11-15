import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./merch.css";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#16161D',
    border: '1px solid lightgrey',
    boxShadow: 24,
    p: 4,

};


const AddMerchModal = ({ handleClose, open }) => {

    return (
        <div className="addMerchModal">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        <form className="form">
                            <label color="white">Title: </label>
                            <input type="text" placeholder="" />

                            <label>Image: </label>
                            <input type="text" placeholder="" />

                            <label>Price: </label>
                            <input type="number" placeholder="" />

                            <label>Category: </label>
                            <input type="text" placeholder="" />
                        </form>
                        <Button
                            className="btnAddProduct"
                            variant="contained"
                            color="primary"
                            type="submit">Add Product</Button>

                    </Typography>

                </Box>
            </Modal>
        </div >
    );
};

export default AddMerchModal;



