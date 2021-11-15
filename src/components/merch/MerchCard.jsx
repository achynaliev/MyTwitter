import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { merchContext } from "../../contexts/MerchContext";

const MerchCard = ({ item }) => {
  const { addAndDeleteMerchInCart, checkMerchInCart } =
    useContext(merchContext);
  return (
    <Card
      sx={{
        maxWidth: 250,
        marginRight: "20px",
        minWidth: 250,
        height: 350,
        marginTop: 5,
        bgcolor: "rgb(43, 43, 42)",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        object-fit="cover"
        image={item.imageURL}
        alt=""
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "white",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          {item.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white", fontSize: "18px", fontWeight: 700 }}
        >
          price: {item.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ height: 0, display: "flex", justifyContent: "space-between" }}
      >
        <Button
          variant="contained"
          // onClick={(e) => handleAddToCart(e)}
          onClick={() => addAndDeleteMerchInCart(item)}
        >
          <ShoppingCartIcon
            color={checkMerchInCart(item.id) ? "error" : "white"}
          />
        </Button>
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>
  );
};

export default MerchCard;
