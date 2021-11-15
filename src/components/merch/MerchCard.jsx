import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MerchCard = ({ item }) => {
    function handleAddToCart(e) {
        e.preventDefault()
        let cart = localStorage.getItem("cart")
        if (cart) {
            cart = JSON.parse(cart)
            cart.push(item)
            cart = JSON.stringify(cart)
            localStorage.setItem("cart", cart)
        } else {
            cart = [item]
            cart = JSON.stringify(cart)
            localStorage.setItem("cart", cart)
        }
    }
    return (
        <Card sx={{ maxWidth: 250, minWidth: 250, marginTop: 5 }}>
            <CardMedia
                component="img"
                width="140"
                // height="140"
                image={item.imageURL}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    onClick={(e) => handleAddToCart(e)}
                >
                    Add to Cart</Button>
                <Button variant="contained">Buy</Button>
            </CardActions>
        </Card >
    );
};

export default MerchCard;