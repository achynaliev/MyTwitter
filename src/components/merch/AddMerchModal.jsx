import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import "./merch.css";
// import { color } from '@mui/system';


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
                        <form >
                            <TextField
                                label="Title"
                                type="text"
                                variant="standard"
                                name="name"
                            />
                            <TextField
                                label="Image"
                                type="text"
                                variant="standard"
                                name="image"
                            />
                            <TextField
                                label="Price"
                                type="number"
                                variant="standard"
                                name="price"
                            />
                            <TextField
                                label="Category"
                                type="text"
                                variant="standard"
                                name="category"
                            />

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



