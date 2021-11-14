import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MerchCard = () => {
    return (
        <Card sx={{ maxWidth: 250, minWidth: 250, marginTop: 5 }}>
            <CardMedia
                component="img"
                width="140"
                // height="140"
                image="https://cdn1.ozone.ru/s3/multimedia-7/6066580783.jpg"
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    T-Shirt
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                >
                    Add to Cart</Button>
                <Button variant="contained">Buy</Button>
            </CardActions>
        </Card >
    );
};

export default MerchCard;